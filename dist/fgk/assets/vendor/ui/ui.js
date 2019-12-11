$(document).ready(function () {
    $(".expandable").click(function(){
        $(this).parent().find('ul').slideToggle();
        $(this).toggleClass('active');
    });

    $(".responsive-menu-toggler").click(function(){
        $(this).toggleClass('active');
        $('.sidebar').toggleClass('sidebar-fixed');
    });
});
