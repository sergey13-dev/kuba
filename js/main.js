$(function () {

    //select
    //  $('select').styler();


    //slick slider
    $(".photo__slider").slick({


        //стрелки слайдера, кнопка внутри которой картинка стрелка
        prevArrow: '<button class="slick-arrow slick-prev"><img src="images/slider-arrow-left.svg" alt=""></button>',
        nextArrow: '<button class="slick-arrow slick-next"><img src="images/slider-arrow-right.svg" alt=""></button>',

    });


    //выпадающее меню

    // кликаем на - бургер меню
    $(".menu__btn").on("click", function () {

        // основное меню - при нажатии появляется и пропадает
        $(".menu__list").slideToggle();


    });







    // для инициализации wow, анимация при скролле
    new WOW().init();



});