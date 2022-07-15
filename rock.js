// Variables to hold h1 elements
const userChoiceDisplay = document.createElement('h1');
const computerChoiceDisplay = document.createElement('h1');
const resultDisplay = document.createElement('h1');

const gameContent = document.getElementById('game-content');
gameContent.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay);

const choices = ['rock', 'paper', 'scissors'];
let userChoice;
let computerChoice;

const computerPlay = () => {

    computerChoice = choices[Math.floor(Math.random() * choices.length)]
    computerChoiceDisplay.innerHTML = `Computer choice: ${computerChoice}`;
    return computerChoice;
}

const playRound = (playerSelection, computerSelection) => {

    let result = "";

    if (playerSelection === "scissors" && computerSelection === "paper") {

        result = "Congratulations, you won!";
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        result = "Congratulations, you won!";
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        result = "Congratulations, you won!";

    }

    else if (computerSelection === "scissors" && playerSelection === "paper") {
        result = "You lost, Computer won!";
    }

    else if (computerSelection === "rock" && playerSelection === "scissors") {
        result = "You lost, Computer won!";
    }

    else if (computerSelection === "paper" && playerSelection === "rock") {
        result = "You lost, Computer won!";
    }

    else return "There was a tie!"

    return result;

}

// Arrow function to generate random game (rock, scissors or paper)

const handleClick = (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = `User choice: ${userChoice}`;
    computerPlay();
    playRound();

    console.log(userChoice);
    return userChoice;
}






for (let i = 0; i < choices.length; i++) {
    const button = document.createElement('button');
    button.id = choices[i];
    button.innerHTML = choices[i];
    button.addEventListener('click', handleClick)
    gameContent.appendChild(button);
}

console.log(handleClick());

//Test the output
//console.log("This is what he computer selected: ", computerPlay());

// Funtion to play one round of the game


// Function to handle user input
const playerSelection = () => {

    //handleClick();





    //    let userInput = prompt('Enter rock, scissors or paper');
    //    userInput = userInput.toLowerCase();

    //    if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper') {
    //     return userInput;
    //    } else {
    //     console.log ('Erro, please type: rock, paper, or scissors')
    //    }
}




//fuction to play 5 round of games

const game = () => {

    let playerPoint = 0;
    let computerPoint = 0;

    const userChoice = handleClick()  //playerSelection();
    const computerChoice = computerPlay();

    const result = playRound(userChoice, computerChoice);

    if (result === "Congratulations, you won!") {
        playerPoint++;
        console.log(`${result} Player point  is: ${playerPoint}`);
    }
    else if (result === "You lost, Computer won!") {
        computerPoint++;
        console.log(`${result} Computer's point  is: ${computerPoint}`);
    }
    else {
        console.log(result);
    }

    console.log("Computer point is: " + computerPoint);
    console.log("Player point is: " + playerPoint);


}

game();


