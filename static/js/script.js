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