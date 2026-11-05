const numbers = [];

while (true) {
    const inputNumber = Number(prompt('Enter a number'))
    if (numbers.includes(inputNumber)) {
        window.alert('The number has already been given!')
        break
    }
    numbers.push(inputNumber)
}

numbers.sort((a, b) => a - b)

for (let i=0; i<numbers.length; i++) {
    console.log(numbers[i])
}