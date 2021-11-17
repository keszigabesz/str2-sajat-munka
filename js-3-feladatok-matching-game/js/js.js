const dealCards = cards => {
    const symbols = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
    for (let i = 0; i < symbols.length; i++) {
        const array = document.querySelectorAll('.random');
        const rnd = Math.floor(Math.random() * array.length);
        array[rnd].innerHTML = symbols[i];
        const classList = array[rnd].classList;
        classList.remove("random");
    }
}
window.addEventListener('load', dealCards());;


const cards = document.querySelectorAll(".card");

function flipCard() {
    this.classList.toggle("flip");
}
cards.forEach((card) => card.addEventListener("click", flipCard));