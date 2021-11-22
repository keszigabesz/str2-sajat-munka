//Searching
document.querySelector('#search__input').addEventListener("keyup", search);

function search() {
    const input = document.querySelector('#search__input').value.toLowerCase();
    const characters = document.querySelectorAll('.character__container');
    for (let i = 0; i < characters.length; i++) {
        const charaterName = characters[i].innerText;
        if (!charaterName.toLowerCase().includes(input)) {
            characters[i].style.display = 'none';
        } else {
            characters[i].style.display = '';
        }
    }
}


let characterData=[];
//Build up character containers

const bulidUpCharacterContainer = () => {
    console.log(characterData);
    for (let i = 0; i < characterData.lenght; i++) {
        const p = document.createElement('p');
        p.innerText = characterData[i].name;
        const img = document.createElement('img');
        img.setAttribute('src', characterData[i].portrait)
        img.setAttribute('alt', characterData[i].name)
        const div = document.createElement('div');
        div.setAttribute('class', "character__container")        
        div.appendChild(img);
        div.appendChild(p);
        document.body.main.appendChild(div);        
    }      
    
}

//Collecting data from json
const refineData = rawCharacterData => {
    const filteredData = rawCharacterData.filter(item => item.dead !== true);
    const alphabeticData = filteredData.sort((a, b) => {
        return a.name.localeCompare(b.name);
    });
    const rnd = Math.floor(Math.random() * alphabeticData.length);
    alphabeticData.splice(rnd, 1);
    characterData = alphabeticData;
    bulidUpCharacterContainer();
}
const getData = async () => {
    const response = await fetch('../json/got.json');
    const rawCharacterData = await response.json();
    refineData(rawCharacterData);
};

window.addEventListener("load", getData);