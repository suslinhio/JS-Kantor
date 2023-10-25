'use strict' 

// Методи JSON, toJSON

/* 
JSON (JavaScript Object Notation) – це загальний формат, який представляє значення та об’єкти.
*/

//JSON.stringify - перетворює обєкт в JSON-рядок

const user = {
  name: 'Dima',
  age: 23,
  isAdmin: true,
  courses: ['pm', 'html', 'css', 'js'],
  spouce: null,
}

let jsonString = JSON.stringify(user); //Отриманий json рядок називається JSON-кодованим або серіалізованим об’єктом. Все обертається в подвійні лапки.
console.log(typeof jsonString);// string
console.log(jsonString); //{"name":"Dima","age":23,"isAdmin":true,"courses":["pm","html","css","js"],"spouce":null}

/* 
Ігнорує:

Функціональні властивості (методи).
Символьні ключі та значення.
Властивості, що мають undefined.
*/
const user2 = {
  sayHi() { // ігнорується
    alert("Привіт");
  },
  [Symbol("id")]: 123, // ігнорується
  something: undefined // ігнорується
};

let jsonCheck = JSON.stringify(user2);
console.log(jsonCheck); //empty string

//вкладені об’єкти підтримуються та перетворюються автоматично.
let doubleObj = {
  prop1: 'name',
  prop2: [1, 2, 3],
  prop3: {
    prop4: 'someProp',
    prop5: true,
  },
}

let objJson = JSON.stringify(doubleObj);
console.log(objJson);

/* 
Повний синтаксис json

JSON.stringify(value[, replacer, space])

value - Значення для кодування.
replacer - Масив властивостей для кодування або функція відображення function(key, value). Таким чином можна перечислити всі властивості крім циклічних посилань і уникнути помилки, яле вручну це довго, тому використовуємо func
space - Кількість пробілів для форматування відображення вкладених обєктів
*/

// toJason - метод, який можна прописати кожному обєкту (у дейт є вбудований власний), при вкилику stringify за наявності спочатку викликається toJason

//JSON.parse - перетворює JSON-рядок в обєкт
//JSON.parse(str, [reviver]);
//reviver - Необов’язкова функція, яка буде викликана для кожного (key, value) та може перетворювати значення.

const userFromJson = JSON.parse(jsonString);
console.log(userFromJson);

//Tasks

//1
//Перетворіть user на JSON, після цього зробіть з нього знову об’єкт і запишіть його в іншу змінну.

let user3 = {
  name: "Іван Іванов",
  age: 35
};

const user3FromJson = JSON.parse(JSON.stringify(user3));

//2
let room = {
  number: 23
};

let meetup = {
  title: "Конференція",
  occupiedBy: [{name: "Іван"}, {name: "Аліса"}],
  place: room
};

room.occupiedBy = meetup;
meetup.self = meetup;

let taskResolve = JSON.stringify(meetup, function replacer(key, value) {
  return (kye !== '' && value === meetup) ? undefined : value;
})