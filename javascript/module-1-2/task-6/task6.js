const answer = confirm("Should I calculate the square root?");

if (answer === false) {
    document.querySelector('#result').textContent = 'The square root is not calculated.';
} else {
    const number = Number(prompt("Enter a number to root: "));

    if (number < 0) {
    document.querySelector('#result').textContent = `The square root of a negative number is not defined.`;
    } else {
        document.querySelector('#result').textContent = `Square root of ${number} is: ${Math.sqrt(number).toFixed(1)}`
    }
}

