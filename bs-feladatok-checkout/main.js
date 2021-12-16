import {
    usStates,
    huStates,
} from './_states.js'

const contryListField = document.querySelector('#country');

const generateStateList = selectedStateList => {
    const stateListField = document.querySelector('#state');
    stateListField.innerHTML = '<option selected>Choose...</option>';
    for (let i = 0; i < selectedStateList.length; i++) {
        const listElement = document.createElement('option');
        listElement.setAttribute('value', selectedStateList[i]);
        listElement.innerText = selectedStateList[i];
        stateListField.appendChild(listElement);
    }
}

const selectStateList = () => {
    const selectedCountry = contryListField.value
    const selectedStateList = selectedCountry === 'us' ? usStates : selectedCountry === 'hu' ? huStates : [];
    generateStateList(selectedStateList);
}

contryListField.addEventListener('change', selectStateList);