'use strict' 

// Об’єкт функції, NFE

//Name

function sayHi() {
    console.log('Hi!');
}
console.log(sayHi.name); //sayHi

//Length

function f1(a) {}
function f2(a, b) {}
function many(a, b, ...more) {}

console.log(f1.length); // 1
console.log(f2.length); // 2
console.log(many.length); // 


//Tasks

//1
/* Змініть код makeCounter() так, щоб лічильник міг також зменшити та встановити рахунок:

counter() повинен повернути наступний рахунок (як раніше).
counter.set(value) повинен встановити лічильник в значення value.
counter.decrease() повинен зменшити лічильник на 1. */

function makeCounter() {
    let count = 0;

    

    return function counter() {
        counter.set = function (value) {
            count = value;
            return count;
        }
    
        counter.decrease = function () {
            return --count;
        }

        return ++count;
    }
}

let counting = makeCounter();

//2
/* Напишіть функцію sum, яка б працювала так:

sum(1)(2) == 3; // 1 + 2
sum(1)(2)(3) == 6; // 1 + 2 + 3
sum(5)(-1)(2) == 6
sum(6)(-1)(-2)(-3) == 0
sum(0)(1)(2)(3)(4)(5) == 15 */

function sum(a) {

    let currentSum = a;
  
    function f(b) {
      currentSum += b;
      return f;
    }
  
    f.toString = function() {
      return currentSum;
    };
  
    return f;
  }