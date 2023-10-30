'use strict' 

// Залишкові параметри та синтаксис поширення

//Task

//1
/* Напишіть функцію sum яка працює ось так: sum(a)(b) = a+b.

Саме так, використовуючи подвійні дужки (це не друкарська помилка). */

function sum(a) {
  return function innerSum(b) {
    return a + b;
  }
}


//2
/* У нас є вбудований для масивів метод arr.filter(f). Він фільтрує всі елементи через функцію f. Якщо вона повертає true, цей елемент повертається в отриманому масиві.

Зробіть набір “готових до використання” фільтрів:

inBetween(a, b) – фільтрує елементи які більше a та менше b. Також має включати елементи, які дорівнюють їм.
inArray([...]) – фільтрує елементи, які включено у заданий масив.
Використання має бути таким:

arr.filter(inBetween(3,6)) – вибирає лише значення від 3 до 6.
arr.filter(inArray([1,2,3])) – вибирає лише елементи, які включені у масив [1,2,3]. */

function inBetween(a, b) {
  return function (item) {
    return item >= a && item <= b;
  }
}

function inArray(arr) {
  return function (item) {
    return arr.includes(item);
  }
}

let arr = [1, 2, 3, 4, 5, 6, 7];

alert( arr.filter(inBetween(3, 6)) ); 

alert( arr.filter(inArray([1, 2, 10])));

//2
/* Отже, замість того, щоб кожен раз писати функцію, ми будемо викликати функцію byField(fieldName).

Напишіть функцію byField яка може бути використана для цього. */

function byFieldName(fieldName) {
  return function(a, b) {
    return a[fieldName] > b[fieldName] ? 1 : -1;
  }
}

let users = [
  { name: "Іван", age: 20, surname: "Іванов" },
  { name: "Петро", age: 18, surname: "Петров" },
  { name: "Енн", age: 19, surname: "Гетевей" }
];

console.log(users.sort(byFieldName('name')));
console.log(users.sort(byFieldName('age')));