'use strict';

//Select elements

const player0E1 = document.querySelector('.player--0');
const player1E1 = document.querySelector('.player--1');
const diceE1 = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const score0E1 = document.getElementById('score--0'); 
const score1E1 = document.getElementById('score--1'); 
let score0 = 0;
let score1 = 0;

score0E1.textContent = 0;
score1E1.textContent = 0;
diceE1.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

function player_switch() {
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0E1.classList.toggle('player--active');
    player1E1.classList.toggle('player--active');
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = 
    currentScore;
}

btnRoll.addEventListener('click', function() {
    if (score0 < 20 && score1 < 20) {   
        // 1. Generate random number
        const dice = Math.trunc(Math.random() * 6) + 1;
        
        // 2. display
        diceE1.classList.remove('hidden');
        diceE1.src = `dice-${dice}.png`;
        
        // 3. check for roll 1
        if (dice !== 1) {
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = 
                currentScore;
        }
        else {
            currentScore = 0;
            document.getElementById(`current--${activePlayer}`).textContent = 
            currentScore;
            player_switch();
        }
    }
});

btnHold.addEventListener('click', function() {
    if (score0 < 20 && score1 < 20) {  
        if (activePlayer === 0) {
            score0 += currentScore;
            score0E1.textContent = score0;
        }        
        else {
            score1 += currentScore; 
            score1E1.textContent = score1;
        }
        player_switch();
        // check win
        if (score0 >= 20) {
            player0E1.classList.add('player--winner');
            player0E1.classList.add('player--winner.name');    
            diceE1.classList.add('hidden');
        }
        if (score1 >= 20) {
            player1E1.classList.add('player--winner');
            player1E1.classList.add('player--winner.name');        
            diceE1.classList.add('hidden');
        }
    }
});

btnNew.addEventListener('click', function() {
    diceE1.classList.add('hidden');
    score0 = 0;
    score1 = 0;
    currentScore = 0;
    activePlayer = 0;
    player0E1.classList.add('player--active');
    player1E1.classList.remove('player--active');
    score0E1.textContent = 0;
    score1E1.textContent = 0;
    document.getElementById(`current--0`).textContent = 0;
    document.getElementById(`current--1`).textContent = 0;
    player0E1.classList.remove('player--winner');
    player0E1.classList.remove('player--winner.name');
    player1E1.classList.remove('player--winner');
    player1E1.classList.remove('player--winner.name');
});
