$(document).ready(function() {

    function swiperSlider () {

        var swiper = new Swiper('.swiper-container', {
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            //paginationClickable: true,
            //pagination: '.swiper-pagination',
            slidesPerView: 1,
            keyboardControl: true,
            loop: true
        })

    }

    swiperSlider();

});