(function () {
    'use strict';


    $('.tabs__link').on('click', function () {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });


    let stars = document.querySelectorAll('.fas');

    stars.forEach(function (star, i) {
        star.addEventListener('click', function () {
            if (stars[i].classList.contains('active')) {
                for (let k = i + 1; k <= 4; k++) {
                    stars[k].classList.remove('active');
                }
            } else {
                for (let n = i; n >= 0; n--) {
                    stars[n].classList.add('active');
                }
            }
        });
    });


    let shape = document.getElementById('progress');
    let shapeLength = shape.getTotalLength().toFixed(0);
    let percent = (1 - 0.78) * shapeLength;
    shape.setAttribute('stroke-dashoffset', percent);
    document.getElementById('percent').innerText = 7.8;

})();