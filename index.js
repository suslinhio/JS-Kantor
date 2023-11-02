'use strict' 

// Декоратори та переадресація виклику, call/apply


//Кешування для тяжких функцій за допомогою декоратора(спеціальна функція, яка бере іншу функцію і змінює її поведінку.)

function slow(x) {
    //some really hard operations
    console.log(`Called with ${x}`);
    return x;
}

function cachingDecorator(func) {
    const cache = new Map();

    return function(x) {
        if (cache.has(x)) {
            return cache.get(x);
        } 

        let res = func(x);

        cache.set(x, res);
        return res;
    }
} 


//Використання “func.call” для контексту
// func.call(context, arg1, arg2) -- явно задає this для контексту виконання

const worker = {
    someMethod() {
        return 1;
    },

    slow(x) {
        console.log(`Called with ${x}`);
        return x * this.someMethod(); // потрібно передати контекст виконання
    }
}

function cachingDecorator2(func) {
    const cache = new Map();

    return function(x) {
        if (cache.has(x)) {
            return cache.get(x);
        }

        let res = func.call(this, x);
        cache.set(x, res);
        return res;
        
    };
}

worker.slow = cachingDecorator(worker, slow);

//Tasks

//1
/* Створіть декоратор spy(func), який повинен повернути обгортку, яка зберігає всі виклики функції у властивості calls.

Кожен виклик зберігається як масив аргументів. */

function spy(func) {
    function wrapper(...args) {
        wrapper.calls.push(args);
        return func.apply(this, args);
    }

    wrapper.calls = [];
    return wrapper;
}

function work(a, b) {
    alert( a + b ); 
}

work = spy(work);

// work(1, 10);
// work(10, 20);

// for (let key of work.calls) {
//     console.log(key);
// }

//2
/* Створіть декоратор delay(f, ms), яка затримує кожен виклик f на ms мілісекунд. */

function delay(func, ms) {
    return function() {
        setTimeout(() => func.apply(this, arguments), ms);
    }
}

// let f1000 = delay(alert, 1000);
// f1000("тест");

