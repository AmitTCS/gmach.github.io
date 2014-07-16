var j$ = j$ || jQuery.noConflict();

var displayedMenus, currentMenus;
var newMenuChanges = false;
var displayedTopArticles, currentTopArticles;
var newTopArticleChanges = false;
var displayedLatestNews, currentLatestNews;
var newLatestNewsChanges = false;
var pendingNewArticles = [];
var refreshedArticles = [];
var cachedArticlesPollPeriod = 5 * 60 * 1000;  // Every 5 minutes
var menusPollPeriod = 60* 60 * 1000;  // Every hour
var topArticlesPollPeriod = 30* 60 * 1000;  // Every 30 mins
var latestNewsPollPeriod = 30* 60 * 1000;  // Every 30 mins
var RedSourcePage = 'PlanetRed_RedSource';
var ArticleDisplayPage = 'PlanetRed_RedSource_ArticleDisplay';
var ArticleChatterPage = 'PlanetRed_RedSource_ArticleChatter';
var SearchResultsPage = 'PlanetRed_RedSource_SearchResults';
var originalTitle = false;
var viewManager;
var timer = null;
var loadingHandle = null;
var searchIndex = new localCache('searchIndex', loadArticles, 1440);
var articleCacheLib = new localCacheLibrary('articles', loadArticle, 1440, 3000);
var developerMode = location.hostname.indexOf('force.com') == -1;
var isBloodyStupidIE8 = j$('body>div.ie8').length > 0;

try { // Visualforce only 
    Visualforce.remoting.timeout = 120000; // Set timeout at page level
    Visualforce.remoting.maxretries = 2; // Set retries at page level
} catch (e) {}

if (developerMode) { // Local testing load static test pages
    RedSourcePage += '.html';
    ArticleDisplayPage += '.html';
   // ArticleChatterPage += '.html';
    SearchResultsPage += '.html';
}

function ViewManagerClass(views) {
    // Some element caching
    var elems = {
        head: j$("head"),
        title: j$("head title"),
        body: j$("body")
    };
    var currentViewName = null;
    
    if (!views) {
    // Default view objects in case no one provides one.
    // This is a good example of how to pass in views.
        views = {
            "home": {
                show: function() {
                    j$('.leftcol, .home, .video_panel').show();
                },
                hide: function() {
                    
                }
            }
        };
    }
    
    function setTitle(title) {
        document.title = title;
    }
    
    function showView(viewName, query, cb) {
        var viewObject = views[viewName];
        
        if (!viewObject.title) {
            // Looks complicated, but is actually useful for wrapping the title var
            // in a closed context, so as not to pollute our main context
            viewObject.title = (function(title){
                return function(){ return title; };
            })(j$("title").html());
        }
        
        var doneFunc = function() {
            if (currentViewName) hideView(currentViewName);
            currentViewName = viewName;
            elems.body.addClass(viewName + "_view");
            setTitle(viewObject.title());
            cb();
        };
        
        if (typeof(viewObject.show) !== "undefined") {
            if (query) {
                viewObject.show(query, doneFunc);
            }
            else viewObject.show(doneFunc);
        }
        
    }
    
    function hideView(viewName) {
        var viewObject = views[viewName];
        elems.body.removeClass(viewName + "_view");
        if (typeof(viewObject.hide) !== "undefined") viewObject.hide();
    }
    
    return {
        // This is the actual method you call to load in one view and hide all others
        loadView: function(viewName, query, cb) {
            if (!viewName || !views[viewName]) viewName = "home";
            if (!cb) cb = function(){};
            showView(viewName, query, cb);
        }
    }
}

