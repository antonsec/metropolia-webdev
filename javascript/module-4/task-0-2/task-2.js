'use strict';
const firstItem = document.createElement('li');
firstItem.textContent = `First item`

document.getElementById('target').appendChild(firstItem);

const secondItem = document.createElement('li');
secondItem.textContent = `Second item`

document.getElementById('target').appendChild(secondItem);

const thirdItem = document.createElement('li');
thirdItem.textContent = `Third item`

document.getElementById('target').appendChild(thirdItem);

secondItem.classList.add('my-item')