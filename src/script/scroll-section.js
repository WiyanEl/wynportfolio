// smooth scroll
$(function() {
    $(".nav-link").on("click", function(event){
        let target = $(this).attr("href");
        let toTarget = $(target);
        let distance = 85;
        $("html, body").animate({
            scrollTop : toTarget.offset().top - distance
        }, 500, 'swing');
        event.preventDefault();
    })
})