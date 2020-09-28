import { closeModal, openModal } from './modal';
import { postData } from '../services/services';

function forms(formSelector, openModalId) {
    // ============== SEND info from Forms =================== 

    const forms = document.querySelectorAll(formSelector);

    const message = {
        load: 'img/spinner.svg',
        success: 'Спасибо! Мы с вами связжемся',
        failure: 'Что-то пошло не так...'
    };

    forms.forEach(item => {
        bindPostData(item);
    });

    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();                             // відміна стандартної поведінки браузера (перезавантаження сторінки)

            let statusMessage = document.createElement('img');           // 'div' change on 'img'
            statusMessage.src = message.load;                               // add src for image
            statusMessage.style.cssText = `
            display: block;
            margin: 0 auto;
            `;
            form.insertAdjacentElement('afterend', statusMessage);      //размещаем спинер перед концом (внизу)

            const formData = new FormData(form);            //соберает все данные с формы

            const json = JSON.stringify(Object.fromEntries(formData.entries()));

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
        });
    }


    // ============== Оповещение пользователя об отправке (спинер, окна) 

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.classList.add('hide');
        openModal('.modal', openModalId);

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
            closeModal('.modal');
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

}

export default forms;