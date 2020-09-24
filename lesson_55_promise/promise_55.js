'use strict';

// console.log('Запрос данных...');

// const req = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Подготовка данных...');

//         const product = {
//             name: 'TV',
//             price: 2000
//         };

//         resolve(product);
//     }, 2000);
// });

// req.then((product) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.status = 'order';
//             resolve(product);            // закомент., тест реджект
//             // reject();                   // Все, что после реджект выполнятся не будет, сразу кетч
//         }, 2000);
//     });
// }).then(data => {
//     console.log(data);
//     data.modify = true;
//     return data;
// }).then(data2 => {
//     console.log(data2);
// }).catch(() => {
//     console.error('Ошибка...');                // тест реджект
// }).finally(() => {                          // Выполняется в любом случае
//     console.log('Finally');
// });


// =============== Promise .all / .race

const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });
};

// test(1000).then(() => console.log('1000 ms'));
// test(2000).then(() => console.log('2000 ms'));

// Promise.all([test(1000), test(2000)]).then(() => {      // all - ждет выполнения всех функций и только потом переходит к then
//     console.log('All');
// });

Promise.race([test(1000), test(2000)]).then(() => {      // race - НЕ ждет выполнения всех функций и переходит к then после выполнения одной (самой быстрой) функции
    console.log('All');
});
