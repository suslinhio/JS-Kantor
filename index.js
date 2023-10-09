'use strict' 

// Цикли: while і for

// Цикл – це спосіб повторити один і той же код кілька разів.

/* WHILE

while (condition) {
    loop body
}

*/

/* let i = 0;

while (i < 3) {
    console.log(i);
    i++;
}
 */

/* let i = 3;

while (i) {
    console.log(i);
    i--;
} */

/* Цикл “do…while” 

do {
    loop body;
} while (condition);

Цю форму синтаксису слід використовувати лише тоді, коли ви хочете, щоб тіло циклу виконалось хоча б один раз, незалежно від умови.
*/

/* 
Цикл “for”

for (initializing counter; condition; step) {
    loop body;
}
*/

/* for (let i = 0; i < 3; i++) {
    console.log(i);
} */

/* 
Continue

Зупиняє поточну ітерацію і починає виконання циклу спочатку з наступної ітерації (якщо умова циклу досі вірна).

*/

/* for (let i = 0; i < 10; i++) {
    if (i % 2) {
        console.log(i)
    }
} */

/* for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) continue;
    console.log(i); 
} */

// Мітки для break/continue

/* 
labelName: for (...) {
  ...
} 
*/

/* outer: 
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        let input = prompt(`The coordinates are: ${i}, ${j}`);
        if (!input) break outer;
    }
}
alert('Ready!'); */

//TASKS

/* let i = 0;
while (++i < 5) alert( i ); // 1, 2, 3, 4

let i = 0;
while (i++ < 5) alert( i ); */ // 1, 2, ,3, 4, 5

/* for (let i = 0; i < 5; i++) alert( i ); // 0, 1, 2, 3, 4
for (let i = 0; i < 5; ++i) alert( i ); // 0, 1, 2, 3, 4
 */

/* for (let i = 2; i < 11; i++) {
    if (i % 2) continue;
    console.log(i);
} */

/* let i = 0;
while (i < 3) {
    console.log(`Number ${i}!`);
    i++;
} */

/* for (;;) {
    let userNum = Number(prompt('Insert number over 100.'));
    if (userNum > 100) break;
} */

/* let num = 100;
outer:
for (let i = 2; i <= num; i++) {
    
    for (let j = 2; j < i; j++) {
        if (i % j === 0) continue outer;
        
    }

    console.log(i);
} */