import {
    getDataFromServer,
} from './main.js'
import {
    costumerDataUrl,
} from './constans.js'

const deleteCostumer = () => {
    const checkedRadioBtnId = document.querySelector('[name=select]:checked').id;
    let fetchOptions = {
        method: "DELETE",
        mode: "cors",
        cache: "no-cache"
    }
    fetch(`${costumerDataUrl}/${checkedRadioBtnId}`, fetchOptions).then(
        response => response.json(),
        error => alert(`Deleting costumer failed. Please contact the company's IT HelpDesk. 
Error code: ${error}`)
    ).then(
        () => getDataFromServer(costumerDataUrl)
    )
}

export {
    deleteCostumer,
}