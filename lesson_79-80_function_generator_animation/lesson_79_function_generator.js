'use strict';

// function* someGenerator() {
//     yield 'S';
//     yield 'c';
//     yield 'r';
//     yield 'i';
//     yield 'p';
//     yield 't';
// }

// const someStr = someGenerator();

// console.log(someStr.next());
// console.log(someStr.next());
// console.log(someStr.next());            // { value: 'r', done: false } false - означает, что функция не использовала все циклы

// console.log(someStr.next().value);



function* count(n) {
    for (let i = 0; i < n; i++) {           // Шаг цыкла срабатывает только когда фызывается функция
        yield i;
    }
}

// const counter = count(7);
// console.log(counter.next().value);
// console.log(counter.next().value);
// console.log(counter.next().value);
// console.log(counter.next().value);

for (let k of count(7)) {      // вызов функции в цикле
    console.log(k);
}
