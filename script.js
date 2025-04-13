const targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const feedback = document.getElementById('feedback');

function validateInput(value) {
    if (isNaN(value) || value < 1 || value > 100) {
        feedback.textContent = 'Please enter a valid number between 1 and 100.';
        feedback.className = 'warning'; 
        return false; 
    }
    return true; 
}

function updateFeedback(message, type) {
    feedback.textContent = message;
    feedback.className = type;
}


function disableGameControls() {
    guessInput.disabled = true;
    guessButton.disabled = true;
}


function handleGuess() {
    if (!guessInput || !guessButton || !feedback) {
        console.error("Required HTML elements not found!");
        return;
    }

    const userGuess = parseInt(guessInput.value);
    attempts++;

   
    feedback.className = '';

    if (!validateInput(userGuess)) {
       
        guessInput.focus();
        guessInput.select();
        return;
    }


    if (userGuess === targetNumber) {
        updateFeedback(`Correct! You guessed the number ${targetNumber} in ${attempts} attempts.`, 'correct');
        disableGameControls();
    } else if (userGuess < targetNumber) {
        updateFeedback('Too low! Try again.', 'incorrect');
    } else {
        updateFeedback('Too high! Try again.', 'incorrect');
    }

    
    if (!guessInput.disabled) { 
        guessInput.focus();
        guessInput.select(); 
    }
}


document.addEventListener('DOMContentLoaded', () => {


    if (guessButton) {
        guessButton.addEventListener('click', handleGuess);
    } else {
        console.error("Guess button not found!");
    }

    if (guessInput) {
        guessInput.addEventListener('keypress', function(event) {
     
            if (guessInput.disabled) return;
            if (event.key === 'Enter') {
           
                event.preventDefault();
                handleGuess();
            }
        });
    } else {
        console.error("Guess input not found!");
    }

    console.log("Target number (for testing):", targetNumber); 
    console.log("Game initialized.");
});