// All methods are optional!
viewManager = ViewManagerClass({
    "home": {
        // Looks complicated, but is actually useful for wrapping the title var
        // in a closed context, so as not to pollute our main context
        title: (function(title){
            return function(){ return title; };
        })(j$("title").html()),
        show: function(done) {
            j$(".dialogpopup").hide();
            done();
        }
    },
    "article": {
        title: function(){
            return j$(".articleTitle").html();
        },
        show: function(query, done) {
            articleCacheLib.get(query, function (data) {
                document.getElementById("articlewrapper").innerHTML = data;
                j$('html, body').scrollTop(0); // fix PRRS-615 - LP link navigating to middle of the page
                loadChatterInline(j$("#chatterwrapper"));

                try { // Visualforce only
                    var KnowledgeArticleId = j$('#KnowledgeArticleId').val();
                    PR_RS_MasterController.markArticleAsRead(KnowledgeArticleId, function(result, event) {
                        //console.log(event.status);
                    });

                    PR_RS_MasterController.upsertResourceLog(KnowledgeArticleId, function(result, event) {
                        //console.log(event.status);
                    });
                } catch (e) {}

                convertOldPageLinks(j$("#articlewrapper a[href]"));

                applyScrollToAnchorLinks(j$("#articlewrapper"));

                if (window.location.hash.indexOf("scrollToAnchor=") !== -1) {
                    scrollToAnchor(window.location.hash.split("scrollToAnchor=")[1].split("_").join(" "));
                }

                // Afterwards
                j$(".dialogpopup").hide();
                done();
            });
        }
    },
    "searchresults": {
        title: function() {
            return "Search Results";
        },
        show: function(query, done) {
            j$.get(SearchResultsPage + '?' + query,
                null,
                function(data, textStatus, jqXHR) {
                    if (textStatus == 'success') {
                        document.getElementById("searchResultsWrapper").innerHTML = data;
                        j$(".dialogpopup").hide();
                        j$('.SearchResults #content').pajinate({
                            item_container_id : ".searchContents",
                            show_first_last : false,
                            num_page_links_to_display : 3,
                            items_per_page : 10
                        });

                        // hide ellipses in pagination
                        j$('.previous_link, .next_link, .page_link').click(function(){
                            j$('.SearchResults .ellipse.less, .SearchResults .ellipse.more').hide();
                        });
                        done();
                    }
                },
            'html');
        }
    }
});


function loadArticle(query, setCache) {
            j$.get(ArticleDisplayPage + '?' + query, 
                null,
                function(data, textStatus, jqXHR) {
                    if (textStatus == 'success') {
                        setCache(data);
                    }
                },
                'html');
}

function loadArticles(setCache) {
    try { // Visualforce only 
        if (developerMode) { // local testing load data from json file
            j$.getJSON("allarticles.json", function (result) {
                if (searchIndex.data() == null) {
                    setCache(result);
                }
            }).fail(function( jqxhr, textStatus, error ) {
                var err = textStatus + ', ' + error;
                console.log( "Request Failed: " + err);
            });
        } else {
            Visualforce.remoting.Manager.invokeAction(
                'PR_RS_MasterController.getAllArticlesForCache',
                function(result, event) {
                    if (event.status) {
                        if (searchIndex.data() == null) {
                            setCache(result);
                        }
                    }
                },
                { buffer: true, escape: true}
            );
        }
    } catch (e) {}
}

if (getURLParameter('refresh')) {
    window.localStorage.removeItem('searchIndex');
    window.localStorage.removeItem('articles');
    searchIndex.refresh(onCacheGetSuccess);
} else {
    searchIndex.get(onCacheGetSuccess);
}

function checkHash(url) {
    timer = new Date().getTime();
    if (window.location.hash === "") {
        // Make sure the viewManager is ready to go before we do anything
         window.location.reload();
        return;
    }
    if (url.indexOf('#') >= 0) {
        var hash = url.split('#')[1];
        var query = hash.split('?')[1];
        var urlname = getURLParameter('urlname');
        var articleType = getURLParameter('articleType');
        if (hash.indexOf('/article?') == 0) {
            query = 'urlname=' + urlname + '&articleType=' + articleType;
            viewManager.loadView("article", query, function() {
                var pageTitle= document.title;
                var uri = location.pathname + '#/article?' + query;
                logGoogleAnalytics(uri, pageTitle);
            });
        } else if (hash.indexOf('/search?') == 0) {
            viewManager.loadView("searchresults", query, function() {
                if(getURLParameter('newsLink')=='true') {
                    document.title = 'All News Articles';
                }
                var pageTitle= document.title;
                var uri = location.pathname + location.hash;
                logGoogleAnalytics(uri, pageTitle);
            });
        }
        return;
    }
}

