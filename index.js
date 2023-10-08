'use strict' 

// Умовний оператор ‘?’ - тернарний оператор, єдиний маж три операнди
// let resalt = condition ? output1 : output2;

// Without '?'
/* 
let accessAllowed = null;
let age = Number(prompt('How old are you&'));

if (age >= 18) {
    accessAllowed = true;
} else {
    accessAllowed = false;
}

alert(accessAllowed); */

// With '?'
/* 
let age = Number(prompt('How old are you&'));
let accessAllowed = (age >= 18) ? alert('Want some beer?') : alert('Go do your homework!'); */


// Декілька ‘?’
/* 
let age = Number(prompt('How old are you?'));

let message = (age < 3) ? 'You are a todler!' :
    (age < 18) ? 'You are a teenager!' :
    (age < 50) ? 'You are adult!' :
    (age < 99) ? 'You are very old.' :
    'How the fuck are you still alive?';

alert(message); */

// Task 1
// if ("0") {
//     alert( 'Привіт' ); //yes
//   }

// Task 2 Назва JavaScript

/* let jsName = prompt('What is official name of JavaScript?');

if (jsName === 'ECMAScript') {
    alert('You are so clever!');
} else {
    alert('You have never heard ofECMAScript???');
} */

// Task 3

/* let num = Number(prompt('Insert namber'));

if (num > 0) {
    alert('1');
} else if (num < 0) {
    alert('-1');
} else {
    alert('0');
} */

// Task 4

/* let result = (a + b < 4) ? 'Smaller' : 'Bigger';
alert(result); */

// Task 5

let message = (login === 'worker') ? 'Hello' :
    (login === 'director') ? 'Good afternoon' :
    (login === ' ') ? 'Entry denied' :
    '';

