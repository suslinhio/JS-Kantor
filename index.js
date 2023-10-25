'use strict' 

// Дата і час

/* 
Date - вбудований обєкт.

*/

const currentDate = new Date(); //створює обєкт Дейт для поточної дати і часу в момент створення
console.log(currentDate);

//new Date(milliseconds) - створює обєкт для дати і часу, що минула за вказану кільксть мілісекунд від 1 січня 1970 року
const someDate = new Date(1111111111111);
console.log(someDate); //Fri Mar 18 2005 03:58:31 GMT+0200 (Eastern European Standard Time)

//Ціле число, яке являє собою кількість мілісекунд, що пройшли з початку 1970 року, називається міткою часу (timestamp). Можна зробити зворотню дію, obj.getTime() - повертає з обєкта дати таймстемп

//Якщо є єдиний аргумент, і це рядок, то він автоматично аналізується. Алгоритм той же, що використовує Date.parse, ми розглянемо це пізніше.

//new Date(year, month, date, hours, minutes, seconds, ms) - Створює дату з заданими компонентами у місцевому часовому поясі. Тільки перші два аргументи обов’язкові.

const myBirth = new Date(2000, 8, 10);
console.log(myBirth);

/* 
Методи доступу до елементів дати

obj.getFullYear(); - вовертає рік

obj.getMonth() - поертає місяць

obj.getDate() - повертає день місяця

getHours(), getMinutes(), getSeconds(), getMilliseconds()
*/

console.log(myBirth.getFullYear());
console.log(myBirth.getMonth());
console.log(myBirth.getDate());
console.log(myBirth.getDay());
console.log(myBirth.getHours());

/* getDay()
Отримати день тижня, від 0 (неділя) до 6 (субота). Перший день завжди неділя, в деяких країнах це не так, але ми не можемо змінити поведінку методу.
 */

/* 
Ці методи встановлюють елементи дати для обєкта Date

setFullYear(year, [month], [date])
setMonth(month, [date])
setDate(date)
setHours(hour, [min], [sec], [ms])
setMinutes(min, [sec], [ms])
setSeconds(sec, [ms])
setMilliseconds(ms)
setTime(milliseconds) (встановлює всю дату в мілісекундах з 01.01.1970 UTC) */

//Автокорекція – це дуже зручна особливість об’єктів Date. Ми можемо встановити данні за межами діапазону, і вони будуть автоматично налаштувати себе.

//Існує спеціальний метод Date.now(), що повертає поточний timestamp.

let dateNow = Date.now(); //не створює обєкт, просто повертає таймстемп
console.log(dateNow);

/* Benchmarking */

function diffSubtract(d1, d2) {
  return d2 - d1;
}

function diffGetTime(d1, d2) {
  return d2.getTime() - d1.getTime();
}

function bench(f) {
  let d1 = new Date(0);
  let d2 = new Date();

  let start = Date.now();

  for (let i = 0; i < 100000; i++) {
    f(d1, d2);
  }

  return Date.now() - start;
}

let time1 = 0;
let time2 = 0;

for (let i = 0; i < 10; i++) {
  time1 += bench(diffSubtract);
  time2 += bench(diffGetTime);
}

bench(diffSubtract); //запускаємо до виконання циклу, що виконати так зване нагрівання, рушій посне оптимізовувати виконання цих функцій лише, якщо будуть викликані кілька разів
bench(diffGetTime);


console.log(time1);
console.log(time2);

//Date.parse(str) - може читати дату з рядка, повертає таймстемп

//Tasks

//1
/* Створити об’єкт Date на дату: 20 лютого 2012, 3:12 ранку. Часовий пояс є місцевим. */

const taskDate = new Date(2012, 1, 20, 3, 12);
console.log(taskDate);

//2
/* Напишіть функцію getWeekDay(date), щоб показати день тижня у короткому форматі: ‘ПН’, ‘ВТ’, ‘СР’, ‘ЧТ’, ‘ПТ’, ‘СБ’, ‘НД’. */

const today = new Date();

