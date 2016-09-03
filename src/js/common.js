$(document).ready(function() {

    $('.player').mb_YTPlayer();

    //fancybox
    $(".img-gallery").fancybox({
        padding : 0,
        //openEffect	: 'none',
        //closeEffect	: 'none',
        helpers: {
            overlay: {
                locked: false
            }
        }
    });

    // hamburger-menu
    $('#nav-icon').click(function(){
        $(this).toggleClass('open');
        $('.mobile-mnu').fadeToggle();
    });


});