const number = Number(prompt("Enter a number: "));
let isPrime = true;

if (number === 1) {
    document.querySelector('#result').textContent = `${number} is neither prime nor composite number.`
}

else if (number > 1) {
    for (let i = 2; i <= number/2; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        document.querySelector('#result').textContent = `${number} is a prime number.`
    } else {
        document.querySelector('#result').textContent = `${number} is not a prime number.`
    }
}