
from flask import Flask
import json
from pathlib import Path

app = Flask(__name__)


# Task 1 — Prime Number API
@app.route('/prime_number/<int:number>')
def prime_number(number):
    is_prime = number > 1

    if is_prime:
        for i in range(2, int(number ** 0.5) + 1):
            if number % i == 0:
                is_prime = False
                break

    return {
        "Number": number,
        "isPrime": is_prime
    }


# Task 2 — Translation API
@app.route('/translate/<word>')
def translate(word):
    file_path = Path(__file__).with_name('dictionary.json')

    with open(file_path, 'r', encoding='utf-8') as file:
        dictionary = json.load(file)

    english_word = word.lower()

    translations = {
        key.lower(): value
        for key, value in dictionary.items()
    }

    if english_word not in translations:
        return {"error": "Word not found"}, 404

    return {
        "English": english_word,
        "Finnish": translations[english_word]
    }


if __name__ == '__main__':
    app.run(port=3000, debug=True)
