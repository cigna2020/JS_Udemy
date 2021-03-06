'use strict';

// function User(name, age) {
//     this.name = name;         // в таком виде (this) можно вносити имзен. из вне
//     // this.age = age;         
//     let userAge = age;         // изменение не вносится

//     this.say = function () {
//         console.log(`Name of user: ${this.name}, Age: ${userAge}`);
//     };

//     this.getAge = function () {
//         return userAge;
//     };

//     this.setAge = function (age) {
//         if (typeof age === 'number' && age > 0 && age < 110) {
//             userAge = age;
//         } else {
//             console.log('Error!!!')
//         }
//     };
// }

// const ivan = new User('Ivan', 27);

// console.log(ivan.name);
// // console.log(ivan.userAge);      // userAge - underfined
// console.log(ivan.getAge());


// ivan.name = 'Alex';
// ivan.setAge(40);
// ivan.setAge(400);
// ivan.age = 36;

// ivan.say();


// class User {
//     constructor(name, age) {
//         this.name = name;
//         this._age = age;
//     }

//     #surname = 'Tsyhan';         // приватное свойство класса, к нему нельзя достучатся из вне

//     say() {
//         console.log(`Name of user: ${this.name} ${this.#surname}, Age: ${this._age} `);
//     }

//     get age() {
//         return this._age;
//     }

//     set age(age) {
//         if (typeof age === 'number' && age > 0 && age < 110) {
//             this._age = age;
//         } else {
//             console.log('Error!!!')
//         }
//     }
// }

// const ivan = new User('Ivan', 27);

// console.log(ivan.age);
// ivan.age = 99;
// console.log(ivan.age);

// ivan.say();         // в этом методе surname будет Tsyhan
// console.log(ivan.surname);  // surname - underfined, так как пытаемся из вне


//  ============== MODULE ==============

// const user = (function () {
//     const privat = function () {
//         console.log('I am privat!');
//     };

//     return {
//         sayHello: privat            // Нужно возвращать именно, как метод, иначе нет доступа
//     };
// }());

// user.sayHello();


//  ============== MODULE CommonJS ==============

// function myModule() {
//     this.hello = function () {
//         console.log('hello');
//     };

//     this.goodbye = function () {
//         console.log('bye');
//     };
// }

// //  чтобы экспортировать в другой файл js:
// module.exports = myModule;


//НОВЫЙ ФАЙЛ js
// чтобы импортировать в другом файле js нужно прописать:
// const newModule = require('./lesson_69_encapsulation_and_module.js');    // Обязательно прогнать через сборщик модулей, иначе будет ошибка в браузере!!!!

// const myModuleExample = new newModule();

// myModuleExample.hello();
// myModuleExample.goodbye();