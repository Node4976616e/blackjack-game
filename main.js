//Create whole random number between 2 and 11
let firstCard = 0;
let secondCard = 0;
let newCard = 0;
let newGame = false;
let hasBlackJack = false;
let isAlive = true;
let message = "";

let sum = 0;
let showMessage = document.getElementById("show-message");
let showCards = document.getElementById("cards");
let showSum = document.getElementById("sum");




function startGame() {
    if (newGame === false) {
        newGame = true;
        firstCard = Math.floor((Math.random() * 10) + 2);
        secondCard = Math.floor((Math.random() * 10) + 2);
        sum = firstCard + secondCard;
        showCards.textContent = `Cards: ${firstCard} ${secondCard} `;
        showSum.textContent = `Sum: ${sum}`;
    } else {
        alert("You haven't finished your game.");
    }
}



function addNewCard() {
    if (newGame === true) {
        newCard = Math.floor((Math.random() * 10) + 2);
        showCards.textContent += `${newCard}` + ` `;
        sum += newCard;
        showSum.textContent = `Sum: ${sum}`;
        checkResults();
    } else {
        alert("You have lost, start new game.");
        newGame = false;

    }
}

function checkResults() {
    if (sum <= 20) {
        message = "Do you want to draw a new card ?";
    } else if (sum === 21) {
        message = "You have won!";
        hasBlackJack = true;
        newGame = false;
    } else {
        message = "You've lost!";
        newGame = false;
    }
    showMessage.textContent = message;
}



