// const btns = document.querySelectorAll('button');
// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(1));    // Получить наименование 2-го класса
// console.log(btns[0].classList.add('red'));    // Добавить новый класс
// console.log(btns[0].classList.add('red', 'green', 'orange'));    // Добавить несколько классов
// console.log(btns[0].classList.remove('red'));   //удалить
// console.log(btns[1].classList.toggle('red'));    // добавить, если нет; удалить, если есть

// if (btns[1].classList.contains('red')) {
//     console.log('red');
// }


const btns = document.querySelectorAll('button');
const wrapper = document.querySelector('.btn-block');

btns[0].addEventListener('click', () => {
    btns[1].classList.toggle('red');
    // if (!btns[1].classList.contains('red')) {
    //     btns[1].classList.add('red');
    // } else {
    //     btns[1].classList.remove('red');
    // }
})

wrapper.addEventListener('click', (e) => {
    if (e.target && e.target.matches('button.red')) {
        console.log('Hello');
        wrapper.append(btn);
    }
})

const btn = document.createElement('button');
btn.classList.add('red');

