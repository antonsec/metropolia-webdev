'use strict';
const number1 = Number(prompt('Eneter 1st number'));
const number2 = Number(prompt('Eneter 2nd number'));
const number3 = Number(prompt('Eneter 3rd number'));
const number4 = Number(prompt('Eneter 4th number'));
const number5 = Number(prompt('Eneter 5th number'));

const numbers = [];

numbers.push(number1);
numbers.push(number2);
numbers.push(number3);
numbers.push(number4);
numbers.push(number5);

for (let i=numbers.length - 1; i>=0; i--) {
    console.log(numbers[i])
}