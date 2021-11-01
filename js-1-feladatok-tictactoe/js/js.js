/* változók */
let board = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
let gameTurn = 1; /*hányadik lépésnél tart a játék, maximum 9 lehet*/
let actualtPlayerSymbol = "X"; /*az aktuális játékos jele*/
let actualPlayer=1; /*hányadik játékos lép éppen*/
let actualPlayerName; /*az aktuális játékos neve*/
let result = 0; /*játék állása, 0=döntetlen, 1=első játékos nyert, 2=második játékos nyert*/

/* játék kezdete */
const playerInput = document.querySelector(".main__players");
const gameStartBtn = document.querySelector('#btn-start');
const newGametBtn = document.querySelector('#btn-new');
const gameBoard = document.querySelector('.main__board');
const infoMessage = document.querySelector(".info__message");
const cells = document.querySelectorAll('.cell');
let firstPlayerName;
let secondPlayerName;

/* gombok */
gameStartBtn.addEventListener('click', startingTheGame);
newGametBtn.addEventListener('click', newGame);


function startingTheGame() {
    playerInput.style.display = 'none';
    gameBoard.style.display = 'grid';
    firstPlayerName = document.querySelector('#input__name1').value;
    secondPlayerName = document.querySelector('#input__name2').value;
    actualPlayerName=firstPlayerName;
    infoMessage.innerHTML=actualPlayerName+" következik, jeled: "+actualtPlayerSymbol;
}

function newGame(){
    board = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    gameTurn = 1;
    actualtPlayerSymbol = "X";
    actualPlayer=1;
    result = 0;
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerHTML = "";
        cells[i].classList.remove("cell--inactive");
    };
    newGametBtn.style.display = 'none';
    playerInput.style.display = 'block';
    gameBoard.style.display = 'none';
}

/* játéktér */
function setNextPlayer(){
    gameTurn++;        
    if (gameTurn%2==0) {
        actualtPlayerSymbol = "O";
        actualPlayerName=secondPlayerName;
        actualPlayer=2;
    }
    else{
        actualtPlayerSymbol = "X";
        actualPlayerName=firstPlayerName;
        actualPlayer=1;
    }
    infoMessage.innerHTML=actualPlayerName+" következik, jeled: "+actualtPlayerSymbol;    
}

function evaluateResult(){
    if (gameTurn>4) {
        if (board[0] == board[1] && board[1] == board[2]) { result = actualPlayer; } /*vízszintes ellenőrzés*/
        else if (board[3] == board[4] && board[4] == board[5]) { result = actualPlayer; }
        else if (board[6] == board[7] && board[7] == board[8]) { result = actualPlayer; }
        else if (board[0] == board[3] && board[3] == board[6]) { result = actualPlayer; } /*függőleges ellenőrzés*/
        else if (board[1] == board[4] && board[4] == board[7]) { result = actualPlayer; }
        else if (board[2] == board[5] && board[5] == board[8]) { result = actualPlayer; }
        else if (board[0] == board[4] && board[4] == board[8]) { result = actualPlayer; } /*átlós ellenőrzés*/
        else if (board[2] == board[4] && board[4] == board[6]) { result = actualPlayer; }
        else { result = 0;}
    }
    if (result!=0) {
        infoMessage.innerHTML="Gratulálok, "+actualPlayerName+" nyert "+gameTurn+" lépésben!";
        newGametBtn.style.display="block";
        for (let i = 0; i < cells.length; i++) {
            cells[i].className += "  cell--inactive ";
        }
    }
    else{
        if (gameTurn==9){            
            infoMessage.innerHTML="Ez sajnos döntetlen lett!";
            newGametBtn.style.display="block";
        }
    else {
        setNextPlayer();
        }    
    }
    
}

function playerMove(i) {
    cells[i].innerHTML = actualtPlayerSymbol;
    cells[i].className += "  cell--inactive ";
    board[i] = actualtPlayerSymbol;
    evaluateResult();
}

function clickOnCell() {
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("click", () => {
            playerMove(i)
        });
    }
}


window.addEventListener('load', clickOnCell);