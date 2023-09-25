const optionsListener = document.querySelector(".options-container");
optionsListener.addEventListener("click", (event) => {
    switch (scoreboard.getAttribute("id")) {
        case "player-wins": isNewGame(true); break;
        case "machine-wins": isNewGame(true); break;
        default: break;
    }

    switch (event.target.getAttribute("id")){
        case "rock": playRound("rock"); break;
        case "paper": playRound("paper"); break;
        case "scissors": playRound("scissors"); break;
    }

    scoreboardCheck();
})

const tryAgainListener = document.querySelectorAll

const choiceRange = ["rock", "paper", "scissors"];
let playerCount = 0;
let machineCount = 0;
const scoreboard = document.querySelector(".scoreboard");
const funnyResult = document.createElement("img");
const gameScreen = document.querySelector(".game-screen");


function isNewGame (newgame) {
    if (newgame) {
        playerCount = 0;
        machineCount = 0;
        gameScreen.removeChild(funnyResult);
        scoreboard.removeAttribute("id");
    }
}

function scoreboardCheck() {
    if (playerCount < machineCount) {
        scoreboard.style.backgroundColor = "red";
    } else if (playerCount > machineCount) {
        scoreboard.style.backgroundColor = "green";
    }else {
        scoreboard.style.backgroundColor = "gray";
    }

    if (playerCount == 5 || machineCount == 5) {
        const childsToRemove = document.querySelectorAll(".game-screen *");
        funnyResult.setAttribute("style", "width: 90%; height: 90%")
        childsToRemove.forEach((child) => {gameScreen.removeChild(child)});

        if (playerCount == 5) {
            scoreboard.textContent = "O JOGADOR VENCEU!";
            scoreboard.setAttribute("style", "background-color: green; color: white;");
            scoreboard.setAttribute("id", "player-wins")
            funnyResult.setAttribute("src", "https://media.tenor.com/U-ZcEDd9DHcAAAAd/ceo-erick-hayden.gif");
        } else if (machineCount == 5) {
            scoreboard.textContent = "O JOGADOR PERDEU!";
            scoreboard.setAttribute("style", "background-color: red; color: white;");
            scoreboard.setAttribute("id", "machine-wins")
            funnyResult.setAttribute("src", "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXphZTkwaHU0a2E0NXk1YmJnN3B3ZzlxeGNham8xNmkxbTRma29sMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/S53EdsJhFlhmZuDaEE/giphy.gif");
        }

        gameScreen.appendChild(funnyResult);

        return true;
    }
    return false;
}

function playRound (playerSelect) {
    const computerSelect = () => {return Math.floor(Math.random() * 3);}
    const computer = computerSelect();
    const player = playerSelect;
    const roundWinner = roundResult(player, computer);

    switch (roundWinner) {
        case 0: break;
        case 1: playerCount++; break;
        case -1: machineCount++; break;
    }

    visualOutputResult(roundWinner);

    // Information to the player
    console.log("This round player throws: " + player);
    console.log("This round the computers throws: " + choiceRange[computer]);
    console.log(roundWinner);

    return roundWinner;

    function visualOutputResult(roundWinner) {
        const resultElement = document.createElement("div")
        const playerChoiceMessage = document.createElement("p");
        const machineChoiceMessage = document.createElement("p");
        const separator = document.createElement("hr");

        switch (roundWinner) {
            case 0: {
                resultElement.textContent = "Draw!";
                resultElement.style.color = "yellow";
                resultElement.classList.add("round-result")
                break;
            }
            case 1: {
                resultElement.textContent = "Win!";
                resultElement.style.color = "green";
                resultElement.setAttribute("class", "round-result");
                break;
            }
            case -1: {
                resultElement.textContent = "Lose!";
                resultElement.style.color = "red";
                resultElement.setAttribute("class", "round-result");
                break;
            }
        }

        scoreboard.textContent = "Jogador " + playerCount + " vs " + machineCount + " Machine";
        playerChoiceMessage.textContent = "This round player throws: " + player;
        playerChoiceMessage.classList.add("game-intro");
        machineChoiceMessage.textContent = "This round the computers throws: " + choiceRange[computer];
        machineChoiceMessage.classList.add("game-intro");

        gameScreen.appendChild(separator);
        gameScreen.appendChild(playerChoiceMessage);
        gameScreen.appendChild(machineChoiceMessage);
        gameScreen.appendChild(resultElement);
        gameScreen.scrollTop = gameScreen.scrollHeight;
    }


    function roundResult(playerChoice, computerChoice){
        const result = choiceToNumber(playerChoice) - computerChoice;
        
        if (playerChoice === computerChoice || result === 0) {return 0} // draw
        else if (result === -1 || result === 2) {return -1} // machine win
        else (result === 1 || result === -2); {return 1} // player win

        function choiceToNumber (choice) {
            switch (choice.toLowerCase()) {
                case "rock": return 0;
                case "paper": return 1;
                case "scissors": return 2;
                default: return choice;
            }
        }
    }
}