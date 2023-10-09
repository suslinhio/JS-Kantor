'use strict' 

// Логічні оператори

/* || (АБО)

alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false

Оператор АБО || робить наступне:

Обчислює операнди зліва направо.
Перетворює значення кожного операнда на булеве. Якщо результат true, зупиняється і повертає початкове значення цього операнда.
Якщо всі операнди були обчисленні (тобто усі були false), повертає останній операнд.



*/
/* let hour = 12;
let isWeekend = true;
if (hour < 10 || hour > 18 || isWeekend) {
    alert('Office is closed!')
} */

// 1. Отримання першого істинного значення зі списку змінних або виразів.

/* let firstName = '';
let lastName = '';
let nickName = 'suslinhio';

alert('Hello, ' + (firstName || lastName || nickName || "Guest")); */

// 2. Обчислення короткого замикання.

/* true || alert('Some message'); // the message will not be shown
false || alert('Some message'); // the message will be shown
 */
/* && (І)

alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false

Оператор І && робить наступне:

Обчислює операнди зліва направо.
Перетворює кожен операнд на булевий. Якщо результат false, зупиняється і повертає оригінальне значення того операнда.
Якщо всі операнди були обчисленні (тобто усі були правдиві), повертає останній операнд.

Оператор І && має вищий пріоритет за АБО ||.

Отже, код a && b || c && d по суті є таким самим, як код з виразами && у дужках: (a && b) || (c && d).
*/

/* let hour = 12;
let minute = 30;

if (hour === 12 && minute === 30) {
    alert('Its time for lunch!');
} */

/* alert(1 && 2 && null && 3); // null
alert(1 && 2 && 3); // 3 */

/* ! (НЕ) */

/* alert(!true); //false
alert(!0); //true
*/

/* TASKS */

/* alert(null || 2 || undefined); //2

alert(alert(1) || 2 || alert(3)); // 1 and then 2 (alert returns undefined)

alert(1 && null && 2); //null

alert(alert(1) && alert(2)); // 1 and then undefined (alert returns undefined)

alert( null || 2 && 3 || 4 ); // 3
 */
/* let age = 30;
if (age >= 14 && age <= 90) {
    alert(true);
}
 */

/* let age = 6;
if (!(age >= 14 && age <= 90)) {
    alert(true);
}
if (age < 14 || age > 90) {
    alert(true);
} */

/* if (-1 || 0) alert( 'перший' ); // -1 >> true >> alert
if (-1 && 0) alert( 'другий' ); // 0 >> false >> no alert
if (null || -1 && 1) alert( 'третій' ); // 1 >> true >> alert */

// Перевірте логін

let userName = prompt('Insert your user-name, please.');

if (userName === 'Admin') {
    let userPassword = prompt('Inser your password.');
    if (userPassword === 'Host') {
        alert('Welcome!');
    } else if (userPassword === null || userPassword === '') {
        alert('Canceled.')
    } else {
        alert('Invalid password');
    }
} else if (userName === null || userName === '') {
    alert('Canceled');
} else {
    alert('I dont know you!');
}
