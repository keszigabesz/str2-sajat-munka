const dealCards = () => {
    const symbols = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
    for (let i = 0; i < symbols.length; i++) {
        const array = document.querySelectorAll('.random');
        const rnd = Math.floor(Math.random() * array.length);
        array[rnd].textContent = symbols[i];
        const classList = array[rnd].classList;
        classList.remove("random");
    }
}

const cards = document.querySelectorAll(".card");

cards.forEach((card) => card.addEventListener("click", flipCard));

let foundPairs=0;

function flipCard() {
    this.classList.add('flip');
    this.classList.add('active');    
    const activeCards = document.querySelectorAll('.active');
    if (activeCards.length === 2) {
        if (activeCards[0].textContent === activeCards[1].textContent) {
            activeCards[0].classList.remove('active');
            activeCards[1].classList.remove('active');
            foundPairs++;
            if (foundPairs===5) {
                setTimeout(() => {
                    const cardFrontArray = document.querySelectorAll(".card__front");
                    for (let i = 0; i < cards.length; i++) {
                        console.log(i);
                        console.log(cards[i]);
                        foundPairs=0;
                        cards[i].classList.remove('flip');                        
                        cardFrontArray[i].classList.add('random');
                    }  
                    setTimeout(() => {
                        dealCards();
                    }, 1000);             
                }, 4000);
            }
        } else {
            setTimeout(() => {
                activeCards[0].classList.remove('active');
                activeCards[1].classList.remove('active');
                activeCards[0].classList.remove('flip');                
                activeCards[1].classList.remove('flip');                
            }, 800);
        }        
    }
}

export {
    dealCards
}