function getURLParameter(name) {
    name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
    var regexS = "[\\?&]"+name+"=([^&#]*)";
    var regex = new RegExp( regexS );
    var results = regex.exec( window.location.href );
    if( results == null )
        return "";
    else
        return results[1];
}

function onCacheGetSuccess() {
    setTimeout("pollCachedArticleChanges()", cachedArticlesPollPeriod);
}

function removeAngularHashes(articles) {
    j$.each(articles, function(i, e) {
        if (e && e.hasOwnProperty('$$hashKey')) {
            delete e.$$hashKey;
        }
    });
}

function containsObject(obj, list) {
    var res = _.find(list, function(val){ return _.isEqual(obj, val)});
    return (_.isObject(res))? true:false;
}

// Returns difference between two arrays, supports array of objects.
// Example: findDifference(input, colours, "UrlName"); // will compare urlNames in both
function findDifference(subset, set, propertyName) {
    return _.filter(subset, function(obj){
        return !_.find(set, function(item){
            return item[propertyName] == obj[propertyName];
        })
    });
}

function pollCachedArticleChanges() {
    try { // Visualforce only
        Visualforce.remoting.Manager.invokeAction(
            'PR_RS_MasterController.getRecentArticlesForCache',
            function(result, event) {
                if (event.status) {
                    var si = JSON.parse(window.localStorage.getItem('searchIndex')).data;
                    // Check for new articles against search index
                    var newArticlesDiff = findDifference(result, si, "UrlName");
                    if (newArticlesDiff.length) {
                        // We have new articles, so we need to push them to the pendingNewArticles
                        _(newArticlesDiff).each(function(item) {
                            if (!containsObject(item, pendingNewArticles)) {
                                pendingNewArticles.push(item);
                            }
                        });
                    }

                    // Check for updated articles
                    _(result).each(function(caw) {
                        var query = "urlname=" + caw.UrlName + "&articleType=" + caw.articleType;
                        if (articleCacheLib.lib[query] && articleCacheLib.lib[query].retrieved < new Date(caw.dateLastModified).getTime() + (5 * 60000)) {
                            articleCacheLib.refresh(query);
                        }
                    });
                }
            },
            { buffer: true, escape: true}
        );
    } catch (e2) {}

    setTimeout("pollCachedArticleChanges()", cachedArticlesPollPeriod);
}

function removeExpiredArticles()
{
    var now = new Date().getTime();
    var searchIndexString = JSON.parse(window.localStorage.getItem('searchIndex'));
    // Haven't filled cache
    if (typeof(searchIndexString) === "null" || typeof(searchIndexString) === "undefined" || searchIndexString == null) return;
    
    var si = searchIndexString.data;
    var expiredArticles = [];
    var needsToExit = false;
    _(si).each(function(caw){
        if (articleType === "External" || needsToExit) return;
        if (typeof(caw.Expiry_Date) === "undefined" || typeof(caw.Expiry_Date) === "null") {
            // We need to clear the cache because the expiry date doesn't exist here
            window.localStorage.removeItem('searchIndex');
            needsToExit = true;
            return;
        };
        var expiryDate = new Date(caw.Expiry_Date).getTime();
        var startDate = new Date(caw.StartDate).getTime();
        var active = startDate <= now && now <= expiryDate;
        var articleType = caw.articleType;
        if (articleType == 'Internal' && !active) {
            expiredArticles.push(caw);
        }
    });
    searchIndex.removeItems(expiredArticles);
    //articleCacheLib.removeItems(expiredArticles);
}      

function loadMenus() {
    try { // Visualforce only 
        Visualforce.remoting.Manager.invokeAction(
            'PR_RS_MasterController.getMenus',
            function(result,event) {
                if (event.status) {
                    displayedMenus = currentMenus = result;
                    pollMenuChanges();
                }
            },
            { buffer: true, escape: true }
        );
    } catch (e) {}
}

