'use strict';


const scoreElement = document.querySelector('.score');
const highscoreElement = document.querySelector('.highscore');
const numberElement = document.querySelector('.number');
const guessInput = document.querySelector('.guess');
const checkButton = document.querySelector('.check');
const againButton = document.querySelector('.again');
const messageElement = document.querySelector('.message');
const guessesElement = document.querySelector('.guesses');

let secretNumber = Math.floor(Math.random() * 20) + 1; // Random number between 1 and 20
let score = 0;
let highscore = 0;
let guessHistory = [];

// Function to display a message
const displayMessage = (message) => {
    messageElement.textContent = message;
};

// Function to update guess history
const updateGuesses = () => {
    guessesElement.textContent = guessHistory.join(', ');
};

// Function to check the users guess
const checkGuess = () => {
    const guess = Number(guessInput.value); // Get user input and convert to number
    guessInput.value = ''; // Clear input

    // Validate input
    if (!guess || guess < 1 || guess > 20) {
        displayMessage('🚫 Please enter a number between 1 and 20!');
        return;
    }

    // Add guess to history
    guessHistory.push(guess);
    updateGuesses();

    // Check if the guess is correct
    if (guess === secretNumber) {
        displayMessage('✅ Correct Number!');
        numberElement.textContent = secretNumber; // Show the correct number
        score++; // Increase score for a correct guess
        showConfetti(); // Show confetti when correct

        // Check for highscore
        if (score > highscore) {
            highscore = score;
            highscoreElement.textContent = highscore; // Update highscore
        }

    } else if (guess < secretNumber) {
        // Guess is too low
        displayMessage('📉 Too Low!');
        score++; // Increase score for a wrong guess
    } else {
        // Guess is too high
        displayMessage('📈 Too High!');
        score++; // Increase score for a wrong guess
    }

    // Update score display
    scoreElement.textContent = score;
};


// Function to reset the game
const resetGame = () => {
    score = 0;
    guessHistory = [];
    secretNumber = Math.floor(Math.random() * 20) + 1; // Reset secret number
    numberElement.textContent = '?'; // Hide the number
    scoreElement.textContent = score; // Reset score display
    guessInput.value = ''; // Clear input
    messageElement.textContent = 'Start guessing...'; // Reset message
    guessesElement.textContent = ''; // Clear guess history
};

// Event listeners
checkButton.addEventListener('click', checkGuess);
againButton.addEventListener('click', resetGame);
