'use strict' 

// Конструктори, оператор "new"

/* 
Технічно, функції-конструктори – це звичайні функції. Однак є дві загальні домовленості:

Ім’я функції-конструктора повинно починатися з великої літери.
Функції-конструктори повинні виконуватися лише з оператором "new".
*/

/* 
// створити функцію і негайно викликати її за допомогою new
let user = new function() {
  this.name = "Джон"; 
  this.isAdmin = false;

  // ...інший код для створення користувача
  // можливо складна логіка та інструкції
  // локальні змінні тощо
};

Одноразово для створення складного обєкта.
*/

// Task
//1
function Calculator() {
    this.read = function() {
        this.a = Number(prompt('Insert first number!'));
        this.b = Number(prompt('Insert second number!'));
    };
    this.mul = function() {
        return a * b;
    };
    this.sum = function() {
        return a + b;
    };
}

//2
function Accumulator(startingValue = 10) {
    this.value = startingValue;
    this.read = function() {
        let adder = Number(prompt('Insert number.'));
        return this.value += adder;
    };
}

const accumulator1 = new Accumulator();