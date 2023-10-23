'use strict' 

// Map та Set

/* Map – це колекція ключ/значення, як і Object. Але основна відмінність полягає в тому, що Map дозволяє мати ключі будь-якого типу.

Методи та властивості:

new Map() – створює колекцію.
map.set(key, value) – зберігає значення value за ключем key.
map.get(key) – повертає значення за ключем; повертає undefined якщо key немає в колекції.
map.has(key) – повертає true якщо key існує, інакше false.
map.delete(key) – видаляє елемент (пару ключ/значення) за ключем.
map.clear() – видаляє всі елементи колекції.
map.size – повертає поточну кількість елементів. */

const myMap = new Map();
myMap.set('me', 'suslinhio').set('age', 23).set(1, 'ImNumberOne').set(true, 'isCool'); //можна використати чейнінг
myMap.get(true);
myMap.has('age');
myMap.delete(1);
myMap.size;
// myMap.clear(); //Map(0) {size: 0}

//Map також може використовувати об’єкти як ключі.

const me = {
    name: 'Dims',
    surname: 'Suslyk',
}

myMap.set(me, 'profile');

/* Для перебору колекції Map є 3 метода:

map.keys() – повертає об’єкт-ітератор для ключів,
map.values() – повертає об’єкт-ітератор для значень,
map.entries() – повертає об’єкт-ітератор зі значеннями виду [ключ, значення], цей варіант типово використовується з for..of. 

На відміну від звичайних об’єктів Object, в Map перебір відбувається в тому ж порядку, в якому відбувалося додавання елементів.

Крім цього, Map має вбудований метод forEach, схожий з вбудованим методом масивів Array*/

for (let key of myMap.keys()) { //поверне ключі
    console.log(key);
}

for (let key of myMap.values()) { //поверне значення
    console.log(key);
}

for (let key of myMap.entries()) { //поверне пари ключ-значення
    console.log(key);
}

//Робимо Map з обєкта
const testObj = {
    name: 'Myhailo',
    surname: 'Mudryk',
    goals: 2,
}
const newMapFromObj = new Map(Object.entries(testObj));
console.log(newMapFromObj);

// робимо обєкт з масиву пар

let prices = Object.fromEntries([
    ['банан', 100],
    ['апельсин', 200],
    ['яблуко', 40]
]);

console.log(prices);

// А тепер з мепу

const objFromMyMap = Object.fromEntries(myMap);// але обєкти, обулиключами перетворяться на Oblect object, окскільки будуть конвертовані до стрінгів
console.log(objFromMyMap);




/* 
Set

Об’єкт Set – це особливий тип колекції: “множина” значень (без ключів), де кожне значення може з’являтися тільки раз. 

new Set([iterable]) – створює Set, якщо аргументом виступає об’єкт-ітератор, тоді значення копіюються в Set.
set.add(value) – додає нове значення до Set, повертає Set.
set.delete(value) – видаляє значення з Set, повертає true, якщо value наявне в множині значень на момент виклику методу, інакше false.
set.has(value) – повертає true, якщо value присутнє в множині Set, інакше false.
set.clear() – видаляє всі значення множини Set.
set.size – повертає кількість елементів в множині.

Родзинкою Set є виклики set.add(value), що повторюються з однаковими значеннями value. Повторні виклики цього методу не змінюють Set. Це причина того, що кожне значення з’являється тільки один раз.
*/

let mySet = new Set();

let ivan = { name: "Іван" };
let petro = { name: "Петро" };
let maria = { name: "Марія" };

mySet.add(ivan).add(petro).add(maria).add(ivan).add(maria); // елементи будуть додані лише раз

//Перебір об’єкта Set

//1 for of

for (let user of mySet) {
    console.log(user.name);
}

//2 forEach

mySet.forEach((user, userAgain, mySet )=> console.log(user.name));

/* Set має ті ж вбудовані методи, що і Map:

set.keys() – повертає об’єкт-ітератор для значень,
set.values() – те ж саме, що set.keys(), для сумісності з Map,
set.entries() – повертає об’єкт-ітератор для пар виду [значення, значення], присутній для сумісності з Map. */

//Tasks

//1
//Нехай arr – це масив.
//Потрібно створити функцію unique(arr), яка повинна повертати масив унікальних елементів arr.

const values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

function uniqueArr(arr) {
    return Array.from(new Set(arr));
}

//2 
// Напишіть функцію aclean(arr), яка повертає масив без анаграм.

const anagrams = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function acleanArr(arr) {
    const map = new Map;

    for (let key of arr) {
        let sorted = key.toLowerCase().split('').sort().join('');
        map.set(sorted, key);
    }

    return Array.from(map.values());
}
