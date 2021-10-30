/* modal selector */
const modalContainer = document.querySelector('.modal__container');
const modalMain = document.querySelector('.modal__main');


/* modal open */
const modalOpenBtn = document.querySelector('.btn__modal');
modalOpenBtn.onclick = () => {
    modalContainer.style.display = 'block';
    modalMain.classList.remove('modal__disappeare');
}

/* modal close btn */
const modalCloseBtn = document.querySelector('.modal__header--close');
modalCloseBtn.onclick = () => {
    modalMain.classList.add('modal__disappeare');
    setTimeout(function () {
        modalContainer.style.display = "none";
    }, 900);
}

/*modal close window*/
window.onclick = (e) => {
    if (e.target == modalContainer) {
        modalMain.classList.add('modal__disappeare');
        setTimeout(function () {
            modalContainer.style.display = "none";
        }, 900);

    }
}