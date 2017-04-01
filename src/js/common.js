$(document).ready(function() {
    var $nav,
      // hamburger & mobile-menu
        $mobileMenu = $('.mobile-mnu'),
        $navIcon = $('#nav-icon'),
      //accordion
        $menuEl = $('.menu__el'),
      // buttons
        $scroll = $('.scroll'),
        $backTop = $('.back-top'),
        $showMoreOne = $('#show-more'),
        $showMoreTwo = $('#show-more2'),
        $showMoreThree = $('#show-more3'),
        $moreWorksOne = $('#more-works'),
        $moreWorksTwo = $('#more-works2'),
        $moreWorksThree = $('#more-works3'),
      //slider & fancy-box
        $sliderPagination = $('.slider__pagination'),
        $fancyBox = $('.img-gallery'),
      // sections
        $header = $('.header'),
        $sectionGallery = $('.section-gallery'),
        $wrap = $('.wrap');

    if ($(window).width() < 768) {
        $nav = $('#nav-mob');
    } else {
        $nav = $('.nav');
    }

    //fancybox
    $fancyBox.fancybox({
        padding : 0,
        titleShow : true,
        transitionIn : 'fade',

        helpers: {
            overlay: {
                locked: false
            }
        }
    });

    // hamburger-menu
    $navIcon.on('click',function() {
        $(this).toggleClass('open');
        $mobileMenu.fadeToggle();
        $header.toggleClass('menu-open');
    });
    $('.nav-mob__link').on('click',function() {
        $mobileMenu.fadeToggle();
        $navIcon.removeClass('open');
        $header.removeClass('menu-open');
    });

    // btn show-more
    $showMoreOne.on('click',function() {
        $moreWorksOne.fadeIn();
        $(this).hide();
    });

    $showMoreTwo.on('click',function() {
        $moreWorksTwo.fadeIn();
        $(this).hide();
    });

    $showMoreThree.on('click',function() {
        $moreWorksThree.fadeIn();
        $(this).hide();
    });

    // nav
    $nav.on("click","a", function (event) {
        var margin,
            id  = $(this).attr('href'),
            top = $(id).offset().top;

        if ($(window).width() < 768) {
            margin = 30;
        } else {
            margin = 0;
        }

        event.preventDefault();

        $('body,html').animate({scrollTop: top - margin}, 1000);
    });


    $scroll.on('click',function() {
        var margin = 25;
        $('body,html').animate({
            scrollTop: $sectionGallery.offset().top - margin
        }, 2000);
    });


    // accordion
    function accordion () {

        $menuEl.each(function(index, el) {
            $(el).on('click',function() {
                if (!$(this).toggleClass('is-active')) {
                    $(el).removeClass('is-active');
                    $(this).addClass('is-active');
                }
            });
        });
    }

    accordion();

    // top slider
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

    // back-top
    $backTop.on('click',function() {
        $('body,html').animate({scrollTop:0},800);
    });
});