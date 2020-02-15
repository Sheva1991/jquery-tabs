(function () {
    'use strict';


    $('.tabs__link').on('click', function () {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });


    let stars = document.querySelectorAll('.fas');

    stars.forEach(function (star) {
        star.addEventListener('click', function () {
            star.classList.toggle('active');
        });
    });


    let shape = document.getElementById('progress');
    let shapeLength = shape.getTotalLength().toFixed(0);
    console.log(shapeLength)
    let percent = 0.22 * shapeLength;
    shape.setAttribute('stroke-dashoffset', percent);
    document.getElementById('percent').innerText = 7.8;

})();