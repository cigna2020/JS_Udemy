document.addEventListener('DOMContentLoaded', () => {

    // ============= Tabs ========================

    const tabs = document.querySelectorAll('.tabheader__item'),
        tabContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');

        });
        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {
        tabContent[i].classList.add('show', 'fade');
        tabContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (e) => {
        const target = e.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    // ============= Timer ========================

    const deadline = '2020-10-11';

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            hours = Math.floor((t / (1000 * 60 * 60) % 24)),
            minutes = Math.floor((t / (1000 / 60)) % 60),
            seconds = Math.floor((t / 1000) % 60);
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadline);

    // ============= Modal Window ========================

    const modalTriger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal');
    // modalCloseBtn = document.querySelector('[data-close]');            // не применяется к динамически созданным элементам, урок 54

    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        clearInterval(openModalId);                      // Если пользователь сам открыл мод.окно, что-бы второй раз не появлялось по setTimeout
    }


    modalTriger.forEach(btn => {                // варіант з All
        btn.addEventListener('click', () => {
            // modal.classList.add('show');
            // modal.classList.remove('hide');
            // document.body.style.overflow = 'hidden';
            openModal();
        });
    });


    // modalTriger.addEventListener('click', () => {           //варіант лише для одного селектора, тобто q...Selec... БЕЗ All
    //     // modal.style.display = 'block';
    //     //modal.classList.toggle('show');   // Варіант з тоггле
    //     modal.classList.add('show');
    //     modal.classList.remove('hide');
    //     document.body.style.overflow = 'hidden';
    // });

    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    // modalCloseBtn.addEventListener('click', closeModal);         // не применяется к динамически созданным элементам, урок 54

    // modalCloseBtn.addEventListener('click', () => {
    // modal.style.display = 'none';
    //modal.classList.toggle('show');   // Варіант з тоггле

    // modal.classList.add('hide');
    // modal.classList.remove('show');
    // document.body.style.overflow = '';
    // });

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == '') {
            // modal.classList.add('hide');
            // modal.classList.remove('show');
            // document.body.style.overflow = '';
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });

    const openModalId = setTimeout(openModal, 50000);   // Вызов функции открытия модального окна через промежуток времени (50 sec).

    // window.addEventListener('scroll', () => {           // Если доскролить до конца страницы, тогда появляется мод.окно. Но оно будет появлятся каждый раз
    //     if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
    //         openModal();
    //     }
    // });

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);   // щоб більше не повторювалося, аргументи відповідають аргументам window.addEventList...
        }
    }
    window.addEventListener('scroll', showModalByScroll);


    // =============== Урок 48.  Работа с Classes.  Классы для карточек  =======================

    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.price = price;
            this.transfer = 27;
            this.changeToUAH();
        }

        changeToUAH() {
            this.price = +this.price * this.transfer;
        }

        render() {
            const element = document.createElement('div');

            if (this.classes.length == 0) {
                this.element = 'menu__item';
                element.classList.add(this.element);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }

            element.innerHTML = `
            <img src=${this.src} alt=${this.alt} />
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">
              ${this.descr}
            </div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
              <div class="menu__item-cost">Цена:</div>
              <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
            </div>
        `;
            this.parent.append(element);
        }
    }


    const getResource = async (url) => {             // async - означает, что внутри будет асинхронный код. ВСЕГДА используется с await
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
        return await res.json();
    };

    // getResource('http://localhost:3000/menu')            // Заком. при использовании библ. axios
    // .then(data => {
    //     data.forEach(({ img, altimg, title, descr, price }) => {
    //         new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
    //     });
    // });


    //==================== axios ======================
    axios.get('http://localhost:3000/menu')             // получаем данные с нашей БД
        .then(data => {
            data.data.forEach(({ img, altimg, title, descr, price }) => {                            // формируем карточки на странице
                new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
            });
        });


    // Формируем верстку (код выше) на лету без создания классов (new MenuCard)
    // getResource('http://localhost:3000/menu')
    //     .then(data => createCard(data));

    // function createCard(data) {
    //     data.forEach(({ img, altimg, title, descr, price }) => {
    //         const element = document.createElement('div');

    //         element.classList.add('menu__item');

    //         element.innerHTML = `
    //         <img src=${img} alt=${altimg} />
    //         <h3 class="menu__item-subtitle">${title}</h3>
    //         <div class="menu__item-descr">
    //           ${descr}
    //         </div>
    //         <div class="menu__item-divider"></div>
    //         <div class="menu__item-price">
    //           <div class="menu__item-cost">Цена:</div>
    //           <div class="menu__item-total"><span>${price}</span> грн/день</div>
    //         </div>
    //     `;

    //         document.querySelector('.menu .container').append(element);
    //     });
    // }





    // const div = new MenuCard();
    // div.render();

    // Можно без создания переменной

    // new MenuCard(                            // Заком., так-как все это делает getResource (выше)
    //     'img/tabs/vegy.jpg',
    //     'vegy',
    //     'Меню "Фитнес"',
    //     'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    //     9,
    //     '.menu .container',
    // ).render();

    // new MenuCard(
    //     'img/tabs/elite.jpg',
    //     'elite',
    //     'Меню “Премиум”',
    //     ' В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд.Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
    //     14,
    //     '.menu .container',
    //     'menu__item'
    // ).render();

    // new MenuCard(
    //     'img/tabs/post.jpg',
    //     'post',
    //     'Меню "Постное"',
    //     'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
    //     21,
    //     '.menu .container',
    //     'menu__item'
    // ).render();


    // ============== SEND info from Forms =================== lesson 53

    const forms = document.querySelectorAll('form');

    const message = {
        load: 'img/spinner.svg',
        success: 'Спасибо! Мы с вами связжемся',
        failure: 'Что-то пошло не так...'
    };

    forms.forEach(item => {
        bindPostData(item);
    });

    const postData = async (url, data) => {             // async - означает, что внутри будет асинхронный код. ВСЕГДА используется с await
        const res = await fetch(url, {                  // await - означает что (прим. return-у) нужно дождатся выполнения этой операции (по стандарту срок ожидание до 30 сек.)
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: data
        });
        return await res.json();
    };


    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();                             // відміна стандартної поведінки браузера (перезавантаження сторінки)
            // const statusMessage = document.createElement('div');     // закомент. так-как в load текст заменили на картинку
            // statusMessage.classList.add('status');                   // закомент. так-как в load текст заменили на картинку
            // statusMessage.textContent = message.load;                   // закомент. так-как в load текст заменили на картинку

            const statusMessage = document.createElement('img');           // 'div' change on 'img'
            statusMessage.src = message.load;                               // add src for image
            statusMessage.style.cssText = `
            display: block;
            margin: 0 auto;
            `;
            // form.append(statusMessage);                  // закомент. так-как спинер сдвигает блоки верстки влево
            form.insertAdjacentElement('afterend', statusMessage);      //размещаем спинер перед концом (внизу)

            // const request = new XMLHttpRequest();                                    //заком., так-как используем fetch используем fetch
            // request.open('POST', 'server.php');                          // настройка запроса  // заком., так-как используем fetch


            // request.setRequestHeader('Content-type', 'multipart/form-data');     //XMLHttpRequest + FormData - автоматически определяют эти данные
            // request.setRequestHeader('Content-type', 'multipart/json');     //При отправке данных в формате json setRequestHeader нужен   // заком., так-как используем fetch

            const formData = new FormData(form);            //соберает все данные с формы


            // Конвертация данных formData в формат json         
            // const object = {};                            // заком., когда используем fetch без json
            // formData.forEach(function (value, key) {        //json
            //     object[key] = value;                        //json
            // });                                             //json

            // const json = JSON.stringify(object);            //json
            // request.send(json);                             //json

            // Новый метод конвертации
            const json = JSON.stringify(Object.fromEntries(formData.entries()));
            // ==============================================


            // request.send(formData);                         // Закоментирован при конвертации в json

            // fetch('server.php', {                       // отрпавляет данные, собранные с помощью FormData   //заком., добавили функции postData
            //     method: 'POST',
            //     // body: formData,                      // Закоментирован при конвертации в json
            //     // body: json,                  //json
            //     headers: {                               // Нужен, когда отправляем в json формате
            //         'Content-type': 'multipart/json'
            //     },
            //     body: JSON.stringify(object)
            // })
            // postData('http://localhost:3000/requests', JSON.stringify(object))   // заком., используется новый метод конвертации
            // .then(data => data.text())       // заком., трансформация происходит на этапе postData
            postData('http://localhost:3000/requests', json)

                .then(data => {
                    console.log(data);
                    showThanksModal(message.success);
                    form.reset();
                    statusMessage.remove();
                }).catch(() => {
                    showThanksModal(message.failure);
                }).finally(() => {
                    form.reset();
                });

            // request.addEventListener('load', () => {                     // заком., так-как используем fetch
            //     if (request.status === 200) {
            //         console.log(request.response);
            //         // statusMessage.textContent = message.success;     // закомент. так-как добавлено модал.окно с благодарностью
            //         showThanksModal(message.success);                   // добавлено, для отображен. модал.окно с благодарностью
            //         form.reset();
            //         // setTimeout(() => {                               // закомент. так-как добавлено модал.окно с благодарностью
            //         statusMessage.remove();
            //         // }, 2000);
            //         setTimeout(() => {
            //             closeModal();
            //         }, 3000);
            //     } else {
            //         // statusMessage.textContent = message.failure;     // закомент. так-как добавлено модал.окно с благодарностью
            //         showThanksModal(message.failure);
            //     }
            // });


        });
    }


    // ============== Оповещение пользователя об отправке (спинер, окна) =================== lesson 54

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.classList.add('hide');
        openModal();

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
        <div class="modal__content">
        <div class="modal__close" data-close>&times;</div>
        <div class="modal__title">${message}</div>
        </div>
        `;

        document.querySelector('.modal').append(thanksModal);
        // modal.append(thanksModal);

        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModal();
        }, 4000);
    }

    // fetch('https://jsonplaceholder.typicode.com/posts', {                // Пример
    //     method: 'POST',  
    //     body: JSON.stringify({ name: 'Alex' }),
    //     headers: {
    //         'Content-type': 'application/json'
    //     }
    // })
    //     .then(response => response.json())
    //     .then(json => console.log(json));

    // fetch('db.json')
    // fetch(' http://localhost:3000/menu')         //Проверка работы БД
    //     .then(data => data.json())
    //     .then(res => console.log(res));


    // ========================= Slider =======================

    // const slides = document.querySelectorAll('.offer__slide'),
    //     prev = document.querySelector('.offer__slider-prev'),
    //     next = document.querySelector('.offer__slider-next'),
    //     total = document.querySelector('#total'),                       // число на странице, которое отображает общее количество слайдов
    //     current = document.querySelector('#current');

    // let slideIndex = 1;

    // showSlides(slideIndex);

    // if (slides.length < 10) {
    //     total.textContent = `0${slides.length}`;
    // } else {
    //     total.textContent = slides.length;
    // }

    // function showSlides(n) {
    //     if (n > slides.length) {
    //         slideIndex = 1;
    //     }
    //     if (n < 1) {
    //         slideIndex = slides.length;
    //     }

    //     slides.forEach(item => item.style.display = 'none');
    //     slides[slideIndex - 1].style.display = 'block';

    //     if (slides.length < 10) {
    //         current.textContent = `0${slideIndex}`;
    //     } else {
    //         current.textContent = `{slideIndex}`;
    //     }
    // }

    // function plusSlides(n) {
    //     showSlides(slideIndex += n);
    // }

    // prev.addEventListener('click', () => {
    //     plusSlides(-1);
    // });
    // next.addEventListener('click', () => {
    //     plusSlides(1);
    // });



    // ========================= Slider Carousel =======================
    // в index.html блок со слайдами был помещен в еще один (div) блок-обьертку (.offer__sleder-inner)

    const slides = document.querySelectorAll('.offer__slide'),
        prev = document.querySelector('.offer__slider-prev'),
        next = document.querySelector('.offer__slider-next'),
        total = document.querySelector('#total'),                       // число на странице, которое отображает общее количество слайдов
        current = document.querySelector('#current'),
        slidesWrapper = document.querySelector('.offer__slider-wrapper'),
        slidesField = document.querySelector('.offer__slider-inner'),
        width = window.getComputedStyle(slidesWrapper).width,
        slider = document.querySelector('.offer__slider');           //offer__slider - блок-слайдер со всеми элементами, в т.ч. каунтером

    let slideIndex = 1;
    let offset = 0;   // переменная, которая будет отвечать за отступы при смене слайда

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
        })
    })


    // КАЛЬКУЛЯТОР суточной нормы калорий

    const result = document.querySelector('.calculating__result span');

    let sex, height, weight, age, ratio;

    if (localStorage.getItem('sex')) {
        sex = localStorage.getItem('sex');
    } else {
        sex = 'female';
        localStorage.setItem('sex', 'female');
    };

    if (localStorage.getItem('ratio')) {
        ratio = localStorage.getItem('ratio');
    } else {
        ratio = 1.375;
        localStorage.setItem('ratio', 1.375);
    };

    // добавляем функцию о смене класса если в localStorage уже есть данные
    function initLocalSettings(selector, activeClass) {
        const elements = document.querySelectorAll(selector);

        elements.forEach(elem => {
            elem.classList.remove(activeClass);
            if (elem.getAttribute('id') === localStorage.getItem('sex')) {
                elem.classList.add(activeClass);
            }
            if (elem.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
                elem.classList.add(activeClass);
            }
        });
    }

    initLocalSettings('#gender div', 'calculating__choose-item_active');
    initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');

    function calcTotal() {
        if (!sex || !height || !weight || !age || !ratio) {
            result.textContent = '_______';
            return;                                         // что-бы прервать подальшее выполнение функции
        }

        if (sex === 'female') {
            result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
        } else {
            result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
        }
    }

    calcTotal();

    function getStaticInformation(selector, activeClass) {
        const elements = document.querySelectorAll(selector);

        elements.forEach(elem => {
            elem.addEventListener('click', (e) => {
                if (e.target.getAttribute('data-ratio')) {
                    ratio = +e.target.getAttribute('data-ratio');
                    localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));
                } else {
                    sex = e.target.getAttribute('id');
                    localStorage.setItem('sex', e.target.getAttribute('id'));
                }

                elements.forEach(elem => {
                    elem.classList.remove(activeClass);
                });

                e.target.classList.add(activeClass);

                calcTotal();
            });
        })
    }

    getStaticInformation('#gender div', 'calculating__choose-item_active');
    getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active');

    function getDynamicInformation(selector) {
        const input = document.querySelector(selector);

        input.addEventListener('input', () => {

            if (input.value.match(/\D/g)) {
                input.style.border = '1px solid red';
            } else {
                input.style.border = 'none'
            }

            switch (input.getAttribute('id')) {
                case 'height':
                    height = +input.value;
                    break;
                case 'weight':
                    weight = +input.value;
                    break;
                case 'age':
                    age = +input.value;
                    break;
            }
            calcTotal();
        });
    }

    getDynamicInformation('#height');
    getDynamicInformation('#weight');
    getDynamicInformation('#age');

});