'use strict';

let secretNumber = Math.trunc(Math.random() * 20 )+ 1 ;
let score = 5;
let highscore = 0;
const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click' , function() { 
const guess = Number(document.querySelector('.guess').value);
console.log(guess , typeof guess);

//no input
if(!guess){
    displayMessage('no number! no mumber!...')

//player wins
}else if (guess === secretNumber){

    displayMessage('correct number! YAyyy')
    document.querySelector('body').style.backgroundColor  = '#60b347' ;
    document.querySelector('.number').style.width = '30rem'
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore){
        highscore = score
        document.querySelector('.highscore').textContent = highscore;
    }

//guess is too high


} else if (guess !== secretNumber) {
    if(score > 1){
    displayMessage(  
    guess > secretNumber ? 'too high! man too high!!' : 'too low! man too low!!')
    score--;
    document.querySelector('.score').textContent = 
    score;
    }else {
        displayMessage('You lost the game man!!')
        document.querySelector('.score').textContent = 
        0;
    }


}
}); 

document.querySelector('.again').addEventListener('click' , function(){
    score  = 5;
    secretNumber = secretNumber = Math.trunc(Math.random() * 20 )+ 1;
    document.querySelector('.message').textContent = 'start guessing ...';
    document.querySelector('.score').textContent =  score;
    document.querySelector('.number').textContent =  '?';
    document.querySelector('.guess').value='';
    document.querySelector('body').style.backgroundColor  = '#222' ;
    document.querySelector('.number').style.width = '15rem';




})
