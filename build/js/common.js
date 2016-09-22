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

    $('.nav-mob__el').click(function(){
        $('.nav-mob:visible').click();
    });

    // btn show-more
    $('#show-more').click(function() {
        $('#more-works').fadeIn();
        $(this).hide();
    });

    // nav
    $(".nav").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;
        margin = 140;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top - margin}, 1000);
    });



});