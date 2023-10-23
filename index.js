'use strict' 

// Object.keys, values, entries

/* 
Методи keys(), values(), entries() підтримуються для:

- Map
- Set
- Arrays

Звичайні об’єкти також підтримують подібні методи, але синтаксис дещо інший.

Object.keys(obj) - повертає масив ключів.
Object.values(obj) - повертає масив значень.
Object.entries(obj) - повертає масив пар.
*/

/* У об’єктів немає багатьох методів, які є у масивів, наприклад map, filter та інші.

Якщо б ми хотіли їх застосувати, тоді б ми використовували Object.entries з подальшим викликом Object.fromEntries:

Викликаємо Object.entries(obj), щоб отримати масив пар ключ/значення з obj.
На ньому використовуємо методи масиву, наприклад map, щоб перетворити ці пари ключів/значень.
Використаємо Object.fromEntries(array) на отриманому масиві, щоб перетворити його знову на об’єкт. */

// task double the prices

const prices = {
    banana: 1,
    orange: 2,
    meat: 4,
};

function doublePrices(obj) {
    return Object.fromEntries(Object.entries(obj).map(entry => [entry[0], entry[1] * 2]));
}

//Task 2
/* Є об’єкт salaries з довільною кількістю властивостей, що містять заробітні плати.

Напишіть функцію sumSalaries(salaries), що повертає суму всіх зарплат за допомогою Object.values та циклуfor..of.

Якщо об’єкт salaries порожній, тоді результат повинен бути 0. */

const salaries = {
    "Іван": 100,
    "Петро": 300,
    "Марія": 250
};

function sumSalaries(obj) {
    /* let sum = 0;
    for (let key of Object.values(obj)) {
        sum += key;
    }

    return sum; */
    return Object.values(obj).reduce((accum, salarie) => accum + salarie, 0);
}

//Task 3
/* Напишіть функцію count(obj), що повертає кількість властивостей об’єкта: */

let user = {
    name: 'Іван',
    age: 30
};

function count(obj) {
    return Object.keys(obj).length;
}