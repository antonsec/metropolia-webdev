const number1 = Number(prompt('Enter first number: '));
const number2 = Number(prompt('Enter second number: '));
const number3 = Number(prompt('Enter third number: '));

const sum = number1 + number2 + number3
document.querySelector('#sum').textContent = `The sum of the numbers is: ${sum}`

const product = number1 * number2 * number3
document.querySelector('#product').textContent = `The product of the numbers is: ${product}`

const average = (number1 + number2 + number3) / 3
document.querySelector('#average').textContent = `The average of the numbers is: ${average.toFixed(1)}`