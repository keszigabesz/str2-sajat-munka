/* from w3 schools */
window.onscroll = function () {
    navScrollChange()
};

function navScrollChange() {
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
        document.querySelector("nav").classList.add("bg-light");
    } else {
        document.querySelector("nav").classList.remove("bg-light");;
    }
}