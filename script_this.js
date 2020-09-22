'use strict';

// ******  1. Функция при "включенном" use strict возвращает underfined, а вот в старом стиле (без use...) - window;  ******

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }
// showThis(4, 5);


// ****** 2. Контекст (this) у МЕТОДОВ (функция) ОБЬЕКТА (масив {}) будет сам обьект (его содержимое - ключ: значение); ******

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function () {
//         console.log(this);
//     }
// };
// obj.sum();


//****** 3. this в конструкторах и классах - это новый экземляр обьекта ******

// function User(name, id) {          // Это функция конструктор и она создаст новый обьект
//     this.name = name;
//     this.id = id;
//     this.human = true;
// }
// let ivan = new User('Ivan', 23);


//****** 4. Ручное присвоение контекста  ===== call ===== apply ===== bind  =====******

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + ' ' + surname);
// }

// const user = {
//     name: 'John'
// };

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);    // в apply аргумент (surname) должен передаватся в масиве []

// //===== bind  ====
// function count(num) {
//     return this * num;
// }

// const double = count.bind(2);    // получилась новая функция с жорстко привязанным контекстом (this у функ. count)

// console.log(double(3));
// console.log(double(4));


// ============= practice ===================

const btn = document.querySelector('button');

btn.addEventListener('click', function () {          // Если функция не стрелочная, тогда контекст вызова будет сам елемент на котором произошло событие == even.target (button)
    console.log(this);

    // this.style.width = 40 + 'px';
    // this.style.height = 40 + 'px';
    // this.style.backgroundColor = 'red';
});

// вариант со стрелочной функцией

const obj = {
    num: 5,
    sayNum: function () {
        const say = () => {                       // В стрелочной функции нет своего контекста, в связи с чем вернет контекст самого ОБЬЕКТА (obj) == {num: 5, sayNum: ƒ}
            console.log(this);
        };
        say();
    }
};

obj.sayNum();


//

// const double = (a) => {
//     return a * 2;
// };

// Тоже самое, что и выше

const double = (a) => a * 2;   // можно и без круглых скобок: const double = a => a * 2; 

console.log(double(20));
