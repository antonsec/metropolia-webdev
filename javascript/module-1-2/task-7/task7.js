const diceAmount = Number(prompt('Number of dice rolls?'))
let sum = 0;

for (let i = 1; i <= diceAmount; i++) {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    sum += randomNumber
}

document.querySelector('#result').textContent = `The sum of the rolled dice is: ${sum}`;
