var j$ = j$ || jQuery.noConflict();


j$(function(){
    j$(".dropdown-menu").mouseover(function(){
        j$(j$(this).parent().children()[0]).css("color", "black")
    });
    j$(".dropdown-menu").mouseleave(function(){
        j$(j$(this).parent().children()[0]).css("color", "white")
    });
    j$(".dropdown-toggle").mouseover(function(){
        j$(this).css({'color' : 'black'});
    });
    j$(".dropdown-toggle").mouseleave(function(){
        j$(this).css({'color' : 'white'});
    });

    var menuCountM =  j$('#menuCountM').val();
    for (var j = 0;j < menuCountM;j++) {
        var noOfColumns = Math.floor(j$('.menu_submenu' + j).children().length/10)+1;
        list2Columns(j$('.menu_submenu' + j),  noOfColumns, j);
    }

});

function list2Columns(parent, numCols, no) {

    var listItems = parent.find('li'); /* get the list data */
    // alert("listItems = "  + listItems);
    var numListItems = listItems.length;
    var numItemsPerCol = Math.ceil(numListItems / numCols); /* divide by the number of columns requires */
    var currentColNum = 1;
    var currentItemNumber = 0;
    var returnHtml = '';
    var i = 0;

    /* append the columns */
    for (i=1;i<=numCols;i++) {

        parent.parent().append('<ul class="menu_submenu column list-column-' + i + '' + no + '"></ul>');
    }

    /* append the items to the columns */
    j$.each(listItems, function (i, v)
    {


        if (currentItemNumber <= numItemsPerCol){
            currentItemNumber ++;
        } else {
            currentItemNumber = 1;
            currentColNum ++;
        }
        j$('.list-column-'+currentColNum+ '' + no).append(v);
    });
    parent.remove();

}