function pollMenuChanges()
{   
    try { // Visualforce only 
        Visualforce.remoting.Manager.invokeAction(
            'PR_RS_MasterController.getMenus',
            function(result,event) {
                if (event.status) {
                    currentMenus = result;
                    newMenuChanges = !_.isEqual(displayedMenus, currentMenus);
                    if (newMenuChanges) {
                        //setPendingChangesState('New Menus!');
                    }
                    setTimeout("pollMenuChanges()", menusPollPeriod);
                }
            },
            { buffer: true, escape: true }
        );
    } catch (e) {}
}

function loadTopArticles() {
    try { // Visualforce only 
        Visualforce.remoting.Manager.invokeAction(
            'PR_RS_MasterController.getTopArticles',
            function(result,event) {
                if (event.status) {
                    displayedTopArticles = currentTopArticles = result;
                    pollTopArticleChanges();
                }
            },
            { buffer: true, escape: true }
        );
    } catch (e) {}
}

function pollTopArticleChanges()
{
    try { // Visualforce only 
        Visualforce.remoting.Manager.invokeAction(
            'PR_RS_MasterController.getTopArticles',
            function(result,event) {
                if (event.status) {
                    currentTopArticles = result;
                    newTopArticleChanges = !_.isEqual(displayedTopArticles, currentTopArticles);
                    if (newTopArticleChanges) {
                        //setPendingChangesState('New TopArticles!');
                    }
                    setTimeout("pollTopArticleChanges()", topArticlesPollPeriod);
                }
            },
            { buffer: true, escape: true }
        );
    } catch (e) {}
}

function loadLatestNews() {
    try { // Visualforce only 
        Visualforce.remoting.Manager.invokeAction(
            'PR_RS_MasterController.getLatestNews',
            function(result,event) {
                if (event.status) {
                    displayedLatestNews = currentLatestNews = result;
                    pollLatestNewsChanges();
                }
            },
            { buffer: true, escape: true }
        );
    } catch (e) {}
}

