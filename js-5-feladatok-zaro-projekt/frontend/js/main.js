import {
    buildUpTableHead,
    buildUpTableBody,
} from './buildtable.js'
import {
    deleteCostumer,
} from './delete.js'
import {
    openAddCostumer,
} from './add.js'
import {
    openEditCostumer,
} from './edit.js'
import {
    tableHeadKeys,
    costumerDataKeys,
    costumerDataUrl,
} from './constans.js'


let costumerData;

const scrollUp = () => document.documentElement.scrollTop = 0;
document.querySelector('#btnScrollUp').addEventListener('click', scrollUp);
document.querySelector('#btnDelete').addEventListener('click', deleteCostumer);
document.querySelector('#btnAdd').addEventListener('click', openAddCostumer);
document.querySelector('#btnEdit').addEventListener('click', openEditCostumer);


const getDataFromServer = async (url) => {
    const fetchOptions = {
        method: "GET",
        mode: "cors",
        cache: "no-cache"
    };
    const response = await fetch(url, fetchOptions).catch((error) => {
        alert(`Unable to load database. Please contact the company's IT HelpDesk. 
Error code: ${error}`);
    });
    costumerData = await response.json().catch((error) => {
        alert(`Incorrect database format. Please contact the company's IT HelpDesk. 
        Error code: ${error}`)
    });
    buildUpTableHead(tableHeadKeys);
    buildUpTableBody(costumerData, costumerDataKeys);
};

window.addEventListener("load", getDataFromServer(costumerDataUrl));

export {
    costumerDataUrl,
    getDataFromServer,
    costumerData,
}