// import 'jquery'; если какая-либо функция не работает (ошибка), нужно импортировать отдельно:
import $ from 'jquery';

// const btn = $('#btn');  // в JQuery знак $ означает обращение к элементу (аналог querySellector) 
// console.log(btn);

$(document).ready(function () {     // JQuery-аналог window.addEventListener('DOMContentLoaded', () => {
    $('.list-item:first').hover(function () {
        $(this).toggleClass('active');          // аналог toggle (добавить/удалить class)
    });
    $('.list-item:eq(2)').on('click', function () {     // 2 - означает, что берем 3 элемент
        $('.image:even').fadeToggle('slow');             // even - выбрать четные
    });

    $('.list-item:eq(4)').on('click', function () {     // 2 - означает, что берем 3 элемент
        $('.image:odd').animate({
            opacity: 'toggle',
            height: 'toggle'
        }, 2000);             // odd - выбрать нечетные
    });
});