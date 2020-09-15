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


let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Введите число!', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 2) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genre;
    }
}

writeYourGenres();