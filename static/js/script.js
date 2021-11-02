// Challenge 1: Your age in days
let resultOne = document.querySelector('#flex-box-result-1');
let resultTwo = document.querySelector('#flex-box-result-2');
resultOne.style.display = 'none';
resultTwo.style.display = 'none';
function ageInDays(){
let date = new Date();
let currentYear = date.getFullYear();
let birthYear = prompt("What year were you born...?");
if(!(birthYear < 1900)){
    if (birthYear > currentYear) {
        resultOne.style.display = 'block';
        let h1 = document.createElement('h1');
        let textAnswer = document.createTextNode('You are not born yet!');
        h1.setAttribute('id','ageInDays' );
        h1.appendChild(textAnswer);
        document.getElementById('flex-box-result-1').appendChild(h1);
    } else {
        let ageInDay = (currentYear - birthYear) * 365;
        resultOne.style.display = 'block';
        let h1 = document.createElement('h1');
        let textAnswer = document.createTextNode('You are '+ageInDay+' days old.');
        h1.setAttribute('id','ageInDays' );
        h1.appendChild(textAnswer);
        document.getElementById('flex-box-result-1').appendChild(h1);
    }
} else {
    resultOne.style.display = 'block';
    let h1 = document.createElement('h1');
    let textAnswer = document.createTextNode('You are not alive...');
    h1.setAttribute('id','ageInDays' );
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result-1').appendChild(h1);
}
}

function reset() {
    resultOne.style.display = 'none';
    document.getElementById('ageInDays').remove();
}

// CAT generator 

function generateCat(){
    resultTwo.style.display = 'block';
    let image = document.createElement('img');
    let div = document.getElementById('flex-box-result-2');
    image.src = "https://thecatapi.com/api/images/get?formet=src&type=gif&size=small";
    div.appendChild(image)
}

// Rock, Paper, Scissors

function rpsGame(yourChoice){
    let humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = botChoiceString(botChoiceInt());
    console.log(botChoice);
    let result = decideWinner(humanChoice,botChoice);
    let message = finalMassage(result);
    rpsFrontEnd(humanChoice, botChoice, message)
    console.log(result);
    console.log(message);
}

function botChoiceInt() {
    return Math.floor(Math.random() * 3);
}

function botChoiceString(number) {
    return ["rock", "paper", "scissors"][number];
}

function decideWinner(yourChoice,computerChoice){
    let rpsDatabase = {
        "rock":{"scissors":1, "rock":0.5, "paper":0},
        "paper":{"rock":1, "paper":0.5, "scissors":0},
        "scissors":{"paper":1, "scissors":0.5, "rock":0}
    };

    let yourScore = rpsDatabase[yourChoice][computerChoice];
    let computerScore = rpsDatabase[computerChoice][yourChoice];
    return [yourScore, computerScore] ;
}

function finalMassage([yourScore,computerScore]) {
    if(yourScore === 0){
        return { 'message': 'You lost!', 'color': 'red'};
    } else if(yourScore === 0.5){
        return { 'message': 'You tied', 'color': 'blue'};
    } else {
        return { 'message': 'You won!', 'color': 'green'};
    }
}


function rpsFrontEnd(humanImageChoice, botImageChoice, finalMassage) {
    let imagesDatabase = {
        "rock": document.getElementById('rock').src,
        "paper": document.getElementById('paper').src,
        "scissors": document.getElementById('scissors').src,
    }
    document.getElementById("rock").remove();
    document.getElementById("paper").remove();
    document.getElementById("scissors").remove();

    let humanImageDiv = document.createElement('div');
    let botDiv = document.createElement('div');
    let messageDiv = document.createElement('div');

    humanImageDiv.innerHTML = "<img src='" +imagesDatabase[humanImageChoice]+ "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>"
    document.getElementById('flex-box-container-3').appendChild(humanImageDiv);

    messageDiv.innerHTML = "<h1 style='color:"+finalMassage.color+"; font-size:60px; padding:30px'>"+finalMassage.message+"</h1>"
    document.getElementById('flex-box-container-3').appendChild(messageDiv);

    botDiv.innerHTML = "<img src='" +imagesDatabase[botImageChoice]+ "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>"
    document.getElementById('flex-box-container-3').appendChild(botDiv);
}

//Challenge 4: change color of all button

let allButton = document.getElementsByTagName('button');
console.log(allButton);

let copyAllButton = [];
for(let i=0; i<allButton.length; i++) {
    copyAllButton.push(allButton[i].classList[1]);
}

console.log(copyAllButton);

function buttonColorChange(colorName) {
    if(colorName.value === 'red') {
        buttonsRed();
    } else if(colorName.value === 'green') {
        buttonsGreen();
    } else if(colorName.value === 'yellow') {
        buttonsYellow();
    } else if(colorName.value === 'random') {
        buttonRandomColors()
    } else if(colorName.value === 'reset') {
        buttonColorReset();
    }
}

function buttonsRed() {
    for(let i=0; i<allButton.length; i++) {
        allButton[i].classList.remove(allButton[i].classList[1]);
        allButton[i].classList.add('btn-danger');
    }
}

function buttonsGreen() {
    for(let i=0; i<allButton.length; i++) {
        allButton[i].classList.remove(allButton[i].classList[1]);
        allButton[i].classList.add('btn-success');
    }
}

function buttonsYellow() {
    for(let i=0; i<allButton.length; i++) {
        allButton[i].classList.remove(allButton[i].classList[1]);
        allButton[i].classList.add('btn-warning');
    }
}