function pollLatestNewsChanges()
{
    try { // Visualforce only 
        Visualforce.remoting.Manager.invokeAction(
            'PR_RS_MasterController.getLatestNews',
            function(result,event) {
                if (event.status) {
                    currentLatestNews = result;
                    newLatestNewsChanges = !_.isEqual(displayedLatestNews, currentLatestNews);
                    if (newLatestNewsChanges) {
                        //setPendingChangesState('New TopArticles!');
                    }
                    setTimeout("pollLatestNewsChanges()", latestNewsPollPeriod);
                }
            },
            { buffer: true, escape: true }
        );
    } catch (e) {}
}

 function scrollToAnchor(name) {
    j$('html, body').animate({
        scrollTop: j$("a[name='"+name+"']").offset().top
    }, 300);
 }
 
 function applyScrollToAnchorLinks(parentElem) {
    if (typeof(parentElem) === "undefined") parentElem = j$("#articlewrapper");
    var anchors = parentElem.find("a[href]");
    anchors.each(function(index, elem) {
        elem = j$(elem);
        var href = elem.attr("href");
        // Escape if it's a processed link or not a hash link at all
        if (href.indexOf("#") === -1) return;
        if (href.indexOf("#/") > -1) return;
        
        var name = href.split("#")[1];
        if (!name || name === "") return;
        
        var nameSanitized = name.split(" ").join("_");
        var locationSanitized = window.location.hash.split("&scrollToAnchor")[0];
        elem.attr("href", locationSanitized + "&scrollToAnchor=" + nameSanitized);
        
        if (elem.attr("target") === "_blank") return;
        
        elem.on("click", function(e) {
            e.preventDefault();
            scrollToAnchor(name);
        })
        
    })
 }

 function convertOldPageLinks(linksArray, inIframe) {
    _(linksArray).each(function(a) {
            // convert old page link
            var href = a.href;
            //var href=a.href;
            if (href == undefined || href === "#")
                    return;
            if (href.indexOf('#')>-1) {
                
                return;
            }
            
            var internaldelimstart = '/articles/Internal/';
            var faqdelimstart = '/articles/FAQ/';
            if (href.indexOf('planetred_redsource_articledisplay')>-1) {
                href= href.replace('planetred_redsource_articledisplay', RedSourcePage + '#/article');
            } else if (href.indexOf('PlanetRed_RedSource_ArticleDisplay')>-1) {
                href= href.replace('PlanetRed_RedSource_ArticleDisplay', RedSourcePage + '#/article');
            } else if (href.indexOf('planetred_redsource_searchresults')>-1) {
                href= href.replace('planetred_redsource_searchresults', RedSourcePage + '#/search');
            } else if (href.indexOf('PlanetRed_RedSource_SearchResults')>-1) {
                href= href.replace('PlanetRed_RedSource_SearchResults', RedSourcePage + '#/search');
            } else if (href.indexOf(internaldelimstart)>-1) {
                var urldelimend = '?';
                var articleType = '&articleType=Internal';
                var indexEndDelim = href.indexOf(urldelimend);
                var urlname = '';
                if (indexEndDelim == -1) {
                    indexEndDelim = href.length;
                }
                var internalstart = href.lastIndexOf(internaldelimstart);
                urlname = href.substring(internalstart + internaldelimstart.length,indexEndDelim);
                href = '/apex/' + RedSourcePage + '#/article?urlname=' + urlname + articleType;
                // This condition used to say href.indexOf('support.vodafone.com.au') == 0.  If things break, change it back.
            } else if (href.indexOf(faqdelimstart)>-1 && href.indexOf('support.vodafone.com.au') == -1) {
                
                var urldelimend = '?';
                var articleType = '&articleType=External';
                var indexEndDelim = href.indexOf(urldelimend);
                var urlname = '';
                if (indexEndDelim == -1) {
                    indexEndDelim = href.length;
                }
                var faqstart = href.lastIndexOf(faqdelimstart);
                urlname = href.substring(faqstart + faqdelimstart.length,indexEndDelim);
                href = '/apex/' + RedSourcePage + '#/article?urlname=' + urlname + articleType;
            }
            a.href = href;
            if (inIframe) {
                a.target = "_parent"; // load outside iframe
            }
        });
 }
 
 function articlePostProcessing() {
    window.setTimeout(function() {
        loadChatterInline(j$("#chatterwrapper"));
        document.title = j$(".articleTitle").html();
        try { // Visualforce only 
            var KnowledgeArticleId = j$('#KnowledgeArticleId').val();
            PR_RS_MasterController.markArticleAsRead(KnowledgeArticleId, function(result, event) {
                //console.log(event.status);                  
            });
            
            PR_RS_MasterController.upsertResourceLog(KnowledgeArticleId, function(result, event) {
                //console.log(event.status);                  
            });
        } catch (e) {}
        convertOldPageLinks(j$("#articlewrapper a[href]"));
        applyScrollToAnchorLinks(j$("#articlewrapper"));
        if (window.location.hash.indexOf("scrollToAnchor=") !== -1) {
            scrollToAnchor(window.location.hash.split("scrollToAnchor=")[1].split("_").join(" "));
        }
    }, 0);
 }
 
 function showLoading(text) {
    window.clearTimeout(loadingHandle);
    loadingHandle = window.setTimeout(function() {
        j$('.ldivhdr').html(text);
        j$('#loadingDiv').show();
    }, 2000);
 }
 
 function hideLoading() {
    window.clearTimeout(loadingHandle);
    j$('#loadingDiv').hide();
 }
    
function loadChatterInline(iframe) {
    var chatId = j$('#ChatterArticleID').val();
    var url = ArticleChatterPage + '?ChatterArticleID=' + chatId;
    window.setTimeout(function() {
    if (typeof(iframe) === "undefined") iframe = j$("#chatterwrapper");
    // Original dom element version
    var chatterFrame = iframe.get(0);

    // This method prevents a history entry from being added to the parent page
    // when all we wanna do is create the chatter iframe
    if (chatterFrame.contentDocument) chatterFrame.contentDocument.location.replace(url);
    else if(chatterFrame.contentWindow) chatterFrame.contentWindow.location.replace(url);
    // If all else fails, for whatever reason, use the original method (creates history entry)
    else iframe.attr('src', url);

    onIframeLoaded(chatterFrame, function() {
        onIFrameLoaded();
    });
    setTimeout(function() { onIFrameLoaded(); }, 1000);
    }, 0);
}

