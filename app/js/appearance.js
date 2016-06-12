$( document ).ready(function() {
    var isPlayed = [];
    var postsOffsets = [];
    var posts = [];
    var posts = $('.post');
    var count = $('.post').length;
    for(var i = 0; i < count; i++)
    {
        isPlayed[i] = false;
        posts[i] = $('.post').eq(i);
        postsOffsets[i] = posts[i].offset();
        var scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if((scrolled > postsOffsets[i].top - $(window).height()) && !isPlayed[i])
        {
            posts[i].css("top", "2em");
            posts[i].animate({ "opacity": "+=1" , "top": "-=2em"}, "slow" );
            isPlayed[i] = true;
        }
    }
    window.onscroll = function(){
        var scrolled = window.pageYOffset || document.documentElement.scrollTop;
        for (var i = posts.length - 1; i >= 0; i--) {
            if((scrolled > postsOffsets[i].top - $(window).height()) && !isPlayed[i])
            {
                posts[i].css("top", "2em");
                posts[i].animate({ "opacity": "+=1" , "top": "-=2em"}, "slow" );
                isPlayed[i] = true;
            }
        }
    }
});