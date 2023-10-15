'use strict' 

// Методи об’єкту, "this"

/* 
Функція, яка є властивістю об’єкта, називається його методом.

Як правило, метод об’єкта повинен отримувати доступ до інформації, що зберігається в об’єкті, для виконання своєї роботи.
*/
let user = {
    name: 'Dima',
    age: 23,
}

user.sayHi = function () {
    console.log(`${user.name} says 'Hi!' to you!`);
}

// Стрілочні функції не мають “this”

// Tasks

//Creat obj calculator

const calculator = {
    read() {
        this.a = Number(prompt('Insert first number.'));
        this.b = Number(prompt('Insert second number.'));
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    },
}

//Chaining

const ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() {
        console.log(this.step);
        return this;
    },
}