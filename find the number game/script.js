"use strict";

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Numri eshte i sakte';


// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 25;

// Document.querySelector('.guess').value;
let secretNumber = Math.trunc(Math.random()* 20) + 1;
let score = 20;
let highscore = 0;
let displayMessage = function (message){
    document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);
    console.log(document.querySelector('.guess').value);
    if (!guess ){
        displayMessage('Ju nuk keni dhene si input nje numer');
        // document.querySelector('.message').textContent = 'Ju nuk keni dhene si input nje numer'
    //Nese perdoruesi e ka gjetur si numer
    }else if (guess === secretNumber){
        document.querySelector('.message').textContent = '!!!PERGJIGJE E SAKTE!!!'
        // document.querySelector('.highscore').textContent = 
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.color = '#FF0000';
        document.querySelector('.number').style.width = '35rem';
        document.querySelector('.number').textContent= secretNumber;
        if(score > highscore){
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
        }
        
        
        // nese perdoruesi nuk e gjen numrin
    }else if (guess !== secretNumber){
        if(score > 0) {
        score = score - 1;
        document.querySelector('.message').textContent = guess > secretNumber ? 'numri qe keni vendosur eshte me i MADH se numri i sakte' : 
        'numri qe keni vendosur eshte me i VOGEL se numri i sakte';
        document.querySelector('.score').textContent = score;
    }else{
        document.querySelector('.message').textContent = 'JU E HUMBET LOJEN';

    }}else if(guess < secretNumber){
        if(score > 0 ){
        score --;
        document.querySelector('.message').textContent = 'Numri qe keni vendosur eshte me i VOGEL se numri i sakte';
        document.querySelector('.score').textContent = score;
    }else{
        document.querySelector('.message').textContent = 'JU E HUMBET LOJEN';
    }
}});


//butoni try again qe do te na coj ne stadin fillestar te lojes

document.querySelector('.again').addEventListener('click', function(){

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').style.color = '#333';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent= '?'
    score = 20;
    secretNumber = Math.floor(Math.random()* 20);
    document.querySelector('.guess').textContent= '';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = ' ';




});
// tento te rikrijosh dhe nje here menyren e pare te kontrollimit te 2 numrave 
// atij qe jepet si input dhe numrit te sakte te gjeneruar nga math.random

