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


//Build up character containers

let characterData;
const buildUpCharacterContainer = () => {
    for (let i = 0; i < characterData.length; i++) {
        const p = document.createElement('p');
        p.innerText = characterData[i].name;
        const img = document.createElement('img');
        img.setAttribute('src', characterData[i].portrait)
        img.setAttribute('alt', characterData[i].name)
        const div = document.createElement('div');
        div.setAttribute('class', "character__container")
        div.appendChild(img);
        div.appendChild(p);
        main.appendChild(div);
    }
    modalOpener();
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
    buildUpCharacterContainer();
}
const getData = async () => {
    const response = await fetch('../json/got.json');
    const rawCharacterData = await response.json();
    refineData(rawCharacterData);
};

window.addEventListener("load", getData);


//Modal
const modal = document.querySelector(".modal");
function modalOpener(){
    const modalOpen = document.querySelectorAll(".character__container");
    const modalName = document.querySelector(".modal__character--name");
    const modalBio = document.querySelector(".modal__character--bio");
    const modalPicture = document.querySelector("#modal__img");
    const modalBadge = document.querySelector("#modal__badge");
    for (let i = 0; i < modalOpen.length; i++) {
        modalOpen[i].addEventListener("click", function () {
            modalName.innerText=characterData[i].name;
            if (characterData[i].bio) {
                modalBio.innerText=characterData[i].bio;
            } else {
                modalBio.innerText="No character bio.";
            }
            if (characterData[i].picture) {
                modalPicture.setAttribute('src', characterData[i].picture);
                modalPicture.setAttribute('alt', characterData[i].name);
            } else {
                modalPicture.setAttribute('src', '../assets/site/placeholder.png');
                modalPicture.setAttribute('alt', 'No specific picture.');
            }
            if (characterData[i].house) {
                modalBadge.setAttribute('src', `../assets/houses/${characterData[i].house}.png`);
                modalBadge.setAttribute('alt', characterData[i].house);                
            } else {
                
            }
            modal.style.display = "block";
        })
        
        
    }
}

window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

const modalCloseBtn = document.querySelector('#modal__close');
modalCloseBtn.onclick = () => {
    modal.style.display = "none";
    
}