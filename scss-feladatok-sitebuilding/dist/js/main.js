/* NAVIGATION MENU */
function openMenuBar() {
    const x = document.querySelector("#header__nav-links");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

window.onscroll = function () {
    navScrollChange()
};

function navScrollChange() {
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
        document.querySelector(".header__nav").classList.add("bg-light");
    } else {
        document.querySelector(".header__nav").classList.remove("bg-light");;
    }
}

/* MODAL */
const modal = document.querySelector(".modal");
const modalCloseBtn = document.querySelector(".modal__content-close");

const openModal = (headerText) => {
    document.querySelector('.modal__content-header h2').innerText = headerText;
    modal.style.display = "block";
}
document.querySelector("#openModalPrivacy").addEventListener('click', function () {
    openModal("Privacy")
});
document.querySelector("#openModalTerms").addEventListener('click', function () {
    openModal("Terms")
});
document.querySelector("#openModalFaq").addEventListener('click', function () {
    openModal("FAQ")
});



modalCloseBtn.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}