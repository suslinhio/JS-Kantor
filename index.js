'use strict' 

// Оператор об’єднання з null '??'

/* 
Результатом a ?? b буде:

a, якщо a визначене,
b, якщо a не визначене.

Інакше кажучи, ?? повертає перший аргумент, якщо він не null/undefined. Інакше, другий.

Зручно для показу нікнеймів ш тд, якщо зміннавизначена, то показуємо це значення, якщо ні, то якесь стандартне.
*/

let userName = null;
let userLastname = null;
let userNickname = 'Supercoder'
alert(userName ?? userLastname ?? userNickname ?? 'Guest'); // Supercoder

// || may be used here as well
alert(userName || userLastname || userNickname || 'Guest'); // Supercoder

/* 
Важлива різниця між ними полягає в тому, що:

|| повертає перше істинне значення.
?? повертає перше визначене значення.
*/