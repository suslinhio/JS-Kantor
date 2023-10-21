'use strict' 

// Array Methods

/* Додавання/видалення елементів 

array.push(items) - add last elem
array.pop() - delete last elem
array.shift() - delete first elem
array.unshift(items) - add first elem
*/

const trainingArray = [1, 2, 4, 20, 44, 4, 34, 23, 0, 90, 56, 5, 11];

// array.splice(start, numberOfElemsToDelete, addElem1, addElem2, ...) returns deleted elems

console.log(trainingArray.splice(3, 2, 100, 101, 'hello')); //[1, 2, 4, 100, 101, 'hello', 4, 34, 23, 0, 90, 56, 5, 11]

// array.slice(start, end) - не мутує початковий масив

console.log(trainingArray.slice(5, 10));

// array.concat(array2) - повертає новий масив, зклеєний з двох

const arrayToConcat = ['I', 'am', 'genius'];

const concatedArray = trainingArray.concat(arrayToConcat);
console.log(concatedArray);

// array.forEach(func) - виконує функцію для кожного елемента
// Результат функції (якщо вона взагалі щось повертає) відкидається і ігнорується.

/* trainingArray.forEach(alert); */

/* 
Пошук в масиві

array.indexOf(elem, index) - шукає item, починаючи з індексу from, і повертає індекс, на якому був знайдений шуканий елемент, в іншому випадку -1.

array.lastIndexOf(elem, index) - такий самий, як indexOf, але шукає справа наліво.

array.includes(elem, index) - шукає item, починаючи з індексу from, і повертає true, якщо пошук успішний.

array.find(function(item, index, array) { - шукає саме перший елемент

})

array.findIndex(function(item, index, array) { - теж саме але повертає індекс

})

array.findLastIndex(function(item, index, array) { - теж саме але шукає з кінця

})

arra.filte(function(item, index, array) { - повертає масив з відфільтрованих елементів

})
*/

let foundItem = trainingArray.find(item => item === 'hello');
console.log(foundItem);

let foundIndex = trainingArray.findIndex(item => item === 'hello');
console.log(foundIndex);

const users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Bob"},
    {id: 4, name: "Mary"},
    {id: 5, name: "Pete"},
    {id: 6, name: "Bob"},
    {id: 7, name: "Skyler"},
  ];

const filteredUsers = users.filter(item => item.name === 'Bob');
console.log(filteredUsers);

/* 
Перетворення масиву

array.map(function(item, index, array) {

}) - Він викликає функцію для кожного елемента масиву і повертає масив результатів виконання цієї функції. Не мутує початковий масив!

array.sort(fn) - сортує масив, мутує початковий, за замовчуванням елементи порівнюються як рядки!!!
Тому треба використовувати функцію КОМПАРАТОР

array.reverse() - мутує початковий масив у зворотній

split(delim) - повертає масив з рядка, виокремлюючи елементи між вказаним delim

array.join(glue) - навпаки склеює масив, вставляючи glue між елементами

array.reduce(fn(accumulator, item, index, array)) - обчислює елементи масива
*/

const names = ["Bilbo", "Gandalf", "Nazgul"];
const namesLength = names.map(item => item.length);
console.log(namesLength);

/* function comparator(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
    if (a === b) return 0;
} */

function comparator(a, b) {
    return a - b;
}

trainingArray.sort(comparator);

// trainingArray.sort((a, b) => a - b)
console.log(trainingArray);

let contactNames = 'Ihor, Dima, Artem, Yasya, Zhenya, Pupyrka';

const contactsArray = contactNames.split(', ');
console.log(contactsArray);

let sumOfTrainingArray = trainingArray.reduce((sum, item) => sum + item);
console.log(sumOfTrainingArray);

/* 
Array.isArray(value) - перевіряє чи є обєкт масивом, повертає булеве значення
*/

console.log(Array.isArray(trainingArray)); //true

// Tasks

//1 
/* апишіть функцію camelize(str), яка перетворює такі рядки “my-short-string” в “myShortString”.

Тобто дефіси видаляються, а всі слова після них починаються з великої літери. */

function camelize(str) {
    return str.split('-').map( (item, index) => (index === 0) ? item : item[0].toUpperCase() + item.slice(1)).join('');
}

//2
/* Напишіть функцію filterRange(arr, a, b), яка приймає масив arr, шукає в ньому елементи більші-рівні a та менші-рівні b і віддає масив цих елементів.

Функція повинна повертати новий масив і не змінювати вихідний. */

function filterRange(array, a, b) {
    return array.filter(item => (item >= a && item <= b));
}

const arr = [5, 3, 8, 1];

//3

/* Напишіть функцію filterRangeInPlace(arr, a, b), яка приймає масив arr і видаляє з нього всі значення крім тих, які знаходяться між a і b. Тобто, перевірка має вигляд a ≤ arr[i] ≤ b.

Функція повинна змінювати поточний масив і нічого не повертати. */

