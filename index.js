'use strict' 

// Конструкція "switch"

/* 
Syntax:

switch(x) {
  case 'value1':  // if (x === 'value1')
    ...
    break;

  case 'value2':  // if (x === 'value2')
    ...
    break;

  case 'valuen':  // if (x === 'valuen')
    ...
    break;

  default:
    ...
}

!!!!!! Якщо строго рівне значення знайдено, то switch починає виконання коду із відповідного case до найближчого break або до кінця всієї конструкції switch. Тому важливо використовувати брейки!
*/

/* let a = 2 + 3;

switch (a) {
    case 1: {
        console.log('One');
        break;
    }
    case 2: {
        console.log('Two');
        break;
    }
    case 3: {
        console.log('Three');
        break;
    }
    default: console.log('Fuck you!');
} */

/* let a = 2 + 3;

switch (a) {
    case 1:  // may be grouped. 
    case 2:  // Можливість групування блоків case – це побічний ефект того, як switch/case працює без break. 
    case 3:  // Необхідно наголосити, що перевірка відповідності є завжди строгою.
    case 4:
        {
        console.log('Too little');
        break;
    }
    case 5: {
        console.log('Excellent');
        break;
    }
    case 6: {
        console.log('Too much');
        break;
    }
    default: console.log('Fuck you!');
} */

// TASKS

// 1. Перепишіть конструкцію "switch" в аналогічну з використанням "if"
/* 
switch (browser) {
    case 'Edge':
      alert( "You've got the Edge!" );
      break;
  
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
      alert( 'Ми підтримуємо і ці браузери' );
      break;
  
    default:
      alert( 'Маємо надію, що ця сторінка виглядає добре!' );
  } */

  /* let browser = prompt('Insert your browser!');

  if (browser === 'Edge') {
    alert('I Hate Edge!');
  } else if (browser === 'Chrome' || 
             browser === 'Firefox' || 
             browser === 'Safari' || 
             browser === 'Opera') {
                alert('These browsers are good!');
            } else {
                alert('What the fuck do you use?');
            } */

// Task 2 Перепишіть умови "if" в конструкцію "switch"

let a = Number(prompt('a?', ''));

switch (a) {
    case 0:
        alert('0');
        break;
    case 1:
        alert('1');
        break;
    case 2:
    case 3:
        alert('2, 3');
        break; // краще вказувати, щоб зробити надійнішим за умови змін
}