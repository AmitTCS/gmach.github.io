$(function(){
    var index = 0;
    $.get("content.json", function(data){
        $(".pageTitle").html(data.title);
        showContent(index);

        function showContent(i) {
            var content = data.content[i];
            $(".thumbnail").attr("src", content.thumbnail?content.thumbnail:'https://placeholdit.imgix.net/~text?w=210&h=150');
            $(".description").html(content.description.replace(/�/g, "&ndash;"));
            var prevTitle = 'Prev';
            if (i-1 >= 0) {
                prevTitle = data.content[i-1].title;
            }
            $(".prev > .navTitle").empty().html(prevTitle);
            var nextTitle = 'Next';
            if (i+1<data.content.length) {
                nextTitle = data.content[i].title;
            }
            $(".next > .navTitle").empty().html(nextTitle);
        }

        $(".prev").click(function(){
            if (index) {
                --index;
                showContent(index);
            }
        });

        $(".next").click(function(){
            if (index<data.content.length-1) {
                ++index;
                showContent(index);
            }
        });

        $(".header").click(function(){
            $(".main").toggle(300);
        });

    }).fail(function() {
        $("body").html("<h1 class='error'>ERROR READING FILE!</h1>");
    })
});