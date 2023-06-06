function game() {
    // Initialize scores
    let compScore = 0;
    let userScore = 0;

    for (let i = 0; i < 5; i++) {
        console.log("Round " + (i + 1));
        // Generate computer choice
        let computerSelection = computerSelectionGenerator();

        // Prompts user for their choice
        let playerSelection = prompt("Enter rock, paper, or scissors");
        // Capitalizes user's choice for comparison
        playerSelection = playerSelection.toUpperCase();

        // Loop to make sure user has selected valid response, and conintues to prompt until valid response is entered
        while (playerSelection != "ROCK" && playerSelection != "PAPER" && playerSelection != "SCISSORS") {
            playerSelection = prompt("Enter valid response of rock, paper, or scissors");
            playerSelection = playerSelection.toUpperCase();
        }
        console.log("user choice is " + playerSelection)
        console.log("computer choice is " + computerSelection);

        // Gets result of one round of RPS
        let result = playRound(playerSelection, computerSelection);

        // Uses result of playRound function to tally of scores
        if (result == "compWin") {
            compScore += 1;
        }
        else if (result == "userWin") {
            userScore += 1;
        }

        console.log("Computer: " + compScore);
        console.log("User: " + userScore);

        console.log("");
    }
    console.log("GAME OVER");
    console.log("Computer: " + compScore);
    console.log("User: " + userScore);
}

// Function that generates randomly computer choice
function computerSelectionGenerator() {
    // Array of choices for Computer
    let choices = ["ROCK", "PAPER", "SCISSORS"];
    // randomly selects index based on length of choices array
    var choice = choices[Math.floor(Math.random()*choices.length)];
    return choice;
}

// Function to play a round of RPS, returns winner as either compWin or userWin as a string
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("TIE");
        return "TIE";
    }
    else if (playerSelection == "ROCK" && computerSelection == "SCISSORS" ||
            playerSelection == "PAPER" && computerSelection == "ROCK" ||
            playerSelection == "SCISSORS" && computerSelection == "SCISSORS") {
                console.log("you win! " + playerSelection + " beats " + computerSelection);
                return "userWin";
            }
    else {
        console.log("you lost! " + computerSelection + " beats " + playerSelection);
        return "compWin";
    }
}


game();