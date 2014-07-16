//Use this when:
//- You need to cache single, application-critical resource that is used VERY frequently
//- You need a high-availability solution - once the first load takes place, there is NEVER a delay to access
//- You need this resource to refresh automatically in the background (without blocking threads)
// parameters : name - cache name
//              onrefreshRequired - Function to call for getting cached articles
//              duration - cache life before refreshing in minutes
//              cacheVersion - version as a number for this cache instance
var localCache = function(name, onRefreshRequired, duration, cacheVersion) {
    var l = this;

    if (!cacheVersion) cacheVersion = 501;
    var cacheVersionMismatch = false;

    if (!duration)
        duration = 60;

    l.data = function() {
        return l.cache.get();
    };

    l.name = name;
    l.status = null;

    var timers = { };
    l.get = function(onRetrieved, channel, forceRefresh) {
        var cachedData = l.data();
        if (!cachedData || forceRefresh || cacheVersionMismatch) {
            if (cacheVersionMismatch) window.localStorage.removeItem(name);
            l.status = 1;
            cacheVersionMismatch = false;
            onRefreshRequired(function(data) {
                l.cache.set(data);
                l.status = null;
                if (onRetrieved) onRetrieved(data);
            });
        } else if (!cachedData && l.status == 1 && onRetrieved) {
            var timer = window.setTimeout(function() { l.get(onRetrieved) }, 500);

            if (channel) {
                if (timers[channel])
                    window.clearTimeout(timers[channel]);
                timers[channel] = timer;
            }
        } else if (cachedData && onRetrieved) {
            onRetrieved(cachedData);
        }
    };
    l.getArticle = function(UrlName) {
        return l.cache.getArticle(UrlName);
    }
    l.contains = function(UrlName) {
        return l.cache.contains(UrlName);
    }
    l.refresh = function(onRefreshed) {
        l.get(onRefreshed, null, 1);
    };
    l.push = function(articles) {
        return l.cache.push(item);
    };
    l.removeItems = function(articles) {
        l.cache.removeItems(articles);
    };
    l.cache = new function() {
        var c = this;
        var cdata = null;
        var cexpires = null;
        var expirationTimer = null;

        var setTimer = function() {
            window.clearTimeout(expirationTimer);
            expirationTimer = window.setTimeout(l.refresh, c.ticks());
        };
        c.get = function() {
            if (!cdata) {
                try {
                    var item = JSON.parse(window.localStorage.getItem(name));
                    if (!item.version || !item.timestamp || item.version < cacheVersion || item.timestamp < (new Date().getTime() - 60*60*24)) cacheVersionMismatch = true;
                    cexpires = new Date(item.expires);
                    cdata = item.data;
                    setTimer();
                } catch (e) { }
            }
            return cdata;
        };
        c.expires = function() {
            c.get();
            return cexpires;
        };
        c.ticks = function() {
            return Math.max(cexpires - new Date(), 0) || 0;
        }
        c.expired = function() {
            return c.ticks() > 0;
        };
        c.set = function(data) {
            cdata = data;
            cexpires = new Date(new Date().getTime() + duration * 60000);
            window.localStorage.setItem(name, JSON.stringify({ data: cdata, expires: cexpires, version: cacheVersion, timestamp: new Date().getTime() }));
            setTimer();
        };
        c.getArticle = function(UrlName) { //cant rely on article id as this gets modified when updating article in Knowledge
            var cachedData = JSON.parse(window.localStorage.getItem(name)).data;
            var article = null;
            j$.each(cachedData, function(i, e) {
                if (e && e.UrlName == UrlName) {
                    article = e;
                    return false;
                }
            });
            return article;
        }
        c.contains = function(UrlName) { //cant rely on article id as this gets modified when updating article in Knowledge
            var article = c.getArticle(UrlName);
            return article != null;
        }
        c.push = function(data) {  // Adds/Updates each element in data array not in storage to storage
            var currItem = JSON.parse(window.localStorage.getItem(name));
            var currData = currItem.data;
            var currExpires = currItem.expires;
            _(articles).each(function(caw){
                var a = c.getArticle(caw.UrlName);
                if (!a) {
                    currData.push(caw);
                } else {
                    currData = _.reject(currData, function(el) { return el.UrlName === caw.UrlName; });  // Remove existing record from cache
                    currData.push(caw);
                }
            });
            cdata = currData;
            window.localStorage.setItem(name, JSON.stringify({ data: cdata, expires: currExpires }));
        };
        c.removeItems = function(articles) { //cant rely on article id as this gets modified when updating article in Knowledge
            var currItem = JSON.parse(window.localStorage.getItem(name));
            var currData = currItem.data;
            var currExpires = currItem.expires;
            _(articles).each(function(caw){
                var a = c.getArticle(caw.UrlName);
                if (a) {
                    currData = _.reject(currData, function(el) { return el.UrlName === caw.UrlName; });  // Remove existing record from cache
                }
            });
            cdata = currData;
            window.localStorage.setItem(name, JSON.stringify({ data: cdata, expires: currExpires }));
        }
        c.get();
    };
}

//Use this when:
//- You need to cache a 'library' of resources that generally don't change that often
//- The availability of any one single resource is not that critical
//- The frequency that any one resource is accessed is low to moderate
var localCacheLibrary = function(name, onRefreshRequired, duration, maxKB) {
    var l = this;

    l.lib = { };

    try {
        l.lib = JSON.parse(window.localStorage.getItem(name)) || { };
    } catch (e) { }

    l.get = function(key, onRetrieved) {
        if (l.lib[key]) {
            l.lib[key].count++;
            onRetrieved(l.lib[key].data);
            l.save();
        } else {
            var count = l.lib[key] ? l.lib[key].count + 1 : 1;
            onRefreshRequired(key, function(data) {
                l.lib[key] = { data: data, retrieved: new Date().getTime(), expires: new Date(new Date().getTime() + duration * 60000), count: count };
                if (onRetrieved) onRetrieved(data);
                l.save();
            });
        }
    }
    l.refresh = function(key) {
        onRefreshRequired(key, function(data) {
            var count = l.lib[key] ? l.lib[key].count : 0;
            l.lib[key] = { data: data, retrieved: new Date().getTime(), expires: new Date(new Date().getTime() + duration * 60000), count: count };
            l.save();
        });
    }

    l.index = function() {
        var index = [ ];

        for (var key in l.lib)
            index.push({ key: key, count: l.lib[key].count, expires: l.lib[key].expires });

        index.sort(function(a, b) {
            if (a.count < b.count)
                return -1;
            if (a.count > b.count)
                return 1;
            if (a.expires < b.expires)
                return -1;
            if (a.expires > b.expires)
                return 1;
            return 0;
        });

        return index;
    }

    l.save = function() {
        window.setTimeout(function() {

            //j$.extend(l.lib, JSON.parse(window.localStorage.getItem(name)));

            var data = JSON.stringify(l.lib);

            if (data.length > maxKB * 1024) {

                var index = l.index();

                while (data.length > maxKB * 1024) {
                    delete l.lib[index.shift().key];
                    data = JSON.stringify(l.lib);
                }
            }

            window.localStorage.setItem(name, data);

        }, 500);
    }
}