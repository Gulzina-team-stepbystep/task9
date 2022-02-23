let randomNumber = Math.floor(Math.random() * 10) + 1;
const lastResult = document.querySelector('.message');

const guessSubmit = document.querySelector('#guess-btn');
const guessField = document.querySelector('#guess-input');

document.querySelector('.min-num').textContent = "1";
document.querySelector('.max-num').textContent = "10";

let guessCount = 1;
let resetButton;

function checkGuess() {
    const userGuess = Number(guessField.value);
    if (userGuess === randomNumber) {
        lastResult.textContent = 'Вы угадали, поздравляем!🥳';
        setGameOver();
    } else if (guessCount === 3) {
        lastResult.textContent = 'Вы проиграли😣';
        setGameOver();
    } else {
        if(userGuess < randomNumber) {
            lastResult.textContent = 'Попробуйте число побольше🤔';
        } else if (userGuess > randomNumber) {
            lastResult.textContent = 'Попробуйте число поменьше🤔';
        }
    } 

    guessCount++;
    guessField.value = '';
    guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);
function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Новая игра';
    document.querySelector('container').appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    guessCount = 1;
    const resetParas = document.querySelectorAll('.message');
    for (const resetPara of resetParas) {
        resetPara.textContent = '';
    }
    resetButton.parentNode.removeChild(resetButton);
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
    lastResult.style.backgroundColor = 'lightgreen';
    randomNumber = Math.floor(Math.random() * 10) + 1;
}



