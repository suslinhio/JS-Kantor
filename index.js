'use strict' 

// Automation testing

/* 
Керована поведінкою розробка (BDD) - і тести, і документація, і приклади використання.
В BDD спочатку пишуть специфікацію, потім реалізацію. В результаті ми маємо і специфікацію, і код реалізації.

Специфікацію можна використовувати трьома способами:

Як Тести – вони гарантують, що код працює правильно.
Як Документацію – назви describe та it описують, що робить функція.
Як Приклади – тести – це фактично робочі приклади, що показують, як можна використовувати функцію.


Syntax:

describe('funcName', function() {

    it('what is it doing', function() {
        assert.equal(funcName(x, n), expectedResult);
    });
});
*/

/* describe('pow', function() { // it-blocks written by hands

    it('pows 2 to 3', function() {
        assert.equal(pow(2, 3), 8);
    });

    it('pows 3 to 4', function() {
        assert.equal(pow(3, 4), 81);
    });
}); */
describe('pow', function() {
    describe('pows x to 3', function() { 

        function makeTest(x) { // automatic creation of tests
            let expected = x * x * x;
            it(`${x} powed to 3 equals ${expected}`, function() {
                assert.equal(pow(x, 3), expected);
            });
        }

        for (let i = 0; i < 20; i++) {
            makeTest(i);
        }
    });

    describe('pows x to 2', function() { 

        function makeTest(x) { 
            let expected = x * x;
            it(`${x} powed to 3 equals ${expected}`, function() {
                assert.equal(pow(x, 2), expected);
            });
        }

        for (let i = 0; i < 20; i++) {
            makeTest(i);
        }
    });

    describe('pows x to 4', function() { 

        function makeTest(x) { 
            let expected = x * x * x * x;
            it(`${x} powed to 3 equals ${expected}`, function() {
                assert.equal(pow(x, 4), expected);
            });
        }

        for (let i = 0; i < 20; i++) {
            makeTest(i);
        }
    });

    it("для недійсних n результатом є NaN", function() {
        assert.isNaN(pow(2, -1));
      });
    
      it("для не цілих n результатом є NaN", function() {
        assert.isNaN(pow(2, 1.5));
      });
});    