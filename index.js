'use strict' 

// Планування: setTimeout та setInterval

/* 
- setTimeout дозволяє нам запускати функцію один раз через певний інтервал часу.
Syntax:
let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)

- setInterval дозволяє нам запускати функцію багаторазово, починаючи через певний інтервал часу, а потім постійно повторюючи у цьому інтервалі. 
Syntax:

*/

function sayHi(phrase, name) {
    console.log(`${phrase}, ${name}`);
}

let timerID = setTimeout(sayHi, 2000, 'Wassup', 'suslinhio');
console.log(timerID);

clearTimeout(timerID); //cancel timeout
console.log(timerID);


//setInterval

// let timerId = setInterval(sayHi, 2000, 'Wassup', 'suslinhio');

// setTimeout(() => { clearInterval(timerId); console.log('Stop'); }, 5000);


//Вкладений setTimeout

// function sayHiTimeOut() {
//     console.log(`Hi, body!`);
//     timerId = setTimeout(sayHiTimeOut, 2000);
// }

// let timerId = setTimeout(sayHiTimeOut, 2000);

// Вкладений setTimeout дозволяє більш точно встановити затримку між виконанням, ніж setInterval. Вкладений setTimeout гарантує фіксовану затримку 

//Tasks

//1
/* Напишіть функцію printNumbers(from, to) яка виводить число кожну секунду, починаючи від from і закінчуючи to.

Зробіть два варіанти рішення.

Використовуючи setInterval.
Використовуючи вкладений setTimeout. */

function printNumbersInterval(from, to) {
    let current = from;

    let timerId = setInterval(
        function() {
            console.log(current);
            if (current === to) {
                clearInterval(timerId);
            }
            current++;
        }, 1000
    );
}

function printNumbersTimeout(from, to) {
    let current = from;

    setTimeout( function tick() {
            console.log(current);
            if (current < to) {
                setTimeout(tick, 1000);
            }
            current++;
        }, 1000
    );
}