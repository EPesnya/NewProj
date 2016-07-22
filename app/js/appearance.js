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
            posts[i].css("left", "-2em");
            posts[i].animate({ "opacity": "+=1", "left": "+=2em" , "top": "-=2em"}, "slow" );
            isPlayed[i] = true;
        }
    }
    window.onscroll = function(){
        var scrolled = window.pageYOffset || document.documentElement.scrollTop;
        for (var i = posts.length - 1; i >= 0; i--) {
            if((scrolled > postsOffsets[i].top - $(window).height()) && !isPlayed[i])
            {
                if(i % 4 == 0)
                {
                    posts[i].css("top", "2em");
                    posts[i].css("left", "-2em");
                    posts[i].animate({ "opacity": "+=1", "left": "+=2em" , "top": "-=2em"}, "slow" );
                }
                else if(i % 4 == 1)
                {
                    posts[i].css("top", "2em");
                    posts[i].css("left", "2em");
                    posts[i].animate({ "opacity": "+=1", "left": "-=2em" , "top": "-=2em"}, "slow" );                    
                }
                else if(i % 4 == 2)
                {
                    posts[i].css("top", "1em");
                    posts[i].css("left", "5em");
                    posts[i].animate({ "opacity": "+=1", "left": "-=5em" , "top": "-=1em"}, "slow" );                    
                }
                else if(i % 4 == 3)
                {
                    posts[i].css("top", "1em");
                    posts[i].css("left", "-3em");
                    posts[i].animate({ "opacity": "+=1", "left": "+=3em" , "top": "-=1em"}, "slow" );                    
                }
                //posts[i].animate({ "opacity": "+=1" , "top": "-=2em"}, "slow" );
                isPlayed[i] = true;
            }
        }
    }
});