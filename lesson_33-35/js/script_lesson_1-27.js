"use strict";

// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };
// const a = prompt("Один из последних просмотренных фильмов?", ""),
//   b = prompt("На сколько оцените его?", ""),
//   c = prompt("Один из последних просмотренных фильмов?", ""),
//   d = prompt("На сколько оцените его?", "");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

// ***************ОПЕРАТОР if*******************

// if ('4 != 9') {
//   console.log("Ok!");
// } else {
//   console.log("Error!");
// }

// const num = 51;
// if (num < 49) {
//   console.log("Error");
// } else if (num > 50) {
//   console.log("too much");
// } else if (num == 50) {
//   console.log("Ok!");
// };

// *******************ТЕРНАРНЫЙ ОПЕРАТОР*******************
// const num = 51;
// num == 50 ? console.log("Ok!") : console.log("Error!");

// ********************ОПЕРАТОР switch******************
// const num = 9;
// switch (num) {
//   case 49:
//     console.log("litle");
//     break;
//   case 51:
//     console.log("too much");
//     break;
//   case 50:
//     console.log("Ok!");
//     break;
//   default:
//     console.log("Error!");
//     break;
// }

// *****************ЦИКЛ while*****************
// let num = 50;
// while (num <= 55) {
//   console.log(num);
//   num++;
// }

// ************ЦИКЛ ====do=====**********************
// let num = 50;
// do {
//   console.log(num);
//   num++;
// } while (num <= 55);

// ***********ЦИКЛ =====for========*****************
// for (let i = 1; i < 8; i++) {
//   console.log(i);
// }

// let num = 50;
// for (let i = 1; i < 8; i++) {
//   console.log(num);
//   num++;
// }

// for (let i = 1; i < 11; i++) {
//   if (i === 7) {
//     // break;
//     continue;
//     //   continue - дозволяє пропустити певне число (значення і т.п.).
//   }
//   console.log(i);
// }

/* Задание на урок:
1) Автоматизировать вопросы пользователю про фильмы при помощи цикла
2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит -
возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как
str.length - и получить её длину)
3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше -
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"
4) Потренироваться и переписать цикл еще двумя способами*/

// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
// };

// for (let i = 0; i < 2; i++) {
//     const a = prompt("Один из последних просмотренных фильмов?", ""),
//         b = prompt("На сколько оцените его?", "");
//     if (
//         a != null &&
//         b != null &&
//         a != "" &&
//         b != "" &&
//         a.length < 10 &&
//         b.length < 10
//     ) {
//         personalMovieDB.movies[a] = b;
//         console.log("done");
//     } else {
//         console.log("Error!");
//         i--;
//     }
// }

// if (personalMovieDB.count < 10) {
//     console.log("Просмотрено довольно мало фильмов");
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log("Вы классический зритель");
// } else if (personalMovieDB.count >= 30) {
//     console.log("Вы киноман");
// } else {
//     console.log("Произошла ошибка");
// }

// console.log(personalMovieDB);


// **********************function********************

// let num = 30;

// function showFirstMessage(text) {
//     console.log(text);
//     let num = 20;
// }

// showFirstMessage('Hello World!');
// console.log(num);

// function culc(a, b) {
//     return (a + b);
// }
// console.log(culc(5, 7));

// let num = 30;

// function ret() {
//     let num = 50;
//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);


// ******************  Свойства и Методы ***********************
// const str = 'stroca fruit';
// console.log(str.length);
// console.log(str[2]);

// const strUpperCase = str.toUpperCase();
// // console.log(str.toUpperCase());
// console.log(str);
// console.log(strUpperCase);
// console.log(strUpperCase.toLowerCase());
// console.log(str.indexOf('q'));
// console.log(str.slice(1, 7));
// console.log(str.substring(1, 7));
// console.log(str);

// const num = 12.6;
// console.log(Math.round(num));
// console.log(num);

// const test = '12.2px';
// console.log(parseInt(test));
// console.log(parseFloat(test));


// =====================   Part 2 Lesson 16  =============================

/* Задание на урок:
1) Первую часть задания повторить по уроку
2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы
3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres
P.S. Функции вызывать не обязательно */


// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Введите число!', '');
//     }
// }

// start();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };


// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?', ''),
//             b = prompt('На сколько оцените его?', '');

//         if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 2) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('error');
//             i--;
//         }
//     }
// }

// rememberMyFilms();

// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         console.log("Просмотрено довольно мало фильмов");
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log("Вы классический зритель");
//     } else if (personalMovieDB.count >= 30) {
//         console.log("Вы киноман");
//     } else {
//         console.log("Произошла ошибка");
//     }
// }

// detectPersonalLevel();

// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }

// showMyDB(personalMovieDB.privat);

// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         const genre = prompt(`Ваш любимый жанр под номером ${i}`);
//         personalMovieDB.genres[i - 1] = genre;
//     }
// }

