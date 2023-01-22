//Create whole random number between 2 and 11
let firstCard = Math.floor((Math.random() * 10) + 2);
let secondCard = Math.floor((Math.random() * 10) + 2);
let newCard = 0;
let hasBlackJack = false;
let isAlive = true;
let message = "";

let sum = firstCard + secondCard;
let showMessage = document.getElementById("show-message");
let showCards = document.getElementById("cards");
let showSum = document.getElementById("sum");


if (hasBlackJack === true) {
    alert("You have a blackjack!");
}

if (isAlive === false) {
    alert("You are out")
}

function startGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card ?";
    } else if (sum === 21) {
        message = "You have won!";
        hasBlackJack = true;
    } else {
        message = "You've lost!";
        isAlive = false;
    }
    showCards.textContent = `Cards: ${firstCard} ${secondCard} `;
    showSum.textContent = `Sum: ${sum}`;
    showMessage.textContent = message;
}



function addNewCard() {
    newCard = Math.floor((Math.random() * 10) + 2);
    showCards.textContent += `${newCard}` + ` `;
    sum += newCard;
    showSum.textContent = `Sum: ${sum}`;
}

