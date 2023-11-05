'use strict' 

// Прапори та дескриптори властивостей

/* 
Властивості об’єкта, крім value, мають три спеціальні атрибути (так звані “прапори”):

- writable – якщо true, значення можна змінювати, інакше воно доступне лише для читання.
- enumerable – якщо true, то властивість враховується в циклах, в іншому випадку цикли його ігнорують.
- configurable – якщо true, властивість можна видалити, а ці атрибути можна змінювати, інакше цього робити не можна.

Syntax:
let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);

Щоб змінити прапори, ми можемо використовувати:
Object.defineProperty(obj, propertyName, descriptor(Об’єкт дескриптора властивості, який буде застосовано.))

Object.defineProperties(obj, descriptors), дозволяє визначити багато властивостей відразу
Object.defineProperties(obj, {
  prop1: descriptor1,
  prop2: descriptor2
  // ...
});

Щоб отримати всі дескриптори одночасно, ми можемо використовувати метод Object.getOwnPropertyDescriptors(obj).
*/

let user = {
    name: "suslinhio",
    toString() {
        return this.name;
    },
};

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

Object.defineProperty(user, 'name', {writable: false}); //cant be chaged now
// user.name = 'tapazz.naves'; //error

Object.defineProperty(user, 'toString', {enumerable: false}); //will be ignored by iterator and loops now
for (let key in user) {
    console.log(key); //name, toString is ignored
}


//Правильне клонування з прапорами(прпорне клонування)
//let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));

/* Існують також способи, які обмежують доступ до всього об’єкта:

Object.preventExtensions(obj)
Забороняє додавання нових властивостей до об’єкта.
Object.seal(obj)
Забороняє додавання/видалення властивостей. Встановлює configurable: false для всіх властивостей, що існують.
Object.freeze(obj)
Забороняє додавання/видалення/зміну властивостей. Встановлює configurable: false, writable: false для всіх властивостей, що існують.
А також для них є тести:

Object.isExtensible(obj)
Повертає false, якщо додавання властивостей заборонено, інакше true.
Object.isSealed(obj)
Повертає true, якщо додавання/видалення властивостей заборонено, і всі властивості, що існують, мають configurable: false.
Object.isFrozen(obj)
Повертає true, якщо додавання/видалення/зміна властивостей заборонена і всі поточні властивості є configurable: false, writable: false.
Ці методи рідко використовуються на практиці. */