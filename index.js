'use strict' 

// Деструктуроване присвоєння

let arr = ['Dima','Suslyk'];

let [firstname, surname] = arr; //Деструктуроване присвоєння: встановлює array[0] v firstname, array[1] d surname

console.log(firstname);
console.log(surname);

let string = 'Ihor Tretyak';
let [igorFirstname, igorSurname] = string.split(' ');

console.log(igorFirstname);
console.log(igorSurname);

let user = ['Artem', 'UnnecessaryInfo', 'Pushkar', 'other', 'otherAgain'];
let [artemFirstname, , artemSurname] = user; //ignore unnecessary

console.log(artemFirstname);
console.log(artemSurname);

/* Насправді, ми можемо використовувати його з будь-якими даними, які перебираються, а не тільки з масивами: 
- стрінгами
- сетами та мепами
 */

//Обмін змінними за допомогою деструктурованого присвоєння - як у бульбашковому алгоритмі

let guest = 'Yasya';
let admin = 'Suslinhio';

[guest, admin] = [admin, guest];

console.log(guest);
console.log(admin);

//Деструктурування об’єктів

const options = {
    title: "Меню",
    width: 100,
    height: 200
};

let {title, width, height} = options;
console.log(title);
console.log(width);
console.log(height);

/* Якщо ми хочемо присвоїти властивість змінній з іншим іменем, наприклад, зробити так, щоб options.width переходив до змінної з назвою w, то ми можемо встановити ім’я змінної за допомогою двокрапки: */

let {title: myNameForTitle, width: shyryna, height: vysota, area: a = 'unknown'} = options; // стандартне значення, для властивостей яких може не бути також робиться
console.log(myNameForTitle);
console.log(shyryna);
console.log(vysota);
console.log(a);

//Якщо у нас є складний об’єкт з багатьма властивостями, ми можемо витягти лише те, що нам потрібно, вказавши лише відповідну назву властивості

//Оператор ...rest  теж парцює

let {title: titleAgain, ...values} = options;
console.log(titleAgain);
console.log(values); //{width: 100, height: 200}

//Можна копіювати у вже існуючі змінні, але перед цим огорнути дужками()
let men, w, h;

({title: men, width: w, height: h} = options);
console.log(men);
console.log(h);
console.log(w);

//Вкладене деструктурування - якщо обєкт або масив містять інший обєкт або масив

let options2D = {
    size: {
      width: 100,
      height: 200
    },
    items: ["Торт", "Пончик"],
    extra: true
  };

let {size: {width: width2, height: height2}, items: [item1, item2], extra: boolean, myAdditional = 100} = options2D;
console.log(width2);
console.log(height2);
console.log(item1);
console.log(item2);
console.log(boolean);
console.log(myAdditional);

// Розумні параметри функції
//Ми можемо передати параметри як об’єкт, і функція негайно деструктурує їх на змінні:
let optionsMenu = {
    title: "My menu",
    items: ["Item1", "Item2"]
  };

function showMenu({title, width = 200, height = 350, items = []}) {
    console.log(title, width, height);
    console.log(items);
}

showMenu(optionsMenu);

//Tasks

//1
/* Напишіть деструктуроване присвоєння, яке зчитує:

властивість name у змінну name.
властивість years у змінну age.
властивість isAdmin у змінну isAdmin (false, якщо така властивість відсутня) */

let user1 = {
    name: "Іван",
    years: 30
  };

let {name: name} = user1;
console.log(name);
let {years: age} = user1;
console.log(age);
let {isAdmin: isAdmin = false} = user1;
console.log(isAdmin);

//2
/* Створіть функцію topSalary(salaries) яка повертає ім’я найбільш високооплачуваної особи.

Якщо об’єкт salaries пустий, функція повинна повернути null.
Якщо є кілька високооплачуваних осіб, поверніть будь-якого з них.
P.S. Використовуйте Object.entries і деструктурування для перебору пар ключ/значення. */

let salaries = {
  "Іван": 100,
  "Петро": 300,
  "Марія": 250
};

function topSalary(obj) {
  let maxSalary = 0;
  let maxSalaryName = null;
    for (let [name, salary] of Object.entries(obj)) {
      if (salary > maxSalary) {
        maxSalary = salary;
        maxSalaryName = name;
      }
    }
    return maxSalaryName;
} 
console.log(topSalary(salaries));