function replaceHtml(el, html) {
    var oldEl = typeof el === "string" ? document.getElementById(el) : el;
    /*@cc_on // Pure innerHTML is slightly faster in IE
        oldEl.innerHTML = html;
        return oldEl;
    @*/
    var newEl = oldEl.cloneNode(false);
    newEl.innerHTML = html;
    oldEl.parentNode.replaceChild(newEl, oldEl);
    /* Since we just removed the old element from the DOM, return a reference
    to the new element, which can be used to restore variable references. */
    return newEl;
};

function setIframeHeight(iframe) {
    if (iframe) {
        setTimeout(function() {
            var iframeWin = iframe.contentWindow || iframe.contentDocument.parentWindow;
            if (iframeWin.document.body) {
                iframe.height = Math.max(iframeWin.document.body.scrollHeight, iframeWin.document.documentElement.scrollHeight);
                if (iframe.height == 0) { // IE8 bug doesnt recalculate height unless refreshed
                    //location.reload();
                    iframe.height = 1000;
                }
                j$(iframe).height(iframe.height);
           }
        }, 1000);

    }
};

// Improved performance over applying straight innerHTML to a DOM element
function appendHtmlFragment(id, content) {
    var frag = document.createDocumentFragment();
    var doc = document.createElement('body');
    doc.innerHTML = content;
    frag.appendChild(doc);
    e = document.getElementById(id);
    if (e.firstChild) {
        e.replaceChild(frag, e.firstChild);
    } else {
        e.appendChild(frag);
    }
}

function onIframeLoaded(iframe, callback) {
    if (navigator.userAgent.indexOf("MSIE") > -1 && !window.opera){
        iframe.onreadystatechange = function(){
            if (iframe.readyState == "complete"){
                callback();
            }
        };
    } else {
        iframe.onload = callback;
    }
}

function onIFrameLoaded() {
    var mainIframe = j$('#chatterwrapper').get(0);
    var iframeWin = mainIframe.contentWindow || mainIframe.contentDocument.parentWindow;
    j$(iframeWin).ready(function(){
        j$(mainIframe).show();
        setIframeHeight(mainIframe);
    });
}


// Takes care of logging google analytics for page views with #/
function logGoogleAnalytics(uri, title) {
    ga('send', {
      'hitType': 'pageview',
      'page': uri,
      'title': title
    });
}


function showAllUnread() {
    j$('#tableHolder>table >tbody >tr').each(function() {
        j$( this ).show();
    });
    j$('#showAllButton').hide();
}


// Angular QuickFind stuff
var search = angular.module('search', [
    'ui.utils',
    'searchControllers'
]);
var searchControllers = angular.module('searchControllers', []);

