'use strict' 

// Functions

/* Arrow functions */

/* 
Syntax:

let func = (args) => {
    body;
    return res;
} 

OR

let func = (args) => expression;
  

*/

let sum = (a, b) => a + b;

/* 
Якщо функція має лише один аргумент, тоді дужки навколо параметрів можна опускати, що дозволить записати її ще коротше.
Якщо аргументів немає, то дужки порожні, але вони повинні бути:
let func = () => expression;
*/

let double = a => a * 2;


//TASKS

// Перепишіть з використанням стрілкових функцій

/* function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Ви згодні?",
  function() { alert("Ви погодились."); },
  function() { alert("Ви скасували виконання."); }
); */


function ask (question, yes, no) {
    if (confirm(question)) {
        yes();
    } else {
        no();
    }
}

ask('Want some sweets?',
() => alert('You have agreed!'),
() => alert('You have declined'));