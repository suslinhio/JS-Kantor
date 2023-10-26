'use strict' 

// Рекурсія та стек

//Рекурсія - це коли функція викликає саму себе

//Iterative aproach to pow

function pow(num1, num2) {
  let res = 1;
  for (let i = 0; i < num2; i++) {
    res *= num1;
  }
  return res;
}

//Recursive aproach

// function recursivePow(num1, num2) {
//   if (num2 === 1) {
//     return num1;
//   } else {
//     return num1 * recursivePow(num1, num2 - 1);
//   }
// }
//Shorten it using ternarnik

function recursivePow(num1, num2) {
  return (num2 === 1) ? num1 : (num1 * recursivePow(num1, num2 -1));
}

/* Рекурсивний обхід */

let company = {
  sales: [{
    name: 'Іван',
    salary: 1000
  }, {
    name: 'Аліса',
    salary: 1600
  }],

  development: {
    sites: [{
      name: 'Петро',
      salary: 2000
    }, {
      name: 'Олександр',
      salary: 1800
    }],

    internals: [{
      name: 'Евген',
      salary: 1300
    }]
  }
};

function recursiveSearch(department) {
  if (Array.isArray(department)) {
    return department.reduce((accum, worker) => accum + worker.salary, 0);
  } else {
    let sum = 0;
    for (let subDepartment of Object.values(department)) {
      sum += recursiveSearch(subDepartment);
    }
    return sum;
  }
}

//Linked list

let myLinkedList = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
}

// Список можна легко розділити на декілька частин, а пізніше з’єднати знову:

const secondList = myLinkedList.next.next;
myLinkedList.next.next = null;

//Join

myLinkedList.next.next = secondList;

//Add new item in the beggining
myLinkedList = {value: 'newItem', next: myLinkedList};

//Delete items from inside

myLinkedList.next.next = myLinkedList.next.next.next; // другий елемент буде видалено, оскільки на нього ніхто не посилається

//TAsks

//1
//Напишіть функцію sumTo(n), що обчислює суму чисел 1 + 2 + ... + n.
//cicle
function sumToNumCicle(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}

function sumToNumRec(num) {
  if (num === 1) {
    return 1;
  } else {
    return num + sumToNumRec(num - 1);
  }
}

function sumToNumProg(num) {
  return (1 + num) / 2 * num;
}

//2
//Завдання полягає в тому, щоб написати функцію factorial(n), яка обчислює n! за допомогою рекурсивних викликів.

function fuctorial(num) {
  return (num === 1) ? 1 : (num * fuctorial(num - 1));
}

//3
//Напишіть функцію fib(n), яка повертає n-th число Фібоначчі.

function fib(n) {
  if (n === 1 || n === 2) {
    return 1;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
} //VERY slow

function fastFib(n) {
  let a = 1;
  let b = 1;
  
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

//4
//Напишіть функцію printList(list), що виводить список елементів один за одним.

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function prinList(list) {
  let tempo = list;

  while(tempo) {
    console.log(list.value);
    list = list.next;
  }
}

function printListRec(list) {
  console.log(list.value);
  
  if (list.next) {
    printListRec(list.next);
  }
}

//5
//Виведіть одинозв’язаний список з попереднього завдання Вивести одинозв’язаний список у зворотному порядку.

function printReverseRec(list) {
  if (list.next) {
    printReverseRec(list.next);
  }

  console.log(list.value);
}

function printReverseLoop(list) {
  let tempo = list;
  const arr = [];

  while(tempo) {
    arr.push(tempo.value);
    tempo = tempo.next;
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}