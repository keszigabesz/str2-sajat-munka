import {
    costumerDataUrl,
    costumerDataKeys,
} from './constans.js'
import {
    getDataFromServer,
    costumerData,
} from './main.js'
import {
    closeInput,
} from './close.js'

const getDataToEdit = () => {
    const checkedRadioBtnId = document.querySelector('[name=select]:checked').id - 1;
    const inputs = document.querySelectorAll("input[type=text]");
    const data = costumerData[checkedRadioBtnId];
    for (let i = 0; i < costumerDataKeys.length; i++) {
        const key = costumerDataKeys[i];
        inputs[i].value = data[key];
    }
}

const openEditCostumer = () => {
    document.querySelector('#btnNewOK').classList.toggle("hide");
    document.querySelector('#main__btn').classList.toggle("inactive");
    document.querySelector('#input__edit').classList.toggle("hide");
    document.querySelector('#table__container').classList.toggle("hide");
    document.querySelector('#input__container').classList.toggle("hide");
    getDataToEdit();
}
const getUpdatedCostumerData = () => {
    const inputs = document.querySelectorAll("input[type=text]");
    let data = {};
    for (let i = 0; i < inputs.length; i++) {
        data[inputs[i].name] = inputs[i].value;
    }
    return data;
}

function updateCostumer() {
    const data = getUpdatedCostumerData();
    const fetchOptions = {
        method: "PUT",
        mode: "cors",
        cache: "no-cache",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }
    fetch(`${costumerDataUrl}/${data.id}`, fetchOptions).then(
        resp => resp.json(),
        error => alert(`Updating costumer data failed. Please contact the company's IT HelpDesk. 
        Error code: ${error}`)
    ).then(
        data => getDataFromServer(costumerDataUrl)
    );
    closeInput();
}

document.querySelector('#btnEditOK').addEventListener('click', updateCostumer);
export {
    openEditCostumer,
}