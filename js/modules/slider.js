function slider({ container, slide, nextArrow, prevArrow, totalCounter, currentCouner, wrapper, field }) {
    // ========================= Slider =======================

    let slideIndex = 1;
    let offset = 0;   // переменная, которая будет отвечать за отступы при смене слайда


    const slides = document.querySelectorAll(slide),
        prev = document.querySelector(prevArrow),
        next = document.querySelector(nextArrow),
        total = document.querySelector(totalCounter),                       // число на странице, которое отображает общее количество слайдов
        current = document.querySelector(currentCouner),
        slidesWrapper = document.querySelector(wrapper),
        slidesField = document.querySelector(field),
        width = window.getComputedStyle(slidesWrapper).width,
        slider = document.querySelector(container);           //offer__slider - блок-слайдер со всеми элементами, в т.ч. каунтером

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
        current.textContent = `0${slideIndex}`;
    } else {
        total.textContent = slides.length;
        current.textContent = slideIndex;
    }

    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';
    slidesWrapper.style.overflow = 'hidden';

    slides.forEach(item => {
        item.style.width = width;
    });


    //======================= навигация (точки) в слайдере ================

    slider.style.position = 'relative';

    const indicators = document.createElement('ol'),            // создаем ордер лист для точек (навигация)
        dots = [];                                      // будет массив точек
    indicators.classList.add('carousel-indicators');
    // чтобы не изменять файл style.css можно добавить стили с помощью js
    indicators.style.cssText = `
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 15;
        display: flex;
        justify-content: center;
        margin-right: 15%;
        margin-left: 15%;
        list-style: none;
    `;

    slider.append(indicators);              //добавляем ol на страницу, но он пока ничего не содержит

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.style.cssText = `
            box-sizing: content-box;
            flex: 0 1 auto;
            width: 30px;
            height: 6px;
            margin-right: 3px;
            margin-left: 3px;
            cursor: pointer;
            background-color: #fff;
            background-clip: padding-box;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            opacity: .5;
            transition: opacity .6s ease;
        `;
        if (i == 0) {
            dot.style.opacity = 1;
        }
        indicators.append(dot);
        dots.push(dot);
    }

    //===================================================    

    function deleteNotDigits(str) {
        return +str.replace(/\D/g, '');
    }

    next.addEventListener('click', () => {
        // таким образом с напр. 500рх получаем число 500
        // if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
        // if (offset == width.replace(/\D/g, '') * (slides.length - 1)) {
        if (offset == deleteNotDigits(width) * (slides.length - 1)) {                 // тоже самое, что и выше, но через новсозданую функцию
            offset = 0;
        } else {
            // таким образом с напр. 500рх получаем число 500
            offset += deleteNotDigits(width);
        }
        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }
        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }

        dots.forEach(item => item.style.opacity = '.5');                // добавляем навигацию
        dots[slideIndex - 1].style.opacity = 1;

    });

    prev.addEventListener('click', () => {
        // таким образом с напр. 500рх получаем число 500
        if (offset == 0) {
            offset = deleteNotDigits(width) * (slides.length - 1)
        } else {
            offset -= deleteNotDigits(width);
        }
        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }
        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }

        dots.forEach(item => item.style.opacity = '.5');                // добавляем навигацию
        dots[slideIndex - 1].style.opacity = 1;

    });


    // Добавляем функционал нав.меню (тчк) слайдера
    dots.forEach(item => {
        item.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');             //получаем число

            slideIndex = slideTo;
            offset = deleteNotDigits(width) * (slideTo - 1);
            slidesField.style.transform = `translateX(-${offset}px)`;

            if (slides.length < 10) {
                current.textContent = `0${slideIndex}`;
            } else {
                current.textContent = slideIndex;
            }
            dots.forEach(item => item.style.opacity = '.5');
            dots[slideIndex - 1].style.opacity = 1;
        });
    });

}

export default slider;