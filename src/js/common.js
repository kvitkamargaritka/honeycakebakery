$(document).ready(function() {

    //fancybox
    $(".img-gallery").fancybox({
        padding : 0,
        titleShow : true,
        transitionIn : 'fade',

        helpers: {
            overlay: {
                locked: false
            }

            //title : {
            //    type : 'outside'
            //}
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

    $('#show-more3').click(function() {
        $('#more-works3').fadeIn();
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
          margin = 0;

        //анимируем переход на расстояние - top за 1000 мс
        $('body,html').animate({scrollTop: top - margin}, 1000);

    });

    $(".nav-mob").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
          top = $(id).offset().top;
        margin = 30;

        //анимируем переход на расстояние - top за 1000 мс
        $('body,html').animate({scrollTop: top - margin}, 1000);

    });


    $(".scroll").click(function (){
        margin = 25;
        $('body').animate({
            scrollTop: $(".section-gallery").offset().top - margin
        }, 2000);
    });


    // accordion
    function accordion () {
        var items = $('.menu__el');

        $(items).each(function(index, el) {
            $(el).click(function () {
                if (!$(this).toggleClass('is-active')) {
                    $(el).removeClass('is-active');
                    $(this).addClass('is-active');
                }
            });
        });
    }

    accordion();

    //box
    var $sliderPagination = $('.slider__pagination');

    $sliderPagination.each(function(index, el){
        $(el).on({
            mouseover: function() {
                $(el).next().addClass('is-visible');
                $(el).prev().addClass('is-active');
            },
            mouseleave: function() {
                $(el).next().removeClass('is-visible');
                $(el).prev().removeClass('is-active');

            }
        })
    });
    //
    //var $sliderText = $('.slider__text');
    //
    //$sliderText.each(function(index, el) {
    //   $(el).on({
    //       mouseover: function() {
    //           $(el).addClass('is-active');
    //       },
    //       mouseleave: function() {
    //           $(el).removeClass('is-active');
    //       }
    //   })
    //});

});