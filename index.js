'use strict' 

// Прив’язка контексту до функції

/*  Як уникнути втрати контексту:

- обгортка, але вразливо, бо значення обєкта може змінитися поки виклик методу затримано
- bind, зміни з часом не відбудеться, тому що bind посилається на обєкт в момент створення
*/

//1 wrapper
const user = {
    name: 'Dima',
    sayHi() {
        console.log(`Hi, ${this.name}!`);
    }
}

setTimeout(function() { //wrapper
    user.sayHi();
}, 2000);

//2 bind
//let boundFunc = func.bind(context);


const boundSayHi = user.sayHi.bind(user); //передаємо метод з контекстом
setTimeout(boundSayHi, 1000);


//Tasks

//1
/* Виклик askPassword() в коді наведеному нижче повинен перевіряти пароль та викликати user.loginOk/loginFail в залежності від відповіді.

Але виконання коду призводить до помилки. Чому?

Виправте виділений рядок, щоб код запрацював правильно (інші рядки не мають бути змінені). */

function askPassword(ok, fail) {
    let password = prompt("Пароль?", '');
    if (password == "rockstar") ok();
    else fail();
  }
  
  const user2 = {
    name: 'Іван',
  
    loginOk() {
      alert(`${this.name} увійшов`);
    },
  
    loginFail() {
      alert(`${this.name} виконав невдалу спробу входу`);
    },
  
  };

  const loginOk = user2.loginOk.bind(user2);
  const loginFail = user2.loginFail.bind(user2);
  
  askPassword(loginOk, loginFail);