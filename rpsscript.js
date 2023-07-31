// Directions
// <!-- start game() loop that loops 5 times -->
//     <!-- start tally of scores at 0 for user and computer -->
//     <!-- start with prompting the user for rock, paper or scissors and store as variable-->
//     <!-- call function that generates a computer answer randomonly between rock/paper/scissors -->
//     <!-- pass computer choice and prompted choice -->
//         <!-- compare and generate who won -->
//             <!-- use return -->
//         <!-- add to tally who is winning -->
//             <!-- use return -->
//         <!-- console.log(winner of that function) -->
//     <!-- after 5 rounds, declare winner -->

let userScore = 0;
let compScore = 0;

let rockSelect = document.querySelector("#ROCK").addEventListener("click", function () { playRound("ROCK") });
let paperSelect = document.querySelector("#PAPER").addEventListener("click", function () { playRound("PAPER") });
let scissorsSelect = document.querySelector("#SCISSORS").addEventListener("click", function () { playRound("SCISSORS") });

function gameReset() {
    // reset scores
    userScore = 0;
    compScore = 0;
    // resets player choice selection
    document.querySelector("#playerChoice").innerHTML = "";
    document.querySelector("#compChoice").innerHTML = "";
    document.querySelector("#compScore").innerHTML = compScore;
    document.querySelector("#userScore").innerHTML = userScore;
    
    document.querySelector("#gameOver-title").classList.toggle("hidden");
    document.querySelector("#gameOver-text").classList.toggle("hidden");
    document.querySelector("#playerChoice-title").classList.toggle("hidden");
    document.querySelector("#playerChoice").classList.toggle("hidden");
    document.querySelector("#compChoice-title").classList.toggle("hidden");
    document.querySelector("#compChoice").classList.toggle("hidden");
    document.querySelector("#reset").classList.toggle("hidden");
    document.querySelector("#ROCK").classList.toggle("hidden");
    document.querySelector("#PAPER").classList.toggle("hidden");
    document.querySelector("#SCISSORS").classList.toggle("hidden");
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
function playRound(playerSelection) {
    let computerSelection = computerSelectionGenerator();
    document.querySelector("#playerChoice").innerHTML = playerSelection;
    document.querySelector("#compChoice").innerHTML = computerSelection;
    if (playerSelection === computerSelection) {
        console.log("TIE");
    }
    else if (playerSelection == "ROCK" && computerSelection == "SCISSORS" ||
            playerSelection == "PAPER" && computerSelection == "ROCK" ||
            playerSelection == "SCISSORS" && computerSelection == "SCISSORS") {
                console.log("you win! " + playerSelection + " beats " + computerSelection);
                userScore += 1;
            }

    else {
        console.log("you lost! " + computerSelection + " beats " + playerSelection);
        compScore += 1;
    }

    if (compScore >= 5 || userScore >= 5) {
        document.querySelector("#gameOver-title").classList.toggle("hidden");
        document.querySelector("#gameOver-text").classList.toggle("hidden");
        document.querySelector("#playerChoice-title").classList.toggle("hidden");
        document.querySelector("#playerChoice").classList.toggle("hidden");
        document.querySelector("#compChoice-title").classList.toggle("hidden");
        document.querySelector("#compChoice").classList.toggle("hidden");
        document.querySelector("#reset").classList.toggle("hidden");
        document.querySelector("#ROCK").classList.toggle("hidden"); 
        document.querySelector("#PAPER").classList.toggle("hidden");
        document.querySelector("#SCISSORS").classList.toggle("hidden");
        if (compScore == 5) {
            document.querySelector("#gameOver-text").innerHTML = "The computer won!"
        }
        else {
            document.querySelector("#gameOver-text").innerHTML = "You won!"
        }
    }
    document.querySelector("#compScore").innerHTML = compScore;
    document.querySelector("#userScore").innerHTML = userScore;
}

