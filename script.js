import wordList from "./example-words.json" with { type: "json" };

let chosenWord = "";
let guessedWord = [];
let wrongGuesses = 0;
const maxGuesses = 10;

const hangmanImage = document.querySelector(".hangman-image"); // this will select the first image
const wordDisplay = document.getElementById("word-display");
const alphabetButtons = document.getElementById("alphabet-buttons");
const guessesLeft = document.getElementById("guesses-left");
const message = document.getElementById("message");
const resetButton = document.getElementById("reset-button");

function initGame() {
    chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
    guessedWord = Array(chosenWord.length).fill("_");
    wrongGuesses = 0;
    updateDisplay();
    createAlphabetButtons();
    message.textContent = "";
    // resetButton.style.display = "none";
}

function updateDisplay() {
    wordDisplay.textContent = guessedWord.join(" ");
    guessesLeft.textContent = `Guesses Left: ${maxGuesses - wrongGuesses}`;
    hangmanImage.src = `./assets/img/h-${wrongGuesses}.jpg`;
}
// used ASCII character reference

function createAlphabetButtons() {
    alphabetButtons.innerHTML = "";
    for (let i = 65; i <= 90; i++) {
        const button = document.createElement("button");
        button.textContent = String.fromCharCode(i);
        button.addEventListener("click", handleGuess);
        alphabetButtons.appendChild(button);
    }
}

function handleGuess(event) {
    const letter = event.target.textContent.toUpperCase();
    event.target.disabled = true;

    const upperCaseChosenWord = chosenWord.toUpperCase();

    if (upperCaseChosenWord.includes(letter)) {
        for (let i = 0; i < upperCaseChosenWord.length; i++) {
            if (upperCaseChosenWord[i] === letter) {
                guessedWord[i] = letter;
            }
        }
        if (!guessedWord.includes("_")) {
            endGame("win");
        }
    } else {
        wrongGuesses++;
        if (wrongGuesses >= maxGuesses) {
            endGame("lose");
        }
    }
    updateDisplay();
}

function endGame(result) {
    alphabetButtons.innerHTML = "";
    if (result === "win") {
        message.textContent = "🎊 You Win!";
    } else {
        message.textContent = `😞 You Lose! The word was: ${chosenWord.toUpperCase()}`;
    }
    resetButton.style.display = "block";
}
// reset button will trigger initGame when clicked.
resetButton.addEventListener("click", initGame);
initGame();
