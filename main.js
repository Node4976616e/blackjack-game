
let firstCard = 0; // first card variable
let secondCard = 0; // second card variable
let newCard = 0;    // draw card variable
let newGame = false; // if new game can be started
let hasBlackJack = false; // if player won
let message = ""; // message variable 

let sum = 0; // sum of cards

let showMessage = document.getElementById("show-message"); // id show-message saved to variable
let showCards = document.getElementById("cards");
let showSum = document.getElementById("sum");




function startGame() {
    if (newGame === false) { // checks if newGame can be started false = no game in progress
        newGame = true;     // game is in progress, can't start new one
        firstCard = Math.floor((Math.random() * 10) + 2); // first card number is chosen randomly between 2 and 11
        secondCard = Math.floor((Math.random() * 10) + 2); // second card number is chosen randomly between 2 and 11
        sum = firstCard + secondCard; // add two starting cards together and write it to sum variable
        showCards.textContent = `Cards: ${firstCard} ${secondCard} `; //write cards numbers to the document - id=cards
        showSum.textContent = `Sum: ${sum}`; //write sum of cards - id=sum
        checkResults(); // call function checkResults to check results of game
    } else if (newGame === true) {  // if newGame variable is true you can't start a new game
        alert("You haven't finished your game.");  // shows a message that you haven't finished your game yet
    }
}



function addNewCard() { // function for drawing a new card
    if (newGame === true) { // checking if game is in progress
        newCard = Math.floor((Math.random() * 10) + 2); // add a random number to newCard variable
        showCards.textContent += `${newCard}` + ` `; // write newCard number to id=cards
        sum += newCard; // sum of all cards
        showSum.textContent = `Sum: ${sum}`; // write the sum of all cards
        checkResults(); // check the game results
    } else if (hasBlackJack === true) { // check if player won
        alert("You have won, start new game.");
        hasBlackJack = false; //set win condition back to false so we can start a new game
    }

    else {
        alert("You have lost, start new game.");

    }
}

function checkResults() { // function for checking game results
    if (sum <= 20) { // if sum is less or equal to 20
        message = "Do you want to draw a new card ?";
    } else if (sum === 21) { // if sum is strictly 21
        message = "You have won!";
        hasBlackJack = true; // set victory condition to true so message can be shown that you won if you try to get another card
        newGame = false; // condition for starting a new game reset
    } else {
        message = "You've lost!";

        newGame = false; // condition for starting a new game reset
    }
    showMessage.textContent = message; // showing a message if player win or lose
}