function getWeekDay(date) {
  let res = date.getDay();

  switch (res) {
    case 0:
      return 'Sun';
      break;
    case 1:
      return 'Mon';
      break;
    case 2: 
      return 'Tue';
      break;
    case 3: 
      return 'Wed';
      break;
    case 4: 
      return 'Thur';
      break; 
    case 5: 
      return 'Fr';
      break;
    case 6:
      return 'Sat';
      break;
  }
}

function getWeekDayArray(date) {
  const arr = ['Sun', 'Mon', 'Tue','Wed', 'Thur', 'Fri', 'Sat'];

  return arr[date.getDay()];
}
console.log(getWeekDay(today));
console.log(getWeekDayArray(today));

//3
/* Європейські країни мають дні тижня, що починаються з понеділка (№ 1), потім вівторок (№ 2) та до неділі (№ 7). Напишіть функцію getLocalDay(date), що повертає “європейський” день тижня для date. */

function getLocalDay(date) {
  let day = date.getDay();

  if (day === 0) {
    day = 7;
  }

  return day;
}

let date = new Date(2012, 0, 3);  // 3 січня 2012
console.log( getLocalDay(date) );  

//4
/* Створіть функцію getDateAgo(date, days), щоб повернути день місяця, який був days днів після date.

Наприклад, якщо сьогодні – 20-й, то getDateAgo(new Date(), 1) має бути 19-го, а getDateAgo(new Date(), 2) має бути 18-го.

Має працювати надійно для days = 365 або більше: */

function getDateAgo(date, days) {
  let dateCopy = new Date(date)
  dateCopy.setDate(dateCopy.getDate() - days)
  return dateCopy.getDate();
}
console.log(getDateAgo(today, 364));

//5
/* Напишіть функцію getLastDayOfMonth(year, month), що повертає останній день місяця. Іноді це 30-е, 31-ше або навіть 28/29-е для лютого.

Параметри:

year – чотиризначний рік, наприклад 2012.
month – місяць, від 0 to 11.
Наприклад, getLastDayOfMonth(2012, 1) = 29 (високосний рік, лютий) */

function getLastDayOfMonth(year, month) {
  const date = new Date(year, month +1, 0);
  return date.getDate()
}

console.log(getLastDayOfMonth(2012, 1));

//6
/* Напишіть функцію getSecondsToday(), що повертає кількість секунд з початку сьогоднішнього дня.

Наприклад, якщо зараз 10:00 am, і не було зміни літнього часу, то:
getSecondsToday() == 36000 // (3600 * 10)
Функція повинна працювати в будь-який день. Тобто, вона не повинна мати жорстко-кодоване значення “сьогодні”.
*/

function getSecondsToday() {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  return Math.round((now - today) / 1000);
}
console.log(getSecondsToday());

//7
/* Створіть функцію getSecondsToTomorrow(), що повертає кількість секунд до завтра.

Наприклад, якщо зараз є 23:00, то:

getSecondsToTomorrow() == 3600
P.S. Функція повинна працювати в будь-який день, “сьогодні” не є жорстко закодованим. */

function getSecondsToTomorrow() {
  const now = new Date();

  const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

  return Math.round((tomorrow - now) / 1000);
}

console.log(getSecondsToTomorrow());

//8
/* Напишіть функцію formatDate(date), яка повинна форматувати date наступним чином:

Якщо з date пройшла менше, ніж 1 секунда, то "прямо зараз".
Інакше, якщо з date пройшло менше 1 хвилини, то "n сек. назад".
Інакше, якщо менше години, то "m хв. назад".
В іншому випадку повна дата у форматі "DD.MM.YY HH:mm". Тобто: "день.місяць.рік години:хвилини", все в 2-значному форматі, наприклад, 31.12.16 10:00. */

function formatDate(date) {
  const now = new Date();
  let diff = Math.round(now - date) / 1000;
  if (diff < 1) {
    return 'exectly now';
  } else if (diff < 60) {
    return `${diff} seconds ago`;
  } else if (diff < 3600) {
    return `${diff / 60} minutes ago`;
  } else {
    return `${String(date.getFullYear()).slice(-2)}.${date.getMonth() + 1}:${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
  }
}

console.log( formatDate(new Date(new Date - 1)) ); // "прямо зараз"

console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 хв. назад"

// вчорашня дата, як 31.12.16 20:00
console.log( formatDate(new Date(new Date - 86400 * 1000)) );