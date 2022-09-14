const holes = document.querySelectorAll('.hole');
let molesHungry = document.querySelectorAll('.mole') 
const wormContainer = document.querySelector('.worm-container');
let score = 0;


let count = 0;
function randomHole() {
   let showMole = molesHungry[Math.floor(Math.random() * 10)]
   showMole.style.display = "block"; // set a random hole to have a mole in it
   
    molesHungry[Math.floor(Math.random() * 10)].style.display = "none"; // set a random hole to not have a mole in it

    count++;
    console.log(count);

  if (count == 10) {
        showMole.src = "./mole-game/king-mole-hungry.png"
        count = 0
    } 
    else { showMole.src = "./mole-game/mole-hungry.png"}
}

function moveMoles() {
let timer = setInterval(randomHole, 1000); 
}

moveMoles() 

for (let i = 0; i < molesHungry.length; i++) {
    molesHungry[i].addEventListener('click', (event) => {
        if (molesHungry[i].src === "file:///C:/Users/16788/Documents/elise_coding/frontendmasters_bootcamp/frontendmasters_bootcamp/portfolio/Feed-A-Mole/mole-game/mole-hungry.png") {
            score += 10;
        } 
        else {score += 20;}  
    molesHungry[i].style.display="none";
    wormContainer.style.display = "block";
    wormContainer.style.width = `${score}%`;
    console.log (`the score is ${score}`)
    if (score >= 100) {
        document.getElementById("wrapper").remove("wrapper")
        document.getElementById("win").style.display = "block";
    }
});
}

// molesHungry[Math.floor(Math.random() * 10)].src = "./mole-game/king-mole-hungry.png"
/*
const moleHungry = document.getElementsByClassName('hungry');
let randomNumber = Math.floor(Math.random() * 10)
let timer = setInterval(hide, 2000); 
let timerTwo = setInterval(show, 4000);

function hide() {
molesHungry.forEach(function() {
    molesHungry[randomNumber].style.display = "none"; 
})
}

function show() {
molesHungry.forEach(function(element, index) {
    molesHungry[randomNumber].style.display = "block"; 
})
}*/


/*function hide() {
    for (let i = moleHungry.length-1; i >= 0; i--) {
        moleHungry[i].style.display = "none"; 
        }
    }

let timer = setInterval(hide, 2000); 
let timerTwo = setInterval(show, 4000);

function show() {
    for (let i = 0; i < 10; i++) {
        moleHungry[i].style.display = "block";
        }
    }


const clear = () => {
    clearInterval(timerTwo);
}

const click = document.addEventListener('click', clear);*/


/*for (let i = moleHungry.length-1; i >= 0; i--) {
    //if (i === 10) break;
    setInterval(function() {
        moleHungry[i].style.display = "none";
         if(i = 0) {
             setInterval(1000)
            } 
   }, i * 1000)
};*/


//function getRandomNumber() {
//return Math.floor(Math.random() * moleHungry.length + 1);
//}

//document.addEventListener('click', function() {
    //document.getElementById("hole-1").style.display = "block";
//});

// function to get a list of random numbers representing the length of the mole-hungry class list
//function getRandomNumber() {
//return Math.floor(Math.random() * moleHungry.length)
// }


//How much time has lapsed since 1/1/1970
//Date.now()
//then = Date.now()
//Date.now() - then --> the amount of time lapsed since Date.now() was called