$(function () {
    $('.slider__box').slick({
        prevArrow: '<img class="slider__arrow slider__arrow-left" src="images/arrow_left.png" alt="left">',
        nextArrow: '<img class="slider__arrow slider__arrow-right" src="images/arrow_right.png" alt="right">',
        responsive:[
            {
                breakpoint: 1024,
                settings:{
                    arrows:false
                }
            }
        ]
    });
    $('.menu__btn').on('click', function () {
        $('.menu__list').toggleClass('active');
    })
});