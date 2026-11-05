const participants = Number(prompt('Number of participants?'));
const names = [];

for (let i = 0; i < participants; i++) {
    const participantName = prompt(`Name ${i+1}?`);
    names.push(participantName);
}

names.sort();

for (let i = 0; i < names.length; i++) {
    const li = document.createElement('li');
    li.textContent = names[i];
    document.querySelector('#result').appendChild(li);
}