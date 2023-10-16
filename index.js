'use strict' 

// Опціональний ланцюжок '?.'

let user = {}; // no adress property

//alert(user.adress.street); //Error

// possible solution
alert(user.adress ? user.adress.street : undefined); // or if, but its against DRY
// Якщо вкладених властивостей ще більше, тобто вони лежать глибше, то код стає виглядати зовсім страшно

// && may be used more effectively

alert(user.adress && user.adress.street && user.adress.street.name); // but it still duplicates...

// Optional chaining ?. is the answer
// Якщо значення є undefined або null - припиняє обчислення та повертає undefined

/* Іншими словами, value?.prop:

працює як value.prop, якщо value існує,
інакше (коли value є undefined/null) воно повертає undefined. 

- може використовуватися і для видалення властивостей обєкта через delete
- для звернення до властивості через []
- для виклику методу чи функції, якщо вона існує
- НЕ МОЖЕ використовуватися для присвоєння, викликає синтаксичну помилку
*/

alert(user?.adress?.street);



