'use strict';



// make an easteregg when you click around the site

/*
let secretNumber = Math.floor(Math.floor() * 20) + 1;
let score = 0; // starting score
let highscore = 0; // starting highscore



const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};


document.querySelector('.check').addEventListener('click', function () {
    const guess = number(document.querySelector('.guess').value);

    if (!guess) {
        displayMessage('No number!');
    } else if (guess === secretNumber) {
        displayMessage('Correct number!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#ffffff';
        document.querySelector('.number').style.width = '30rem';

        if (score < highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        secretNumber = Math.floor(Math.floor() * 20) + 1;
        score = 0
        document.querySelector('.score').textContent = score;
    } else {
        score++;
        document.querySelector('.score').textContent = score;
        displayMessage(guess > secretNumber ? 'too high!' : 'too low!');

        document.querySelector('.guess').value = '';
    }});

document.querySelector('.again').addEventListener('click', function () {
    score = 0; // Reset score
    secretNumber = Math.floor(Math.random() * 20) + 1; // Generate new random number

    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});


*/

'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1; // Generate a number between 1 and 20
let score = 0; // Starting score
let highscore = 0; // starting highscore

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value); // Get user's guess
    const message = document.querySelector('.message'); // Get message element

    // Check if the guess is valid
    if (!guess) {
        message.textContent = 'No number!'; // If no number entered
    } else if (guess === secretNumber) {
        // If guess is correct
        message.textContent = 'Correct Number!';
        document.querySelector('.number').textContent = secretNumber; // Show the correct number

        // Update highscore if the score is lower than current highscore
        if (score < highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        // Reset for a new game (if needed)
        // secretNumber = Math.trunc(Math.random() * 20) + 1;

    } else {
        // If guess is wrong
        message.textContent = guess > secretNumber ? 'Too high!' : 'Too low!';
        score++; // Increase score by 1
        document.querySelector('.score').textContent = score; // Update score
    }

    // Clear the input field after each check
    document.querySelector('.guess').value = '';
});

// Reset the game when clicking "Again!"
document.querySelector('.again').addEventListener('click', function () {
    score = 0; // Reset the score
    secretNumber = Math.trunc(Math.random() * 20) + 1; // Generate new secret number
    document.querySelector('.score').textContent = score; // Reset score display
    document.querySelector('.message').textContent = 'Start guessing...'; // Reset message
    document.querySelector('.number').textContent = '?'; // Reset number display
    document.querySelector('.guess').value = ''; // Clear input
});

