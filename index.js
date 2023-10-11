'use strict' 

// Objects

/* 
Syntax:

let user = new Object(); // синтаксис "конструктора об’єктів"

let user = {};  // синтаксис "літералу об’єкта"

Остання властивість у списку може закінчуватися комою, Це називається “кінцевою” або “висячою” комою. Полегшує додавання/видалення/переміщення по властивостях, оскільки всі рядки стають однаковими.

*/

/* let user = {
    name: 'Dima',
    age: 23,
    'likes beer': true,
}

console.log(user.name);

user.isBoss = true; // add key and value
console.log(user.isBoss);

delete user.age; // delete key and value
console.log(user);

console.log(user["likes beer"]); // refer to keys of two words */

//Квадратні дужки також дозволяють звернутися до властивості, ім’я якої може бути результатом виразу. Наприклад, ім’я властивості може зберігатися в змінній:

/* let key = 'likes crisps';
user.key = true;
console.log(user.key); */

/* let key = prompt('What info do you want?', 'name');

alert(user[key]); */

// Ми можемо використовувати квадратні дужки в літеральній нотації для створення ОБЧИСЛЮВАЛЬНОЇ ВЛАСТИВОСТІ.

/* let fruit = prompt('Which fruit to add in my sholling list?', 'BEER!!!');

let bag = {
    [fruit]: 5,
}

console.log(bag[fruit]); */

//У реальному коді ми часто використовуємо наявні змінні як значення для імен властивостей.

/* function makeUser(name, age) {
    return {
        name: name, // may be shortened
        age: age,
    };
} */

/* function makeUser(name, age) {
    return {
        name,
        age,
    };
}

let newUser = makeUser('Ihor', 22);
console.log(newUser); */

//Є невеликий підводний камінь, пов’язаний зі спеціальною властивістю __proto__
//Значення не присвоюється, повертає object Object
// obj.__proto__ = 5; doesnt work

// Перевірка існування властивості, оператор “in"

/* console.log('name' in newUser); //true
console.log('shkuuu' in newUser); //false */

//ПЕРЕБОР ВСІХ ВЛАСТИВОСТЕЙ ОБЄКТА!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

/* 
for .. in loop

Syntax:

for (key in object) {
    loop body for EACH key;
}
*/

/* let user = {
    name: "Іван",
    age: 30,
    isAdmin: true
  };

for (let key in user) { //(let prop in obj) is frequently used
    console.log(key + ': '+ user[key]); 
} */

//Впорядкування властивостей об’єкта !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
/* 
“властивості впорядковані особливим чином”. Властивості з цілочисельними ключами сортуються за зростанням, інші розташовуються в порядку створення.

Термін “цілочисельна властивість” означає рядок, який може бути перетворений в ціле число і назад без змін.

Тобто, рядок "49" – це цілочисельне ім’я властивості, якщо його перетворити на ціле число, а потім назад в рядок, то воно не зміниться. А ось властивості "+49" або "1.2" такими не є.
*/

/* let codes = {
    '49': 'Germany',
    '41': 'Switzerland',
    '44': 'Great Britain',
    '1': 'USA',
} */
// Щоб це працювало, просто зробимо значення ключів нецілочисленними додавши + до кожного, тоді порядок перебору зміниться

/* let codes = {
    '+49': 'Germany',
    '+41': 'Switzerland',
    '+44': 'Great Britain',
    '+1': 'USA',
}

for (let prop in codes) {
    console.log(Number(prop));
} */

//TASKS

/* Напишіть код, виконавши завдання з кожного пункту окремим рядком:

Створіть порожній об’єкт user.
Додайте властивість name зі значенням Іван.
Додайте властивість surname зі значенням Сміт.
Змініть значення name на Петро.
Видаліть властивість name з об’єкта. */

/* let user = {};

user.name = 'Ivan';
user.surname = 'Prylypko';
user.name = 'Petro';
delete user.name; */

/* Напишіть функцію isEmpty(obj), яка повертає true, якщо об’єкт не має властивості, інакше false. */

/* let schedule = {};

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
} */

/* У нас є об’єкт для зберігання заробітної плати нашої команди:
Напишіть код для підсумовування всіх зарплат і збережіть у змінній sum. У наведеному вище прикладі має бути 390.

Якщо об’єкт salaries порожній, то результат має бути 0.
*/

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
};

function getSumOfSalaries (obj) {
    let sum = 0;
    for (let key in obj) {
        sum += obj[key];
    }
    return sum;
};

let nosalaries = {};

/* Створіть функцію multiplyNumeric(obj), яка примножує всі числові властивості об’єкта obj на 2. */

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (Number(obj[key]) === obj[key]) {
            obj[key] *= 2;
        }
    }
};

let menu = {
    width: 200,
    height: 300,
    title: "Моє меню"
  };