// writeYourGenres();


// =============== Part 2 Lesson 19 =============***Callback****====================

// function learnJs(lang, callback) {
//     console.log(`I'm learning ${lang}`);
//     callback();
// }

// // learnJs('JavaScript', function () {
// //     console.log('Some text');
// // });

// function done() {
//     console.log('Some text');
// }

// learnJs('JavaScript', done);


// =============== Part 2 Lesson 20 =============***Object****====================

// const obj = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function () {
//         console.log('Test');
//     }
// };

// const { border, bg } = obj.colors;
// console.log(bg);

// delete obj.name;
// console.log(obj);

// for (let key in obj) {
//     console.log(`Свойство ${key} имеет значение: ${obj[key]}`);
// }

// for (let key in obj) {
//     if (typeof (obj[key]) === 'object') {
//         for (let i in obj[key]) {
//             console.log(`Свойство ${i} имеет значение ${obj[key][i]}`);
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${obj[key]}`);
//     }
// }
// let count = 0;
// for (let key in obj) {
//     count++;
// }
// console.log(count);

// console.log(Object.keys(obj).length);

// obj.makeTest();


// =============== Part 2 Lesson 21 =============***Масвивы array****====================

// const arr = [31, 2, 39, 69, 8];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {
//     return a - b;
// }

// arr.pop();
// arr.push(10);
// arr.shift();
// arr.unshift(0);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let key of arr) {
//     console.log(key);
// }

// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

// arr.forEach(function (item, i, arr) {
//     console.log(`${i + 1}: ${item} in Massiv ${arr}`);
// });

// const str = prompt('', '');
// const products = str.split(', ');
// products.sort();
// console.log(products.join('; '));


// =============== Part 2 Lesson 22 ===============================

// const obj = {
//     a: 5,
//     b: 1,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const copy = obj;
// console.log(copy);
// copy.a = 10;
// console.log(copy);
// console.log(obj);

// function copy(mainObj) {
//     let objCopy = {};
//     for (let key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy;
// }
// const newObj = copy(obj);
// console.log(newObj);

// const add = {
//     d: 17,
//     e: 20
// };
// console.log(Object.assign(obj, add));
// console.log(Object.assign({}, add)); //Створює новий об'єкт (окрім глибокої копії)!!!!

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice(''); //Створює новий об'єкт!!!!
// newArray[0] = 'd';
// console.log(oldArray);
// console.log(newArray);

// ------------- spread оператор:

// const video = ['youtube', 'vimeo', 'rutube'],
//     blogs = ['wordpress', 'livejournal', 'bloger'],
//     internet = [...video, ...blogs, 'vk', 'facebook'];
// console.log(internet);

// function someFunc(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// const num = [3, 5, 7];
// someFunc(...num);

// const num = [3, 5, 7];
// const newNum = [...num];   //Створює новий об'єкт!!!! 
// console.log(newNum);  

// const str = 'abcd';
// const newStr = new String(str);
// console.log(typeof (str));
// console.log(typeof (newStr));

// const soldier = {
//     health: 400,
//     armor: 200
// };

// const john = {
//     health: 100
// };

// john.__proto__ = soldier;
// Object.setPrototypeOf(john, soldier);
// const john = Object.create(soldier);
// john.health = 100;
// console.log(john);
// console.log(john.health);



// =============== Part 2 Lesson 24 ===============================

// const personalMovieDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
//     start: function () {
//         personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

//         while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
//             personalMovieDB.count = +prompt('Введите число!', '');
//         }
//     },
//     rememberMyFilms: function () {
//         for (let i = 0; i < 2; i++) {
//             const a = prompt('Один из последних просмотренных фильмов?', ''),
//                 b = prompt('На сколько оцените его?', '');

//             if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 2) {
//                 personalMovieDB.movies[a] = b;
//                 console.log('done');
//             } else {
//                 console.log('error');
//                 i--;
//             }
//         }
//     },
//     detectPersonalLevel: function () {
//         if (personalMovieDB.count < 10) {
//             console.log("Просмотрено довольно мало фильмов");
//         } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//             console.log("Вы классический зритель");
//         } else if (personalMovieDB.count >= 30) {
//             console.log("Вы киноман");
//         } else {
//             console.log("Произошла ошибка");
//         }
//     },
//     rememberMyFilms: function () {
//         for (let i = 0; i < 2; i++) {
//             const a = prompt('Один из последних просмотренных фильмов?', ''),
//                 b = prompt('На сколько оцените его?', '');

//             if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 2) {
//                 personalMovieDB.movies[a] = b;
//                 console.log('done');
//             } else {
//                 console.log('error');
//                 i--;
//             }
//         }
//     },
//     showMyDB: function (hidden) {
//         if (!hidden) {
//             console.log(personalMovieDB);
//         }
//     },
//     toggleVisibleMyDB: function () {
//         if (personalMovieDB.privat == true) {
//             personalMovieDB.privat = false;
//         } else {
//             personalMovieDB.privat = true;
//         }
//     },
//     writeYourGenres: function () {
//         // for (let i = 1; i <= 3; i++) {
//         //     let genre = prompt(`Ваш любимый жанр под номером ${i}`);
//         //     if (genre == '' || genre == null) {
//         //         console.log('Do again!');
//         //         i--;
//         //     } else {
//         //         personalMovieDB.genres[i - 1] = genre;
//         //     }
//         // }
//         // personalMovieDB.genres.forEach((item, i) => {
//         //     console.log(`Любимый жанр ${i + 1} - это ${item}`);
//         // });
//         for (let i = 1; i < 2; i++) {
//             let genre = prompt(`Ваши любимые жанры через запятую`);
//             if (genre == '' || genre == null) {
//                 console.log('Do again!');
//                 i--;
//             } else {
//                 personalMovieDB.genres = genre.split(', ');
//             }
//         }
//         personalMovieDB.genres.forEach((item, i) => {
//             console.log(`Любимый жанр ${i + 1} - это ${item}`);
//         });
//     }
// };


// =============== Part 2 Lesson 25 ===============================

// function hello() {
//     console.log('Hello World!');
// }
// hello();

// function hi() {
//     console.log('Say HI!');
// }
// hi();

// const arr = [1, 14, 4, 30, 54],
//     sorted = arr.sort(compareNum);

// function compareNum(a, b) {
//     return a - b;
// }

// console.log(sorted);

// =============== Part 2 Lesson 26 Динамическая типизация ===============================

// ***********To String:*************
// 1. toString
// console.log(typeof (String(null)));
// console.log(typeof (String(4)));

// 2. Конкатенация (сложение)
// console.log(typeof (4 + ''));
// const fontSize = 26 + 'px';

// ***********To Nubmer:*************
// 1. to Number
// console.log(typeof (Number('4')));

// 2. Унарный плюс
// console.log(typeof (+'4'));

// 3. parseInt
// console.log(typeof (parseInt('15px', 10)));

// ***********To Boolean:*************
// 1. Пустота или ноль (0) == false
// 0, '', null, undefined, NaN == false

// 2.Boolean
// console.log(typeof (Boolean('4')));

// 3. !!
// console.log(typeof (!!'4'));


// =============== Part 2 Lesson 27 Задачи с собеседований ===============================

// Какое будет выведено значение:
// let x = 5;
// alert(x++);
// Ответ: 5. Потому-что "++" указан после 5, соответственно, сначала alert вернет "5".


// Чему равно такое выражение: [] + false - null + true ?
// При сложении пустового массива [] такой массив равен пустой строке "". [] + false = "false" (тип - строка)
// "false" - null = NaN (не чесло), потому-что используется математическая операция. + true, тоже самое = NaN.

// Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?
// Ответ: 2. Число - простой тим данных. К тому же, присвоение в прост.тип.дан. происходит с права на лево.

// Чему равна сумма[] + 1 + 2 ?
// Ответ: "12" (тип - строка). [] + 1 = "1"; "1"+ 2 = "12".

// Что выведет этот код: alert( "1"[0])?
// Ответ: 1. Потому-что [0] - это индекс строки.

// Чему равно 2 && 1 && null && 0 && undefined ?
// && - запинается на лжи, т.е. возвращает ее. В связи с этим, ответ null (первое лживое (false) значение)
//  В тоже время оператор || (или) запинается на правде.

// Есть ли разница между выражениями ? !!(a & amp;& amp; b ) и(a & amp;& amp; b)?
// !! (два знака воскл.) преобразуют в булиновое значение, соответственно, разница есть.

// Что выведет этот код: alert(null || 2 && 3 || 4 ); ?
// Ответ: 3. Потому-что оператор && имеет больший приоритет чем || (см. таблицу приоритетов), соответственно сначала выполняется
//  операция: 2 && 3, если оба оператора равны (true), && возвращает последние значение: 3.
//   имеем (null || 3 || 4), ИЛИ запинается на первой правде, соответственно null || 3 = 3; остается 3 || 4 и снова первая правда = 3.

// a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?
// Ответ: НЕТ!!! Потому-что массивы сложные обьекты, и каждый из массивов (a или b) имеют свои ссылки.

// Что выведет этот код: alert(+"Infinity"); ?
// Ответ: Infinity. Да, тип данных число, но вопрос, что выведет этот код.

// Верно ли сравнение: "Ёжик" > "яблоко";?
// Ответ: НЕТ, в таблице unicod "я" имеет больший номер (400F), чем "Ё" (401).

// Чему равно 0 || "" || 2 || undefined || true || falsе ?
// Ответ: 2. ИЛИ запинается на первой правде, дальше код не пойдет.

