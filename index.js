'use strict' 

// Вбудовані прототипи

/* Всі вбудовані об’єкти слідують однаковому шаблону:
Методи зберігаються у прототипі (Array.prototype, Object.prototype, Date.prototype та ін.).
Сам об’єкт зберігає лише дані (елементи масиву, властивості об’єкта, дату).
Примітиви також зберігають методи у прототипах об’єктів-обгорток: Number.prototype, String.prototype and Boolean.prototype. Тільки undefined та null не мають об’єктів-обгорток.
Вбудовані прототипи можуть бути змінені або доповнені новими методами. Але їх не рекомендується змінювати. Єдиний допустимий випадок, мабуть, коли ми додаємо якийсь новий стандарт, котрий ще не підтримується рушієм JavaScript */

//Taks

//1 Додайте до прототипу всіх функцій метод defer(ms), що запускає функцію після ms мілісекунд.

Function.prototype.defer = function(ms) {
    setTimeout(this, ms);
}

function f() {
    alert("Привіт!");
  }
  
f.defer(1000);

//2 
//Додати до прототипу всіх функцій метод defer(ms), що повертає обгортку, що затримує виклик на ms мілісекунд.

Function.prototype.deferWrapper = function(ms) {
    let f = this;

    return function(...args) {
        return setTimeout(() => (this, args), ms);
    }
}