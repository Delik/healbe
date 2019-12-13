$(document).ready(function () {
    $(".expandable").click(function(){
        $(this).parent().find('ul').slideToggle();
        $(this).toggleClass('active');
    });

    $(".responsive-menu-toggler").click(function(){
        $(this).toggleClass('active');
        $('.sidebar').toggleClass('sidebar-fixed');
    });

    $('.slider-top__content').slick({
        infinite: true,
        dots: true,
        autoplay: true, //TODO @uIsk -turn it up
        autoPlaySpeed: 9000,
        arrows: false,
        lazyLoad: 'ondemand'
    });
});
