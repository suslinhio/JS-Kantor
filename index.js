'use strict' 

// Copying objects and links

/* 
Змінна зберігає не сам об’єкт, а його “адресу в пам’яті” – іншими словами “посилання” на нього.
Коли копіюється змінна об’єкта, копіюється посилання, але сам об’єкт не дублюється.
*/

//Важливим побічним ефектом зберігання об’єктів як посилань є те, що об’єкт, оголошений як const, може бути змінений.

/* const user = {
    name: 'Dima',
}

user.isAdmin = true;
console.log(user); //updated */

//Клонування та злиття об’єктів, Object.assign

//Clone by hends

/* let user = {
    name: 'Dima',
    age: 23,
}

let userClone = {};

for (let key in user){
    userClone[key] = user[key];
}

console.log(user);
console.log(userClone); */

//Ми також можемо скористатися методом Object.assign.
// Object.assign(dest,..sources);

//Перший аргумент dest є цільовим об’єктом.
//Подальші аргументи – це список вихідних об’єктів.
//Якщо скопійована назва властивості вже існує, вона буде перезаписана

/* let user = {
    name: 'Dima',
    age: 23,
}

let permission1 = {canView: true};
let permission2 = {canEdit: true};
let nick = {name: 'Ihor'};

Object.assign(user, permission1, permission2, nick);

console.log(user); */

//Ми також можемо використовувати Object.assign щоб виконати просте клонування об’єкта;

/* let anotherUser = Object.assign({}, user);
console.log(anotherUser); */

//Існують також інші методи клонування об’єкта


/* “Глибоке клонування(deep cloning)” або “структурне клонування(structured cloning)” 
Використовується для клонування вкладених обєктів

structuredClone(oblect) - клонує обєкт з усіма вкладеними обєктами
!!!!!! Не підтримує клонування властивостей з функцією
*/

let user = {
    name: 'Dima',
    age: 23,
    likes: {
        name: 'Tasia',
        age: 21,
    },
}

let userClone = structuredClone(user);

console.log(user);
console.log(userClone);