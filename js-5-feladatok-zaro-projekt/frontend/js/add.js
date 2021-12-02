import {
    costumerDataUrl,
} from './constans.js'
import {
    getDataFromServer,
} from './main.js'
import {
    closeInput,
} from './close.js'

const getNewCostumerData = () => {
    const inputs = document.querySelectorAll("input[type=text]");
    let data = {};
    for (let i = 0; i < inputs.length; i++) {
        data[inputs[i].name] = inputs[i].value;
    }
    delete data.id;
    return data;
}

const setID = () => {
    const object = document.querySelectorAll('tr:last-child');
    const maxID = parseInt(object[3].children[0].innerText);
    const inputs = document.querySelectorAll("input[type=text]");
    inputs[0].value = maxID + 1;
}

const openAddCostumer = () => {
    document.querySelector('#btnEditOK').classList.toggle("hide");
    document.querySelector('#main__btn').classList.toggle("inactive");
    document.querySelector('#input__add').classList.toggle("hide");
    document.querySelector('#table__container').classList.toggle("hide");
    document.querySelector('#input__container').classList.toggle("hide");
    setID();
}

function createNewCostumer() {
    const data = getNewCostumerData();
    const fetchOptions = {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }

    fetch(costumerDataUrl, fetchOptions).then(
        resp => resp.json(),
        error => alert(`Creating new costumer failed. Please contact the company's IT HelpDesk. 
        Error code: ${error}`)
    ).then(
        data => getDataFromServer(costumerDataUrl)
    );
    closeInput();
}


document.querySelector('#btnNewOK').addEventListener('click', createNewCostumer);
export {
    openAddCostumer,
}