$(function() {
    $(window).scroll(function () { 
        let wScroll = $(this).scrollTop();
        
        $(".jumbotron h1").css({
            "transform" : "translate(0, " + wScroll / 3 +"%)"
        })
        $(".jumbotron p").css({
            "transform" : "translate(0, " + wScroll / 5 +"%)"
        })

        if (wScroll > $(".about").offset().top - 300) {
            $(".about p, .about .sosmed").addClass("muncul");
        }

        if (wScroll > $(".skills").offset().top - 300) {
            $(".skills .sub-title").addClass("muncul");

            $(".skill-language").each(function(i) {
                setTimeout(function() {
                    $(".skill-language").eq(i).addClass("muncul");
                }, 300 * (i + 1));
            })
        }

        if (wScroll > $(".contact").offset().top - 300) {
            $(".sub-title").addClass("muncul");

            $(".info__contact").each(function(i) {
                setTimeout(function() {
                    $(".info__contact").eq(i).addClass("muncul");
                }, 300 * (i + 1))
            })

            setTimeout(function() {
                $(".box-form").addClass("muncul");
            }, 1000);
        }
    });
})