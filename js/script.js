//SLICK SLIDER FOR HEADER
$(document).ready(function() {
    $(".header__slider").slick({
        vertical: true,
        dots: true,
        arrows: false
    });
    $(".slick-dots").insertBefore($(".header__slider"));
    $(".header__scroll button").on("click", function() {
        $("html, body").animate({ scrollTop: $("#gallery").offset().top - 50 }, 500);
    })
//SLICK SLIDER FOR NEWS
    $(".news__slider").slick({
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 3,
        prevArrow: $('.news__arrow--left'),
        nextArrow: $('.news__arrow--right')
    });
});

