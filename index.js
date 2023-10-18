'use strict' 

// Arrays

let fruits = ['Apple', 'Orange', 'Plum'];

// Щоб звернутися до останнього елементу є два варіанти
// 1
console.log(fruits[fruits.length - 1]);
// 2
console.log(fruits.at(-1));

/* 
Stack - LIFO (з англ. Last-In-First-Out, “останій прийшов – перший пішов”)
Queu - FIFO (з англ. First-In-First-Out, “перший прийшов – перший пішов”)
Масиви у JS -  двобічна черга(елементи можна додавати і вадаляти як на початку, так і вкінці).
*/

// pop() - Видаляє останній елемент масиву та повертає його

console.log(fruits.pop()); // 'Plum'
console.log(fruits); // ['Apple', 'Orange']

// push(elem) - Додає елементи в кінець масиву, повертає його нову довжину
console.log(fruits.push('Cherry')); // 3
console.log(fruits); //  ['Apple', 'Orange', 'Cherry']

// shift() - Видаляє перший елемент з масиву та повертає його
console.log(fruits.shift()); // 'Apple'
console.log(fruits); // ['Orange', 'Cherry']

// unshift() - Додає елементи в початок масиву, повертає його нову довжину
console.log(fruits.unshift('Peach')); // 3
console.log(fruits); //['Peach', 'Orange', 'Cherry']

// for .. of array loop // в 10 - 100 разів швидше за for .. in

for (let fruit of fruits) {
    console.log(fruit);
}

// Отож, найпростіший метод очистки масиву це: arr.length = 0;.

//new Array(number) - створює порожній масив відповідної довжени

// toString(array) - повертає рядокз елементів, які розділені комою
console.log(fruits.toString()); //Peach,Orange,Cherry

//TAsks
// 1 
// Створіть масив styles з елементами “Jazz” та “Blues”.
// Додайте “Rock-n-Roll” в кінець масиву.
// Замініть значення в середині масиву на “Classics”. Ваш код для пошуку медіанного елемента має працювати для будь-яких масивів непарної довжини.
// Видаліть перший елемент масиву та покажіть його.
// Вставте Rap та Reggae на початок масиву.

//2
const styles = ['Jazz', 'Blues'];
styles.push('Rock-n-Roll');
styles[Math.floor((styles.length - 1) / 2)] = 'Classics';
console.log(styles.shift());
styles.unshift('Rap', 'Raggie');

//3
/* Напишіть функцію sumInput() яка:

Просить користувача ввести дані за допомогою prompt та зберігає їх в масив.
Закінчує робити запити в користувача після того, як введено не числове значення, порожня строка або натиснуто “відмінити”.
Підраховує та повертає суму елементів масиву.
P.S. Нуль 0 це – валідне число, будь ласка, не зупиняйте функцію при введені 0. */

function sumInput() {
    const inputsArray = [];
    while (true) {
        let elem = Number(prompt('Insert a number'));
        if (!isFinite(elem) || elem === '' || elem === null) break;
        inputsArray.push(elem);
    }

    let sum = 0;
    for (element of array) {
        sum += element;
    }

    return sum;
}

//4
/* На вході масив чисел, наприклад arr = [1, -2, 3, 4, -9, 6].

Завдання: знайти неперервний підмасив arr з максимальною сумою елементів.

Написати функцію getMaxSubSum(arr) яка повертає таку суму.

Наприклад: 

getMaxSubSum([-1, 2, 3, -9]) == 5 (the sum of highlighted items)
getMaxSubSum([2, -1, 2, 3, -9]) == 6
getMaxSubSum([-1, 2, 3, -9, 11]) == 11
getMaxSubSum([-2, -1, 1, 2]) == 3
getMaxSubSum([100, -9, 2, -3, 5]) == 100
getMaxSubSum([1, 2, 3]) == 6 (take all)*/

// - Approach 1 O(n^2) Time Solution(quadratic time)

/* function getMaxSubSum(array){
    let maxSum = 0;

    for (let i = 0; i < array.length; i++) {
        let maxSubarrayStart = 0;
        for (let j = i; j < array.length; j++) {
            maxSubarrayStart += array[j];
            maxSum = Math.max(maxSubarrayStart, maxSum);
        }
    }

    return maxSum;
} */

// Approuch 2 O(n) - linear time

function getMaxSubSum(array) {
    let maxSum = 0;
    let partialSum = 0;

    for (let i = 0; i < array.length; i++) {
        partialSum = Math.max(partialSum + array[i], array[i]);
        maxSum = Math.max(partialSum, maxSum);
    }

    return maxSum;
}