searchControllers.controller('searchResults', ['$scope', '$sce',
    function($scope, $sce) {
        $scope.results = [];
        $scope.searchString = '';

        var filter = function(data, query) {
            //var results = [];
            //var summaryResults = [];
            var limit = 50;
            if (isBloodyStupidIE8) {
                limit = 5;
            }
            var terms = query.match(/("[^"]+"|[^"\s]+)/g);
            var phrases = new Array();
            _.each( terms , function( value ) {
                value = value.replace(/"/g, "");
                phrases.push(value);
            });

            var results = [];
            var categoryTitleResults = [];
            var categoryTitleSummaryResults = [];
            var categorySummaryResults = [];

            var title, category, summary;
            var categoryTitle, categoryTitleSummary, categorySummary;

            for (var i = 0; i < data.length && results.length < 10; i++) {
                if (data[i] == null) {
                    continue;
                }
                category = '';
                if (data[i].dataCategories != null) {
                    _.each( data[i].dataCategories, function( cat) {
                        if (cat != null) category += cat;
                    });
                }

                title = data[i].Title;
                summary = data[i].Summary;
                categoryTitle = category + '##' + title;
                categoryTitleSummary = categoryTitle + '##' + summary;
                categorySummary = category + '##' + summary;

                // 1. Find any articles where the title contains the search phrase, and rank them first
                var blnTitle = true;
                _.each( phrases, function( phrase ) {
                 if(!blnTitle) { return false; }
                    var re = new RegExp(phrase, "i");
                    if (!Boolean(title.match(re))) blnTitle = false;
                });
                if (blnTitle) { results.push(data[i]); }

                // 2. Find any articles where category + title contains the search phrase, and rank them second
                else {
                    var blnCategoryTitle = true;
                    _.each( phrases, function( phrase ) {
                     if(!blnCategoryTitle) { return false; }
                        var re = new RegExp(phrase, "i");
                        if (!Boolean(categoryTitle.match(re))) blnCategoryTitle = false;
                    });
                    if (blnCategoryTitle) { categoryTitleResults.push(data[i]); }

                    // 3. Find any articles where category + title + summary contains the search phrase, and rank them second
                    else {
                        var blnCategoryTitleSummary = true;
                        _.each( phrases, function( phrase ) {
                         if(!blnCategoryTitleSummary) { return false; }
                            var re = new RegExp(phrase, "i");
                            blnCategoryTitleSummary = Boolean(categoryTitleSummary.match(re));
                        });
                        if (blnCategoryTitleSummary) { categoryTitleSummaryResults.push(data[i]); }

                        // 4. Find any articles where category + summary contains the search phrase, and rank them second
                        else {
                            var blnCategorySummary = true;
                            _.each( phrases, function( phrase ) {
                             if(!blnCategorySummary) { return false; }
                                var re = new RegExp(phrase, "i");
                                blnCategorySummary = Boolean(categorySummary.match(re));
                            });
                            if (blnCategorySummary) { categorySummaryResults.push(data[i]); }
                        }
                    }
                }
            }

            // 5. Limit the total result set to limit records
            for (var i = 0; i < categoryTitleResults.length && results.length < limit; i++)
                results.push(categoryTitleResults[i]);

            for (var i = 0; i < categoryTitleSummaryResults.length && results.length < limit; i++)
                results.push(categoryTitleSummaryResults[i]);

            for (var i = 0; i < categorySummaryResults.length && results.length < limit; i++)
                results.push(categorySummaryResults[i]);

            return results;
        };

        // Rate-limited search function
        var throttledSearch = _.debounce(function($event) {
             var d = j$('.dialogpopup');
             var query = $scope.searchString ? $scope.searchString.toLowerCase() : '';
             if (!query || query.length < 3) {
                 d.hide();
                 $scope.results = [];
                 return;
             } else if (searchIndex.data()) {
                 $scope.results = filter(searchIndex.data(), query);
             } else {
                 searchIndex.get(function(data) {
                     $scope.results = filter(data, query);
                 }, 'search');
             }
             if ($scope.results.length > 0) {
                if (!j$('#loadingDiv').is(":visible")) { // dont show popup after pressing enter key on full search
                    d.show().find('.searchResults').height(j$('.rightcol').height() - d.find('.searchHeader').height() - 10);
                 }
             } else {
                 d.hide();
             }
             $scope.$apply();
        }, 300);

        $scope.search = function($event) {
         throttledSearch($event);
        };

        $scope.cachedArticleLink = function(article) {
            return '#/article?urlname=' + article.UrlName +
            '&articleType=' + (article.articleType == 'Internal' ? 'Internal' : 'External');
        }

        $scope.trustString = function(val) {
         return $sce.trustAsHtml(val);
        }

        $scope.fullSearch = function($event) {
             $event.stopPropagation();
            $event.preventDefault();
            var timeFrameSelection = j$("#timeFrameList select").val();
            timeFrameSelection = encodeURIComponent(timeFrameSelection);
            var parentCat = j$("#parentCategory input").val();
            parentCat = encodeURIComponent(parentCat);
            var cat = j$("#hiddenCategory input").val();
            cat = encodeURIComponent(cat);
            var href = '#/search?category=' + cat + '&pageAction=searchresults&parentCategory=' + parentCat + '&searchString=' + $scope.searchString  + '&timeFrame=' + timeFrameSelection;
            //$(location).attr('href',href);
           //window.location.replace(href);
           if  (isBloodyStupidIE8) {
                if (developerMode) {
                    href = '/apex/' + RedSourcePage + href;
                }
            }
           window.location.href=href;

        }
    }
]);


