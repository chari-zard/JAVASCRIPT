const randomnum = parseInt(Math.random() * 100 + 1); // Random number between 1 and 100
const submit = document.querySelector('#submit-btn');
const userinput = document.getElementById('guess-input');
const prevguess = document.querySelector('#previous-guesses');
const remguess = document.querySelector('#guesses-left');
const startover = document.querySelector('.feedback');

let playgame = true;
let previousguess = [];
let numguess = 10; // Number of guesses allowed

// Updates the display of previous guesses and guesses left
function displayguess() {
    // Clear previous display content
    prevguess.innerHTML = '';

    // Display each guess made by the user with its attempt number
    previousguess.forEach((guess, index) => {
        // Create a new element for each guess
        const guessElement = document.createElement('span');
        guessElement.textContent = `Attempt ${index + 1}: ${guess} `;
        
        // Append the guess to the previous guesses container
        prevguess.appendChild(guessElement);
    });

    // Display the remaining number of guesses
    remguess.textContent = `Attempts Left: ${numguess}`;
}

// Displays feedback messages to the user
function displaymessage(message) {
    startover.textContent = message;
}

// Ends the game and changes the button text to allow restarting
function endgame() {
    playgame = false;
    userinput.disabled = true;
    submit.textContent = 'Play Again';
    submit.removeEventListener('click', onSubmit);
    submit.addEventListener('click', function () {
        window.location.reload(); // Reloads the page to restart the game
    });
}

// Validates the user's guess
function validation(guess) {
    if (isNaN(guess)) {
        alert('Enter a valid number.');
    } else if (guess <= 0 || guess > 100) {
        alert('Enter a number between 1 and 100.');
    } else {
        previousguess.push(guess);
        numguess--; // Decrease the number of guesses left
        displayguess();
        check(guess);
    }
}

// Checks if the guess is correct, too high, or too low
function check(guess) {
    if (guess === randomnum) {
        displaymessage(`You guessed it right! ${randomnum} is the correct choice.`);
        endgame();
    } else if (guess > randomnum) {
        displaymessage(`Your guess is too high. Try again. Attempts left: ${numguess}`);
    } else {
        displaymessage(`Your guess is too low. Try again. Attempts left: ${numguess}`);
    }

    // If no guesses are left, end the game
    if (numguess === 0) {
        displaymessage(`The game is over. The correct number was ${randomnum}.`);
        endgame();
    }
}

// Event listener for submit button click
function onSubmit(e) {
    e.preventDefault();
    const guess = parseInt(userinput.value);
    validation(guess);
    userinput.value = ''; // Clear the input after each guess
}

// Set up the event listener for the submit button if the game is playable
if (playgame) {
    submit.addEventListener('click', onSubmit);
}

// Initial display setup
displayguess();
displaymessage('Guess a number between 1 and 100!');
