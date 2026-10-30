const diceAmount = Number(prompt('Number of dice?'))
const sumOfEyes = Number(prompt('Sum of eyes?'))
let matches = 0;

for (let i = 1; i <= 10000; i++) {
    let sum = 0;

    for (let j = 1; j <= diceAmount; j++) {
        const chanceTest = Math.floor(Math.random() * 6) + 1;
        sum += chanceTest
    }
    if (sum === sumOfEyes) {
        matches++;
    }
}

const probability = (matches / 10000) * 100;
document.querySelector('#result').textContent = `Probability to get sum ${sumOfEyes} with ${diceAmount} dice is ${probability.toFixed(2)}%`;