const randomnum = parseInt(Math.random() * 100 + 1); // Random number between 1 and 100
const submit = document.querySelector('#submit-btn');
const userinput = document.getElementById('guess-input');
const prevguess = document.querySelector('#previous-guesses');
const remguess = document.querySelector('#guesses-left');
const startover = document.querySelector('.feedback');
const res = document.querySelector('.res');


let playgame = true;
let previousguess = [];
let numguess = 10; // Number of guesses allowed

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
function displayguess() {
    // Display the previous guesses with every attempt
    prevguess.innerHTML = ''; // Clear previous entries
    previousguess.forEach((guess, index) => {
        const guessElement = document.createElement('span');
        guessElement.textContent = `Attempt ${index + 1}: ${guess} `;
        prevguess.appendChild(guessElement);
    });

    remguess.textContent = `Attempts Left: ${numguess}`;
}

function displaymessage(message) {
    res.textContent = message;
}
function endgame(){
    playgame=false;
    userinput.disabled = true;
    submit.textContent = 'play again'
    submit.removeEventListener('click',onSubmit)
    submit.addEventListener('click',function(e){
        window.location.reload();
    })
}