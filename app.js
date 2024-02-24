let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector('#msg');

const userScorePara = document.querySelector('#user-score');
const computerScorePara = document.querySelector('#computer-score');

const genComputerChoice = () => {

    const opt = ["rock", "paper", "scissors"];
    const randamIdx = Math.ceil(Math.random() * 2);
    return opt[randamIdx];

};

const drawGame = () => {

    msg.innerText = "Game was Draw. Play again!";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, computerChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "#b5838d";

    } else {
        computerScore++;
        computerScorePara.innerText = computerScore;
        msg.innerText = `You lost :( Computer ${computerChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "#ae2012";
        computerScore++;
    }
}

const playGame = (userChoice) => {

    //generate computer choice

    const computerChoice = genComputerChoice();

    if (userChoice === computerChoice) {
        drawGame();

    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = computerChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = computerChoice === "scissors" ? false : true;
        } else {
            userWin = computerChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, computerChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {

        const userChoice = choice.getAttribute("id");

        playGame(userChoice);
    });
});