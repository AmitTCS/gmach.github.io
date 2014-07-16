var j$ = j$ || jQuery.noConflict();

            

function noenter(ev)  {

	if (window.event && window.event.keyCode == 13 || ev.which == 13) {
		submitTextField();
		return false;
	} else{
		return true;
	}
}

function getURLParameter(sParam) {

    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }
}





function updateHiddenParent(elem) {
    updateHidden.call(elem);
}

function updateHidden() {
  elem = this;
  var sel = j$(elem).find('option:selected');
      if (sel.size() == 0)
          sel = j$(elem).find('option').first();

          if (sel.val())
              j$("#hiddenCategory input").val(sel.val());
          else
              j$("#hiddenCategory input").val(j$('#category_list>select option:selected').val());
     
         j$("#parentCategory input").val(j$('#category_list>select option:selected').val());

      }
      
function checkSupportSelected() {
    
    var supportSelected = false;
    var newsSelected = false;
    var procedureSelected = false;
    var faqSelected = false;
    var campaignSelected = false; 
    var noneSelected = false;
    
    
    
    
    var cat = "";

    if(j$( "#category_list>select option:selected" ).size() == 0) {
    
        j$( "#category_list select").val('All Categories');
    
    }



    j$( "#category_list>select option:selected" ).each(function() {
          cat = j$( this ).text();
          
          
          
          
          supportSelected = (cat == 'Support');
          newsSelected = (cat == 'News');
          procedureSelected = (cat == 'Procedures and Policy');
          faqSelected = (cat == 'FAQs');
          campaignSelected = (cat == 'Campaign');
          
          noneSelected = (cat != 'Support' &&
                                cat != 'News' &&
                                cat != 'Campaign' &&
                                cat != 'Procedures and Policy' &&
                                cat != 'FAQs');
          j$("#hiddenCategory input").val(j$(this).val());
        
    });
    if (supportSelected) { 
      
        j$("#subcategoryWrapper___Support").show();  
        updateHiddenParent(j$("#subcategoryWrapper___Support"));                  
    } else {
        j$("#subcategoryWrapper___Support").hide();
    }
    if (newsSelected) {
        j$("#subcategoryWrapper___News").show(); 
        updateHiddenParent(j$("#subcategoryWrapper___News"));                  
       
    } else {
        j$("#subcategoryWrapper___News").hide();
    }
    if (procedureSelected) {
        j$("#subcategoryWrapper___Procedures_and_Policy").show(); 
         updateHiddenParent(j$("#subcategoryWrapper___Procedures_and_Policy"));                  
       
    } else {
        j$("#subcategoryWrapper___Procedures_and_Policy").hide();
    }
     if (faqSelected) {
       j$("#subcategoryWrapper___FAQs").show();
       updateHiddenParent(j$("#subcategoryWrapper___FAQs"));                  

    } else {
       j$("#subcategoryWrapper___FAQs").hide();
    }
    
    if (campaignSelected) {
        j$("#subcategoryWrapper___FAQs").hide();
         j$("#subcategoryWrapper___Procedures_and_Policy").hide();
         j$("#subcategoryWrapper___News").hide();
         j$("#subcategoryWrapper___Support").hide();
         updateHiddenParent();
    } 
    if(noneSelected) {
    
    
    
         j$("#subcategoryWrapper___FAQs").hide();
         j$("#subcategoryWrapper___Procedures_and_Policy").hide();
         j$("#subcategoryWrapper___News").hide();
         j$("#subcategoryWrapper___Support").hide();
        j$("#parentCategory input").val('');
                              
    
    
    }

}

j$(function() {
    
    j$("#category_list").change(checkSupportSelected);
    
    j$("#subcategoryWrapper___Support select").change(updateHidden);
    j$("#subcategoryWrapper___News select").change(updateHidden);
    j$("#subcategoryWrapper___FAQs select").change(updateHidden);
    j$("#subcategoryWrapper___Procedures_and_Policy select").change(updateHidden);
    
    var parentCategory = getURLParameter('parentCategory');
    var category = getURLParameter('category');

    if(parentCategory == category) {
    

        j$( "#category_list select").val(category);    
        checkSupportSelected();


    } else {
    
    
        j$( "#category_list select").val(parentCategory);
        checkSupportSelected();
        j$( "#category_list>select option:selected" ).each(function() {
              cat = j$( this ).text();
              supportSelected = (cat == 'Support');
              newsSelected = (cat == 'News');
              procedureSelected = (cat == 'Procedures and Policy');
              faqSelected = (cat == 'FAQs');
              campaignSelected = (cat == 'Campaign');
              
              noneSelected = (cat != 'Support' &&
                                cat != 'News' &&
                                cat != 'Campaign' &&
                                cat != 'Procedures and Policy' &&
                                cat != 'FAQs');
        });
        if (supportSelected) {
          
            j$("#subcategoryWrapper___Support select").val(category);                  
            updateHiddenParent(j$("#subcategoryWrapper___Support"));                  
        }
        if (newsSelected) {
     
            j$("#subcategoryWrapper___News select").val(category);                  
            updateHiddenParent(j$("#subcategoryWrapper___News"));                  

        }
        if (procedureSelected) {

            j$("#subcategoryWrapper___Procedures_and_Policy select").val(category);                  
            updateHiddenParent(j$("#subcategoryWrapper___Procedures_and_Policy"));                  

        }
        if (faqSelected) {
         
            j$("#subcategoryWrapper___FAQs select").val(category);                  
            updateHiddenParent(j$("#subcategoryWrapper___FAQs"));                  

        }
        
        if (campaignSelected) {
         
              j$("#subcategoryWrapper___FAQs").hide();
            j$("#subcategoryWrapper___Procedures_and_Policy").hide();
            j$("#subcategoryWrapper___News").hide();
            j$("#subcategoryWrapper___Support").hide();
                          

        }
         if (noneSelected) {

                j$("#subcategoryWrapper___FAQs").hide();
                 j$("#subcategoryWrapper___Procedures_and_Policy").hide();
                 j$("#subcategoryWrapper___News").hide();
                 j$("#subcategoryWrapper___Support").hide();
                j$("#parentCategory input").val('');

        }
    
    }

});  