'use strict'

// const btn = document.querySelector('button'),
//     btns = document.querySelectorAll('button'),
//     overlay = document.querySelector('.overlay'),
//     link = document.querySelector('a');

// btn.onclick = function () {
//     alert('click');
// };

// btn.addEventListener('click', () => {
//     alert('clll');
// });

// btn.addEventListener('click', (event) => {
//     console.log(event.target);
//     event.target.remove();
//     // alert('clll');
// });

// let i = 0;
// const deleteElement = (e) => {
//     console.log(e.target);
//     i++;
//     if (i == 3) {
//         btn.removeEventListener('click', deleteElement);
//     }
// };
// btn.addEventListener('click', deleteElement);

// const deleteElement = (e) => {
//     console.log(e.Target);
//     console.log(e.type);
// };
// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

// btns.forEach(itemBtn => {
//     itemBtn.addEventListener('click', deleteElement, { once: true });
// });

// link.addEventListener('click', (event) => {
//     event.preventDefault();                             // Отмена стандартного поведения (переход по ссылке)
//     console.log(event.target);
// });



// ========================= Lesson 32 ===========================

// console.log(document.body);
// console.log(document.documentElement); // = доступ к html
// console.log(document.body.childNodes);

// console.log(document.body.firstChild);
// console.log(document.body.lastChild);

// console.log(document.querySelector('#current').parentNode);
// console.log(document.querySelector('#current').parentNode.parentNode);
// console.log(document.querySelector('[data-current="3"]').nextSibling.nextSibling);
// console.log(document.querySelector('[data-current="3"]').nextElementSibling);
// console.log(document.querySelector('[data-current="3"]').previousSibling.previousSibling);

// for (let node of document.body.childNodes) {
//     if (node.nodeName == '#text') {
//         continue;
//     }
//     console.log(node);
// }


