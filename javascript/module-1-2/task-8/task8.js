const startYear = Number(prompt('Enter start year: '))
const endYear = Number(prompt('Enter end year: '))

for (let i = startYear; i <= endYear; i++) {
    if ((i % 4 === 0 && i % 100 != 0) || i % 400 === 0 ){
        const list = document.createElement("li");
        list.textContent = i;
        document.querySelector("#result").appendChild(list);
    }
}