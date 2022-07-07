
// Arrow function to generate random game (rock, scissors or paper)

const computerPlay = () => {

    const gameArray = ["rock", "scissors", "paper"];
    return gameArray[Math.floor(Math.random() * gameArray.length)];
}

//Test the output
//console.log("This is what he computer selected: ", computerPlay());

// Funtion to play one round of the game
const playRound = (playerSelection, computerSelection) => {

    if (playerSelection === "scissors" && computerSelection === "paper") {

        return `You won, ${playerSelection} beats ${computerSelection}`;
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        return `You won, ${playerSelection} beats ${computerSelection}`;
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        return `You won, ${playerSelection} beats ${computerSelection}`;

    }

    else if (computerSelection === "scissors" && playerSelection === "paper") {
        return `You lost, ${computerSelection} beats ${playerSelection}`;
    }

    else if (computerSelection === "rock" && playerSelection === "scissors") {
        return `You lost, ${computerSelection} beats ${playerSelection}`;
    }

    else if (computerSelection === "paper" && playerSelection === "rock") {
        return `You lost, ${computerSelection} beats ${playerSelection}`;
    }

}


//fuction to play 5 round of games

const game = () => {
    for (let i = 0; i < 5; i++) {

        const playerInput = prompt("Enter one of rock, paper, or scissors");
        const playerInputToLowerCase = playerInput.toLowerCase();
        const playerSelection = playerInputToLowerCase;
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));

    }
}

game();