function filterRangeInPlace(array, a, b) {
    for (let i = 0; i < array.length; i++) {
        let value = array[i];

        if (value < a || value > b) {
            array.splice(i, 1);
            i--;
        }
    }
}

//4
//Сортувати за спаданням array
let arr1 = [5, 2, 1, -10, 8];

arr1.sort((a, b) => b - a);

console.log(arr1);

//5
// У нас є масив рядків arr. Потрібно отримати відсортовану копію та залишити arr незміненим.
// Створіть функцію copySorted(arr), яка буде повертати таку копію.

function copySorted(arr) {
    return arr.slice().sort();
}

//6

function Calculator() {
    this.methods = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
    }
    this.calculate = function(string) {
        const array = string.split(' ');
        let a = Number(array[0]);
        let b = Number(array[2]);
        let operator = array[1];

        if (!this.methods[operator] || isNaN(a) || isNaN(b)) {
            return console.log('Misatke!');
        }

        return this.methods[operator](a, b);
    }
    this.addMethod = function(name, func) {
        this.methods[name] = func;
    }
}

const newCalc = new Calculator();

//7
//У вас є масив об’єктів user, і в кожному з них є user.name. Напишіть код, який перетворює їх в масив імен.

/* const ivan = { name: "Іван", age: 25 };
const petro = { name: "Петро", age: 30 };
const mariya = { name: "Марія", age: 28 };

const usersArr = [ ivan, petro, mariya ]; */

/* const usersNamesArr = usersArr.map(function(currentUser) {
    return currentUser.name;
}) */
//arrow

// const usersNamesArr = usersArr.map(currentUser => currentUser.name);

//8
//У вас є масив обʼєктів user, і у кожного з обʼєктів є name, surname та id.
// Напишіть код, який створить ще один масив обʼєктів з параметрами id й fullName, де fullName – складається з name та surname.

/* const ivan = { name: "Іван", surname: "Іванко", id: 1 };
const petro = { name: "Петро", surname: "Петренко", id: 2 };
const mariya = { name: "Марія", surname: "Мрійко", id: 3 };

const usersArr = [ ivan, petro, mariya ];

const usersIdAndFullnamesArr = usersArr.map(currentUser => {
    return {
        id: currentUser.id,
        fullname: `${currentUser.name} ${currentUser.surname}`
    };
}); */

//9
// Напишіть функцію sortByAge(users), яка приймає масив обʼєктів з властивістю age і сортує їх по ньому.

let ivan = { name: "Іван", age: 25 };
let petro = { name: "Петро", age: 30 };
let mariya = { name: "Марія", age: 28 };

let array = [ petro, ivan, mariya ];

function sortByAge(users) {
    return users.sort((u1, u2) => u1.age - u2.age);
}

//10
// Напишіть функцію shuffle(array), яка перемішує (випадковим чином переставляє) елементи масиву.
// Багаторазові прогони через shuffle можуть привести до різних послідовностей елементів. 

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
} 

const numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//11
//Напишіть функцію getAverageAge(users), яка приймає масив об’єктів з властивістю age та повертає середній вік.
// Формула обчислення середнього арифметичного значення: (age1 + age2 + ... + ageN) / N.

const john = { name: "John", age: 25 };
const pete = { name: "Pete", age: 30 };
const mary = { name: "Mary", age: 29 };

const arrayOfAmericans = [ john, pete, mary ];

function getAverageAge(users) {
    return users.reduce((accum, currentUser) => accum + currentUser.age, 0) / users.length;
}

//12
// Нехай arr – масив рядків.
// Напишіть функцію unique(arr), яка повертає масив, що містить тільки унікальні елементи arr.

const repeatingArr = ["Привіт", "Світ", "Привіт", "Світ",
  "Привіт", "Привіт", "Світ", "Світ", ":-O"
];

function uniqueArr(arr) { //May be refactored with map and set
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        if (!res.includes(arr[i])) {
            res.push(arr[i]);
        }
    }
    return res;
}

//13
/* Припустимо, ми отримали масив користувачів у вигляді {id:..., name:..., age:...}.

Створіть функцію groupById(arr), яка створює з масиву об’єкт із ключом id та елементами масиву як значеннями. */

let arrOfUsers = [
    {id: 'іван', name: "Іван Іванко", age: 20},
    {id: 'ганна', name: "Ганна Іванко", age: 24},
    {id: 'петро', name: "Петро Петренко", age: 31},
  ];
  
/* function groupById(arr) { //My solution
    const groupedObj = {};
    
    for (let i = 0; i < arr.length; i++) {
        groupedObj[arrOfUsers[i].id] = arrOfUsers[i];
    }

    return groupedObj;
} */

//solution with reduce

function groupById(arr) {
    return arr.reduce((obj, currentUser) => {
        obj[currentUser.id] = currentUser;
        return obj;
    }, {});
}