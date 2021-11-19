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

let foundPairs = 0;

let firstFlip = true;

const gameEvaluation = () => {
    const activeCards = document.querySelectorAll('.active');
    if (activeCards.length === 2) {
        if (activeCards[0].textContent === activeCards[1].textContent) {
            activeCards[0].classList.remove('active');
            activeCards[1].classList.remove('active');
            foundPairs++;
            if (foundPairs === 5) {
                timerStop();
                setTimeout(() => {
                    const cardFrontArray = document.querySelectorAll(".card__front");
                    for (let i = 0; i < cards.length; i++) {
                        console.log(i);
                        console.log(cards[i]);
                        foundPairs = 0;
                        cards[i].classList.remove('flip');
                        cardFrontArray[i].classList.add('random');
                        timerContainer.textContent = '00:00';
                    }
                    setTimeout(() => {
                        dealCards();
                    }, 1000);
                }, 3000);
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

function flipCard() {
    this.classList.add('flip');
    this.classList.add('active');
    if (firstFlip) {
        timerStart();
        firstFlip = false;
    }
    gameEvaluation();
}

let elapsedTime = new Date;
elapsedTime = elapsedTime.getTime();
elapsedTime = 0;
const timerOptions = {
    minute: '2-digit',
    second: '2-digit'
};
let timerID;
const timerContainer = document.querySelector("#timer");

function timerStart() {
    timerContainer.textContent = '00:00';
    timerID = setInterval(timer, 1000);
    
    function timer() {
        elapsedTime += 1000;
        let timeInMillisec = new Date;
        timeInMillisec.setTime(elapsedTime);
        const formattedTime = timeInMillisec.toLocaleTimeString('hu', timerOptions);
        timerContainer.textContent = formattedTime;
    }
}

function timerStop() {
    clearInterval(timerID);
    elapsedTime = 0;
    firstFlip = true;
}



window.addEventListener("load", dealCards);

/* export {
    dealCards,
} */