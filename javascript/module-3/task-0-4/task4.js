'use strict';
const numbers = [];

while (true) {
    const inputNumbers = Number(prompt('Enter a number (0 end the loop)'))
    if (inputNumbers === 0) {
        break
    }
    numbers.push(inputNumbers)
}

numbers.sort((a, b) => b - a);

for (let i=0; i<numbers.length; i++) {
    console.log(numbers[i])
}