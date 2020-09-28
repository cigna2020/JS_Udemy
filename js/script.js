import tabs from './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import cards from './modules/cards';
import calc from './modules/calc';
import forms from './modules/forms';
import slider from './modules/slider';
import { openModal } from './modules/modal';


window.addEventListener('DOMContentLoaded', () => {

    // порядок подключения не имеет значения
    // const tabs = require('./modules/tabs'),
    // обязательно вызвать

    const openModalId = setTimeout(() => openModal('.modal', openModalId), 50000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('[data-modal]', '.modal', openModalId);
    timer('.timer', '2020-10-11');
    cards();
    calc();
    forms('form', openModalId);
    slider({
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        slide: '.offer__slide',
        totalCounter: '#total',
        currentCouner: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });
});