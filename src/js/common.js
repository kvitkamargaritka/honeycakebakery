$(document).ready(function() {

    $('.player').mb_YTPlayer();

    //fancybox
    $(".img-gallery").fancybox({
        padding : 0,
        titleShow : true,
        transitionIn : 'fade',

        helpers: {
            overlay: {
                locked: false
            },
            title : {
                type : 'over'
            }
        }
    });

    // hamburger-menu
    $('#nav-icon').click(function(){
        $(this).toggleClass('open');
        $('.mobile-mnu').fadeToggle();
        $('.header').toggleClass('menu-open');
    });
    $('.nav-mob__link').click(function(){
        $('.mobile-mnu').fadeToggle();
        $('#nav-icon').removeClass('open');
        $('.header').removeClass('menu-open');
    });

    // btn show-more
    $('#show-more').click(function() {
        $('#more-works').fadeIn();
        $(this).hide();
    });

    $('#show-more2').click(function() {
        $('#more-works2').fadeIn();
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
        margin = 100;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top - margin}, 1000);

    });

    // accordion
    function accordion () {
        $('.items__el').each(function(index, el) {
            $('.items__el').click(function () {
                if (!$(this).toggleClass('is-active')) {
                    $('.items__el').removeClass('is-active');
                    $(this).addClass('is-active');
                }
            })
        });

    }

    accordion()


});