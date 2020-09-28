function openModal(modalSelector, openModalId) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';

    console.log(openModalId);

    if (openModalId) {
        clearInterval(openModalId);                      // Если пользователь уже открыл мод.окно, что-бы второй раз не появлялось по setTimeout
    }
}

function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}



function modal(triggerSelector, modalSelector, openModalId) {
    // ============= Modal Window ========================

    const modalTriger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector);

    modalTriger.forEach(btn => {
        btn.addEventListener('click', () => openModal(modalSelector, openModalId));
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == '') {
            closeModal(modalSelector);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal(modalSelector);
        }
    });

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal(modalSelector, openModalId);
            window.removeEventListener('scroll', showModalByScroll);   // щоб більше не повторювалося, аргументи відповідають аргументам window.addEventList...
        }
    }
    window.addEventListener('scroll', showModalByScroll);
}

export default modal;

export { closeModal };
export { openModal };