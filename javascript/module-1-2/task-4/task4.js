const name = prompt('What is your name? ')
const randomNumber = Math.floor(Math.random() * 4) + 1;

if (randomNumber == 1) {
    document.querySelector('#result').textContent = `${name}, you are Gryffindor`
} else if (randomNumber == 2) {
    document.querySelector('#result').textContent = `${name}, you are Slytherin`
} else if (randomNumber == 3) {
    document.querySelector('#result').textContent = `${name}, you are Hufflepuff`
} else {
    document.querySelector('#result').textContent = `${name}, you are Ravenclaw`
}