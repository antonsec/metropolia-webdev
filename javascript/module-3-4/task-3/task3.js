const names = [];

for (let i = 0; i < 6; i++) {
    const dogNames = prompt(`Name ${i+1}?`);
    names.push(dogNames);
}
names.sort();
names.reverse();

for (let i = 0; i < names.length; i++) {
    const li = document.createElement('li');
    li.textContent = names[i];
    document.querySelector('#result').appendChild(li);
}