function buttonRandomColors(){
    let classArray = ['btn-primary', 'btn-success', 'btn-danger' , 'btn-warning'];
    for(let i=0; i<allButton.length; i++) {
        allButton[i].classList.remove(allButton[i].classList[1]);
        let randomNumbers = Math.floor(Math.random() * 4);
        let randomColors = classArray[randomNumbers];
        allButton[i].classList.add(randomColors);
    }
}

function buttonColorReset() {
    for(let i=0; i<allButton.length; i++) {
        allButton[i].classList.remove(allButton[i].classList[1]);
        allButton[i].classList.add(copyAllButton[i]);
    }
}


// challenage 5: blackjack
let blackjackGame = {
    'you':{'scoreSpan': '#your-result', 'div':'.your-box', 'score':0},
    'dealer':{'scoreSpan': '#dealer-result', 'div':'.dealer-box', 'score':0},
    'cards': ['5', '6', '7', '8', '9', '10', 'K', 'J', 'Q', 'A'],
    'cardsMap': {'5':5, '6':6, '7':7, '8':8, '9':9, '10':10, 'K':10, 'J':10, 'Q':10, 'A':[1,11]},
    'wins':0,
    'losts':0,
    'draws':0,
}

const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];
const CARDS = blackjackGame['cards'];
const CARDSMAP = blackjackGame['cardsMap'];

const hitSound = new Audio('static/sounds/swish.m4a');
const winSound = new Audio('static/sounds/cash.mp3');
const lostSound = new Audio('static/sounds/aww.mp3');

document.querySelector('#hit').addEventListener('click', blackjackHit);
document.querySelector('#stand').addEventListener('click', blackjackStand)
document.querySelector('#deal').addEventListener('click', blackjackDeal);


function blackjackHit() {
    let cards = randomCard();
    showCard(cards,YOU);
    updateScore(cards,YOU);
    showScore(YOU);
}

function blackjackStand(){
    let cards = randomCard();
    showCard(cards,DEALER);
    updateScore(cards,DEALER);
    showScore(DEALER);

    if (DEALER['score'] > 15) {
        showResult(computeWinner());
    }
}

function blackjackDeal() {
    removeCard(YOU,DEALER);
    removeScore(YOU,DEALER);
}

function showCard(card,activePlayer) {
    if(activePlayer['score'] <= 21) {
        let cardImage = document.createElement('img');
        cardImage.src = `static/images/${card}.png`;
        document.querySelector(activePlayer['div']).appendChild(cardImage);
        hitSound.play();
    }
}


function removeCard(you,dealer) {
    let yourImage = document.querySelector(you['div']).querySelectorAll('img');
    let dealerImage = document.querySelector(dealer['div']).querySelectorAll('img');
    for(let i=0; i<yourImage.length; i++) {
        yourImage[i].remove();
    }

    for(let i=0; i<dealerImage.length; i++) {
        dealerImage[i].remove();
    }
}

function removeScore(you,dealer) {
    you['score'] = 0;
    dealer['score'] = 0;
    document.querySelector(you['scoreSpan']).textContent = 0;
    document.querySelector(dealer['scoreSpan']).textContent = 0;
    document.querySelector(you['scoreSpan']).style.color = '#ffffff';
    document.querySelector(dealer['scoreSpan']).style.color = '#ffffff';
}

function randomCard() {
    let randomIndex = Math.floor(Math.random() * 10);
    return CARDS[randomIndex];
}

function updateScore(card,activePlayer) {
    if(card === 'A') {
        //if adding 11 keeps you below 21, add 11, otherwise add 1
        if(activePlayer['score'] + CARDSMAP[card][1] <= 21){
            activePlayer['score'] += CARDSMAP[card][1];
        } else {
            activePlayer['score'] += CARDSMAP[card][0];
        }
    } else {
    activePlayer['score'] += CARDSMAP[card];
    }
}

function showScore(activePlayer) {
    if(activePlayer['score'] > 21) {
        document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST!!!';
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
    }else {
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
    }
}


// compute winner and return who won 

function computeWinner() {
    let winner ;
    if(YOU['score'] <= 21){
        if (YOU['score'] > DEALER['score'] || DEALER['score'] > 21) {
            winner = YOU;
            blackjackGame['wins']++;

        }else if (YOU['score'] < DEALER['score']) {
            winner = DEALER;
            blackjackGame['losts']++;

        }else if (YOU['score'] === DEALER['score']) {
            blackjackGame['draws']++;
            
        }

    }else if (YOU['score'] > 21 && DEALER['score'] <= 21) {
        winner = DEALER;
        blackjackGame['losts']++;

    }else if (YOU['score'] > 21 && DEALER['score'] > 21) {
        blackjackGame['draws']++;
    }
    console.log(blackjackGame);
    return winner;
}


function showResult(winner) {
    let message, messageColor; 
    if(winner === YOU) {
        document.querySelector('.wins').textContent = blackjackGame['wins'];
        message = "You won!";
        messageColor = "green";
        winSound.play();
    } else if (winner === DEALER) {
        document.querySelector('.losses').textContent = blackjackGame['losts'];
        message = "You lost!";
        messageColor = "red";
        lostSound.play();
    }else {
        document.querySelector('.draws').textContent = blackjackGame['draws'];
        message = "You drew";
        messageColor = "black";
    }

    document.querySelector('#flex-box-result-5').textContent = message;
    document.querySelector('#flex-box-result-5').style.color = messageColor;
}