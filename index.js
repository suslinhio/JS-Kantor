'use strict' 

// Functions

/* Function expression */

/* 
Syntax:

let variable = function(args) {
    function body;
}

Функціональний Вираз буде створено тільки тоді, коли до нього дійде виконання і тільки після цього він може бути використаний.


Ще однією особливістю Оголошення Функції на відміну від Функціонального виразу є її блокова область видимості. У суворому режимі, якщо Оголошення Функції знаходиться в блоці {...}, то функція доступна усюди всередині блоку. Але не зовні.

*/

/* 
Колбеки (функції зворотного виклику) !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

*/

function ask(question, yes, no) { // typical func to show modal window
    if (confirm(question)) {
        yes();
    } else {
        no();
    }
}

function yes () {
    alert('You have agreed!');
}

function no () {
    alert('You have declined...');
}

// ask('Wonna enter?', yes, no);
// Аргументи showOk та showCancel функції ask називаються функціями зворотного виклику або просто колбеками.
