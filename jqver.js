
$(function() {


$("a.menu-link").on("click", function(e){
    e.preventDefault();
    var anchor = $(this).attr('href');
    $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top - 200
    }, 800);


    $(".menu__body").removeClass("menu__body_active");
    $(".click__menu").removeClass("openmenu");
    }); 


    // $(document).scroll(function() {
    //     console.log($(window).scrollTop());
    // });


});

