const btn = document.querySelector('.btn');
let timerId,
    i = 0;

function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;
    const id = setInterval(frame, 10);

    function frame() {
        if (pos === 300) {
            clearInterval(id);
            myAnimation();
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation);



// btn.addEventListener('click', () => {
//     // const timerId = setTimeout(logger, 2000);
//     timerId = setInterval(logger, 2000);
//     logger();
// });



// function logger() {
//     console.log('text');
//     i++;
//     if (i === 3) {
//         clearInterval(timerId);

//     }
// }

// Рекурсивний сетТаймаут
// let id = setTimeout(function log() {
//     console.log('someText');
//     id = setTimeout(log, 2000);
// }, 2000);