j$(function(){ // On DOM loaded
    originalTitle = document.title;

    // Add hash change handler
    window.addHashChange(function(e) {
        checkHash(e.newUrl || location.href);
    });

    // Google Analytics
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    var gaTrackingID = j$('#gaTrackingID').val();

    if(location.hostname.match('salesforce.com')){

        //Define basedomain
        ga('create', gaTrackingID, 'salesforce.com');

        //Start cross domain plugin
        ga('require', 'linker');

        // Define which domains to autoLink.
        ga('linker:autoLink', ['visual.force.com']);

    } else {

        //Start script for secondary domain
        ga('create', gaTrackingID, 'auto', {
            'allowLinker': true
        });
    }

    // Log home page visit if no hash in URL
    if (window.location.hash == "") {
        viewManager.loadView("home", null, function() {
            var pageTitle= document.title;
            var uri = location.pathname + location.search;
            uri = uri.replace('?sfdc.tabName=01rD0000000PyRJ', '');
            logGoogleAnalytics(uri, pageTitle);
        });
    }
    if (window.location.hash !== "") {
        checkHash(location.href);
    }
    convertOldPageLinks(j$('a[href]'));

    // Carousel
    j$('#slides').slidesjs({
        width: 710,
        height: 150,
        navigation: {
            active: true,
            effect: "fade"
        },
        pagination: {
            active: true,
            effect: "fade"
        },
        effect: {
            fade: {
                speed: 400,
                crossfade: false
            }
        },
        play: {
            active: false,
            effect: "fade",
            auto: true,
            interval: 10000,
            swap: false,
            pauseOnHover: true,
            restartDelay: 2500
        }
    });

    (function(){
        function change_image(id, src) {
            var imageGen = new Image();
            imageGen.onload = function() {
                document.getElementById(id).src = src;
            };
            imageGen.src = src;
        }

        var bannersJson =  JSON.parse(j$('#bannersJson').val());
        for (var i=0; i< bannersJson.length; i++) {
            var id = bannersJson[i].id;
            var imageLink = bannersJson[i].imageLink;
            change_image(id, imageLink);
        }
    })();

    // Ticker
    j$('.bxslider').bxSlider({
        minSlides: 100,
        maxSlides: 100,
        slideWidth: 800,
        slideMargin: 200,
        useCSS: false,
        ticker: true,
        responsive: false,
        tickerHover: true,
        speed: 20000
    }).show();
    
    // poll Changes To Site
    loadMenus();
    loadTopArticles();
    loadLatestNews();
    removeExpiredArticles();

    // Unread and Recent Articles
    var unreadArticlesSize = j$('#unreadArticlesSize').val();
    document.getElementById('unreadMessages').innerHTML =  "Unread (" + unreadArticlesSize + ")";
    var length =  +unreadArticlesSize;
    if(length < 6)
        j$('#showAllButton').hide();
    j$('#tableHolder>table >tbody >tr').each(function() {
        if(count > 4)
            j$( this ).hide();
        count++;
    });
    var count = 0;

    // spinning progress positioning
    j$(window).resize(function(){
        j$('#loadingDiv').css({
            position:'absolute',
            left: (j$(window).width() - j$('#container').outerWidth())/2,
            top: (j$(window).height() - j$('#container').outerHeight())/2
        });
    });

    // On clicking home icon
    j$(".redglobe").parent().click(function(e) {

        if (pendingNewArticles.length>0) {
            searchIndex.cache.push(pendingNewArticles); // will only push any new articles to cache or update matching articles
            e.preventDefault();
            //homeView();
            viewManager.loadView("home");
            pendingNewArticles.length = 0;
        }
        window.location.hash = ""; // Makes the url point to home

    });

    //hide QuickFind popup
    var quickfind = j$('.dialogpopup');
    quickfind.find('.dialogclose').click(function() {
        quickfind.hide();
    });

    // QuickLinks
    j$(".qlwinopen").click(function(event) {
        event.stopPropagation();
        event.preventDefault();
        var link = j$(this).find(".childLink").attr("href");
        var mywindow = window.open(link);
    });

}); // end j$(function(){