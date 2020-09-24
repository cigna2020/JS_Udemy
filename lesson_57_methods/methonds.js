'use strict';

//                    **************** METHODS***************


// ==================================== filter ======================

// const names = ['Ivan', 'Ann', 'Ksenia', 'Valdemart'];

// // const shortNames = names.filter(function (item) {         //Можно и через =>
// const shortNames = names.filter(item => {
//     return item.length < 5;
// });
// console.log(shortNames);


// ==================================== map ====================================

// const answers = ['IVaN', 'ANN', 'Hello'];
// const result = answers.map(item => {     // Можно и в одну строку
//     return item.toLocaleLowerCase();
// });
// const result = answers.map(item => item.toLocaleLowerCase());
// console.log(result);

//  Можно через let, что-бы не создавать новый массив, но это не поощряется!!!
// let answers = ['IVaN', 'ANN', 'Hello'];
// answers = answers.map(item => item.toLocaleLowerCase());
// console.log(answers);


// ==================================== every / some (возвращают boolean)====================================

// const arr = [4, 'qwe', 'asft'];
// console.log(arr.some(item => typeof (item) === 'number'));          // true
// console.log(arr.every(item => typeof (item) === 'number'));         // false


// ==================================== reduce ====================================

// const arr = [4, 5, 1, 3, 2, 6];
// // 1-й шаг               0    4
// // 2-й шаг               4    5
// // 3-й шаг               9    1
// const res = arr.reduce((sum, num) => sum + num);
// //                    сумма, тек.число
// console.log(res);

//  Мождно и со строками (делате одну сплошную строку, если нет разделителя):
// const arr = ['apple', 'pear', 'plum'];
// const res = arr.reduce((sum, current) => sum + ', ' + current);
// const res = arr.reduce((sum, current) => `${sum}, ${current}`);
// console.log(res);
// console.log(typeof (res));

// reduce может принимать третий аргумент - начальное значение, значение с которого будет стартовать sum

// const arr = [4, 5, 1, 3, 2, 6];
// const res = arr.reduce((sum, num) => sum + num, 3);
// console.log(res);


// Можно запускать по цепочке несколько методов (chain)
// Задача: получить имена 'person'

// const obj = {
//     ivan: 'person',
//     ann: 'person',
//     dog: 'animal',
//     cat: 'animal'
// };

// const newArr = Object.entries(obj)  // делает масив масивов [[ 'ivan', 'person' ], ...]
//     .filter(item => item[1] === 'person')       //можно писать и в одну, а не три строчки
//     .map(item => item[0]);          // вернет только имена

// console.log(newArr);