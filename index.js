'use strict' 

// Iterative Objects

let range = {
    from: 1,
    to: 5,
}

range[Symbol.iterator] = function() {
    return {
        current: this.from,
        last: this.to,

        next() {
            if (this.current <= this.last) {
                return {done: false, value: this.current++};
            } else {
                return {done: true};
            }
        }
    }
}

for (let num of range) {
    console.log(num);
}

//Для рядка, for..of цикл проходить по символам:
for (let char of 'suslinhio') {
    console.log(char);
}

//Зробимо це явно
// let str = 'tapazz.naves';

// let iterator = str[Symbol.iterator];

// while (true) {
//     let res = iterator.next();
//     if (res.done) break;
//     console.log(res.value);
// }

/* Ітеровані – це об’єкти, які реалізують метод Symbol.iterator, як описано вище.
Псевдомасиви – це об’єкти, які мають індекси та length, тому вони виглядають як масиви. */

/* 
Array.from(pseudoArray || iterativeObj, mapFn, thisArgs) - універсальний метод, який приймає ітерований об’єкт або псевдомасив і робить з нього “справжній” масив, mapFn застосовуться до кожного елемента перед його додавнням(необовязковий аргумент)
*/

const arrayLikeObj = {
    0: 'Mom',
    1: 'Dad',
    2: 'Me',
    length: 3,
}

const realArray = Array.from(arrayLikeObj);
const arrayFromIterativeObj = Array.from(range);