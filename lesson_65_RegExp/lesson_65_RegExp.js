'use strict';

// new RegExp('pattern', 'flags');
// /pattern/flags
//  /./flags - точка означает выбрать все

//   flags, можно комбинировать im, igm: 
// і - найти вне сависимости от регистра
// g - global, найти сразу несколько вхождений
// m - многострочный режим, т.е. с переносами

// const data = prompt('Ответ:');

// const reg = /n/ig;

// ========   search  =========
// исчет только ПЕРВОЕ вхождение, возращает индексный номер, где 1 - е совпадение
// console.log(data.search(reg));

//=========   match  ===========
// возращает массив данных(если 'i': что искали, индекс(1 - й), где искали, groups || 'g': массив вхождений["n", "n", "n"])
// console.log(data.match(reg));

//=========  replace =========
// RegExp можно создавать внутри аргумента
// console.log(data.replace(/./g, '*'));
// console.log(data.replace(/\./g, '*'));   // экранирование, т.е. будет применено только к этому символу
// console.log('12-22-44'.replace(/-/g, ':'));


//========= test =========
// Это метод RegExp, до этого были методы строк, похож на search но возращает true / false
// console.log(reg.test(data));


//========= class of RegExp =========
// *** \d  *** digitals
// *** \w  *** words / letters
// *** \s  *** space (все пробелы)

// const reg = /\d/g;
// console.log(data.match(reg));

// const str = 'My name is R2D2';
// console.log(str.match(/\w\d\w\d/i));           // найти слово(букву) после которого число после которого ...

////========= ОБРАТНЫЕ class of RegExp =========
// *** \D  *** НЕ digitals;  *** \w  *** НЕ words / letters;  *** \s  *** НЕ space (все пробелы)

// const str = 'My name is R2D2';
// console.log(str.match(/\W/ig));           // вернет только ПРОБЕЛЫ
