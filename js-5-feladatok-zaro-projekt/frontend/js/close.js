const closeInput = () => {
    document.querySelector('#btnNewOK').classList.remove("hide");
    document.querySelector('#btnEditOK').classList.remove("hide");
    document.querySelector('#main__btn').classList.toggle("inactive");
    document.querySelector('#input__add').classList.add("hide");
    document.querySelector('#input__edit').classList.add("hide");
    document.querySelector('#table__container').classList.toggle("hide");
    document.querySelector('#input__container').classList.toggle("hide");
    const inputs = document.querySelectorAll("input[type=text]");
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
    }
}
document.querySelector('#btnClose').addEventListener('click', closeInput);
export {
    closeInput,
}