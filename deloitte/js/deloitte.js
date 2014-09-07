var modal = (function(){
    var
        method = {},
        $overlay,
        $modal,
        $close;

    // Center the modal in the viewport
    method.center = function () {
        var top, left;

        top = Math.max($(window).height() - $modal.outerHeight(), 0) / 2;
        left = Math.max($(window).width() - $modal.outerWidth(), 0) / 2;

        $modal.css({
            top:top + $(window).scrollTop(),
            left:left + $(window).scrollLeft()
        });
    };

    // Open the modal
    method.open = function () {
        method.center();
        $(window).bind('resize.modal', method.center);
        $modal.show('slow');
        $overlay.show('slow');
    };

    // Close the modal
    method.close = function () {
        $modal.hide();
        $overlay.hide();
        $(window).unbind('resize.modal');
    };

    $overlay = $('.overlay');
    $modal = $('.modal');
    return method;
}());

$(document).ready(function(){
    $('a').click(function(e){
        if (event.target.innerHTML!='Skip to main content') {
            modal.open();
            e.preventDefault();
        }
    });
    $('.btn-close').click(function(e){
        modal.close();
        e.preventDefault();
    });
});