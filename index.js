'use strict' 

// Методи Strings

// .length - довжина рядка у символах (спеціяльні символи (\n) також рахуються)

let str1 = 'Hello world!';
console.log(str1.length);

// Викликати символ за номером позиції у рядку можна кількома способами

// 1 string[n]

for (let i = 0; i < str1.length; i++) { // similar to arrays
    console.log(str1[i]);
}

// 2 method string.at(pas)
for (let i = -1; i > -str1.length; i--) { // similar to arrays
    console.log(str1.at(i)); // Method at() can use negative nums => starts from the end
}

// 3 for ... of string
for (let char of str1) {
    console.log(char.toUpperCase());
}

// Methods toUpperCase() and toLowerCase()
let str2 = 'BIG and small';
console.log(str2.toUpperCase());
console.log(str2.toLowerCase());


// Методи для пошуку рядука

// string.indexOf(substring, pos)
// Він шукає підрядок substr в рядку str, починаючи з позиції pos, і повертає позицію, де знаходиться збіг, або -1 якщо збігів не було знайдено.

console.log(str2.indexOf('sm', 2));

/* Щоб знайти усі збіги, нам потрібно запустити indexOf в циклі. Кожен новий виклик здійснюється з позицією після попереднього збігу: */

let stringToInvestigate = 'Хитрий, як лисиця, сильний, як Як';
let target = 'як';

let pos = -1;
while ((pos = stringToInvestigate.indexOf(target, pos + 1)) != -1) {
  alert( pos );
}

// string.lastIndexOf(substring, pos) - same, but starting reverse

// includes(subctring, pos) - returns true/false whether substring exists

console.log(stringToInvestigate.includes('як')); //true

// str.startsWith(substring) та str.endsWith(substring) перевіряють, чи починається і чи закінчується рядок певним підрядком.

console.log(stringToInvestigate.startsWith('Хит')); // true
console.log(stringToInvestigate.startsWith('хит')); // false (watch out register)
console.log(stringToInvestigate.endsWith('Як')); // true
console.log(stringToInvestigate.endsWith('як')); // false (watch out register)


/* 
Отримання підрядка
В JavaScript є 3 метода для отримання підрядка: substring, substr та slice.
*/

// string.slice(start, end) - end не включно

let stringToSlice = 'stringify';
console.log(stringToSlice.slice(1, 4)); //tri

// string.substring(start, end) - end не включно, майже те саме, але дозволяє start бути більшим за end, в такому разі міняє місцями

console.log(stringToSlice.substring(2, 6)); // ring
console.log(stringToSlice.substring(6, 2)); // ring

// string.substr(start, length) - повертає підрядок починаючи зі старт і заданої довжини
// лише рушії браузерного Javascript мають його підтримувати, і не рекомендується його використовувати
console.log(stringToSlice.substr(3, 3)); //ing

// string.codePointAt(pos) - повертає позицію у Юнікоді
console.log('Z'.codePointAt(0)); // 90
console.log('z'.codePointAt(0)); // 122

// string.fromCodePoint(code) - навпаки з номеру у Юнікоді відтворює символ
console.log(String.fromCodePoint(90)); //Z
console.log(String.fromCodePoint(122)); //z

//Task вивести симполи з 1 по 250 одним рядком

let allSymbols = '';
for (let i = 1; i < 251; i++) {
    allSymbols += String.fromCodePoint(i);
}

console.log(allSymbols);

// Метод порівння рядків
// string.localCompare(string2)
// Повертає відʼємне число, якщо str менше, ніж str2.
// Повертає додатне число, якщо str більше, ніж str2.
// Повертає 0, якщо вони рівні.
let stringMe = 'Suslyk';
let stringHim = 'Tretyak';

console.log(stringMe.localeCompare(stringHim)); // -1 => stringMe < stringHim

//Task 1
// Напишіть функцію ucFirst(str), яка повертає рядок str з першим символом у верхньому регістрі

function ucFirst(str) {
    if (!str) return str;

    return str[0].toUpperCase() + str.slice(1);
}

//Task 2
//Напишіть функцію checkSpam(str), яка повертає true, якщо str містить ‘viagra’ or ‘XXX’, інакше false.

function checkSpam(str) {
    let lowerStr = str.toLowerCase();
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

checkSpam('buy ViAgRA now'); // true
checkSpam('free xxxxx'); // true
checkSpam("innocent rabbit");  // false

// Task 3
//Створіть функцію truncate(str, maxlength), яка перевіряє довжину str і, якщо вона перевищує maxlength – замінює кінець str символом трьох крапок "…", щоб його довжина була рівною maxlength.

function truncate(str, maxlength) {
    return (str.length > maxlength) ? str.slice(0, maxlength - 1) + '…' : str;
}

// Task 4
// У нас є вартість у вигляді "$120". Тобто: спочатку йде знак долара, а потім число.
// Створіть функцію extractCurrencyValue(str), яка витягне числове значення з такого рядка та поверне його.

function extractCurrencyValue(string) {
    return string.startsWith('$') ? Number(string.slice(1)) : Number(string);
}