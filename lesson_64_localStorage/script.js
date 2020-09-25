'use strict';

// //  записать новый ключ.  1-й аргумент - ключ, 2-й - значение
// localStorage.setItem('number', 5);


// // получить элемент
// localStorage.getItem('number');


// // удалить элемент
// localStorage.removeItem('number');


// // очистить полностью хранилище
// localStorage.clear();


const checkbox = document.querySelector('#checkbox'),
    form = document.querySelector('form'),
    change = document.querySelector('#color');


if (localStorage.getItem('isChecked')) {
    checkbox.checked = true;
}

if (localStorage.getItem('bg') === 'changed') {
    form.style.backgroundColor = 'green';
}

checkbox.addEventListener('change', () => {
    localStorage.setItem('isChecked', true);
});

change.addEventListener('click', () => {
    if (localStorage.getItem('bg') === 'changed') {
        localStorage.removeItem('bg');
        form.style.backgroundColor = '#fff';
    } else {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = 'red';
    }
});



// Работа с массивом (нужно в формате json)
const persone = {
    name: 'Alex',
    age: 25
};

const serializedPersone = JSON.stringify(persone);
localStorage.setItem('alex', serializedPersone);
// localStorage.setItem('alex', persone);           // без конвертации в json получим [object Object]

console.log(JSON.parse(localStorage.getItem('alex')));
console.log(serializedPersone);
