'use strict';

// const box = document.getElementById('box');
// console.log(box);

// const btns = document.getElementsByTagName('button');
// console.log(btns);

// const circle = document.getElementsByClassName('circle');
// console.log(circle);

// const hearts = document.querySelectorAll('.heart');
// // console.log(hearts);
// hearts.forEach(item => {
//     console.log(item);
// });

// const hearts = document.querySelector('.heart');
// console.log(hearts);


// ================== Lesson 29 ===========================

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    wrapper = document.querySelector('.wrapper'),
    hearts = wrapper.querySelectorAll('.heart'),
    oneHeart = wrapper.querySelector('.heart');

box.style.backgroundColor = 'green';
box.style.cssText = 'background-color: green; width: 500px';
box.style.width = '500px';
btns[1].style.borderRadius = '100%';

for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = 'green';
}

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const text = document.createTextNode('Some text');
const div = document.createElement('div');
div.classList.add('black');

wrapper.append(div);

document.body.append(div);

document.querySelector('.wrapper').append(div);

wrapper.appendChild(div); // OLD style

wrapper.prepend(div);

hearts[1].before(div);
hearts[1].after(div);
wrapper.insertBefore(div, hearts[1]); // OLD style

btns[1].remove();
wrapper.removeChild(hearts[1]); // OLD style

hearts[1].replaceWith(btns[1]);
wrapper.replaceChild(btns[1], hearts[1]); // OLD style

div.innerHTML = '<h1>some text</h1>';
div.insertAdjacentHTML('beforebegin', '<h2>Hello!</h2>');

div.textContent = 'Hello!';
