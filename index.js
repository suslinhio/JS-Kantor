'use strict' 

// WeakMap та WeakSet

/* якщо ми використовуємо об’єкт як ключ у звичайному Map, то в той час, коли Map існує, цей об’єкт також існує. Він займає пам’ять і не може бути видалений збирачем сміття. */

/* let john = { name: "Іван" };

let map = new Map();
map.set(john, "...");

john = null;

map.keys(); //існує */

/* WeakMap – принципово відрізняється в цьому аспекті. Він не перешкоджає збиранню сміття серед об’єктів, що є ключами.

- у weakMap ключами повинні бути ТІЛЬКИ обєкти
- у weakMap відсутні властивості keys(), values(), entries()

WeakMap має лише такі методи:

weakMap.set(key, value)
weakMap.get(key)
weakMap.delete(key)
weakMap.has(key)

Основна область застосування для WeakMap – це зберігання додаткових даних.
Іншим загальним прикладом є кешування. В обох випадках, коли обєкт видалиться то кеш і додаткові даня теж видаляться, а якби  ми використовували звичайний Map, то вони б продовжували зберігатись та займати память.
*/

let john = { name: "Іван" };

let weakMap = new WeakMap();
weakMap.set(john, "...");

john = null;

console.log(weakMap); //deleted


/* 
WeakSet

WeakSet поводитися аналогічно:

Це аналог Set, але ми можемо додати лише об’єкти до WeakSet (не примітиви).
Об’єкт існує в наборі, коли він доступний з де-небудь ще.
Так само як Set, він підтримує add, has і delete, але не підтримує size, keys() та ітерацію.
*/

//Tasks

//1 

const messages = [
    {text: "Привіт", from: "Іван"},
    {text: "Як справи?", from: "Іван"},
    {text: "До зустрічі", from: "Аліса"}
];

const readMess = new WeakSet();
for (let i = 0; i < messages.length; i++) {
    readMess.add(messages[i]);
}

//2

const dateOfRead = new WeakMap();
dateOfRead.set(messages[0], new Date(2023, 23, 10));
