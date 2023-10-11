'use strict' 

// Functions

/* 
Function declaration

function newFunction (args) {
    function body;
}

Змінна, яка оголошена в функції доступна лише в тілі цієї функції. - local variable
But, fункція може використовувати зовнішні змінні

Зовнішня змінна використовується тоді, коли немає локальної. Якщо всередині функції є змінна з таким самим ім’ям, то вона перекриває зовнішню. 

Ми можемо задати так зване “типове” значення параметра, яке використовуватиметься, якщо не задати аргумент. Для цього потрібно написати значення через =

Функція з порожнім return, або без return повертає undefined

Функції, які починаються з …

"show" зазвичай щось показують.
"get…" – повертають значення,
"calc…" – щось обчислюють,
"create…" – щось створюють,
"check…" – щось перевіряють і повертають булеве значення.

*/

/* function showMessage () {
    let message = 'Hi, Yolop!'; //local variable
    alert(message);
}

showMessage(); //works
alert(message); // doest work */

function showPrimes (n) {
    for (let i = 2; i < n; i++) {
        if (!isPrime(i)) continue;
        console.log(i);
    }
} 

function isPrime (n) {
    for (let j = 2; j < n; j++) {
        if (n % j === 0) {
            return false;
        } else {
            return true;
        }
    }
}

// TASKS

// 1
function checkAge(age) {
    return (age > 18) ? true : confirm('Do you have permission?');
    // return (age > 18) || confirm('Do you have permission?');
  }

// 2
function getMin (a, b) {
    if (a > b) {
        return a;
    }
    return b;
}

// 3 Напишіть функцію pow(x, n), яка повертає число x, піднесене до степеня n. Інакше кажучи, множить число x саме на себе n разів і повертає результат.

/* function pow(x, n) {
    return x**n;
} */

function pow(x, n) {
    let result = x;

    for (let i = 1; i < n; i++) {
        result *= x;
    }

    return result;
}
