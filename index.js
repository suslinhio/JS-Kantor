'use strict' 

// Методи Numbers

// 1000000000 === 1_000_000_000 - синтаксичний цукор для читабельності

let num1 = 1e9; // 1000000000
let num2 = 4.4e6; // 4400000

// let mcrsec = 0.000001;
let mcrsec = 1e-6;

/* Hexadecimal */

console.log( 0xff ); // 255
console.log( 0xFF ); // 255 (те саме, регістр не має значення)
let a = 0b11111111; // двійкова форма 255
let b = 0o377; // вісімкова форма 255

// toString(base) - повертає рядкове представлення числа за base(2 - 36, default is 10)
// '.' - для використання зі змінною
// '..' - для використання безпосередньо з числом

let num = 255;

console.log( num.toString(16) );  // ff
console.log( num.toString(2) );   // 11111111

/* Методи округлення */

let number = 3.1;
// Math.floor() округляє вниз
console.log(Math.floor(number)); // 3

// Math.ceil() округляє вгору
console.log(Math.ceil(number)); // 4

// Math.round() округляє до найближчого цілого(як вниз так і вгору)
console.log(Math.round(number)); // 3

// Math.trunc() видаляє все після крапки
console.log(Math.trunc(number)); // 3

// isFinite(value) - переводить у число і перевіряє чи воно NaN/Infinity/-Infinity
// isNaN(value) - переводить у число і перевіряє чи воно NaN

// Math.random() - Повертає випадкове число від 0 до 1 (не включаючи 1).

// Math.max(a, b, c...) / Math.min(a, b, c...) = Повертає найбільше/найменше число з довільної кількості аргументів.

// Math.pow(n, power) - Повертає n, зведене у ступінь power.



// TASKS

//Напишіть скрипт, який просить відвідувача ввести два числа, і в результаті показує їх суму.

function getSum() {
    let a = Number(prompt('Insert number 1.'));
    let b = Number(prompt('Insert number 2.'));

    return a + b;
}

// Створіть функцію readNumber, яка запросить число, поки відвідувач не введе дійсне числове значення.

function readNumber() {
    let userNum;
    do {
        userNum = prompt('Insert number, please!');
    } while ( !isFinite(num) );

    if (userNum === null || userNum === '') {
        return null;
    } 
    return Number(userNum); 
}

// Напишіть функцію random(min, max) для створення випадкового числа з плаваючою крапкою від min до max (не враховуючи max).

function random(min, max) {
    return min + Math.random() * (max - min);
}

// Створіть функцію randomInteger(min, max), яка генерує випадкове ціле число від min до max включно.
function randomInteger(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
}
