let molesHungry = document.querySelectorAll('.mole') 
const wormContainer = document.querySelector('.worm-container');
let holes = document.querySelectorAll('.hole');
let score = 0;


let count = 0;
function randomHole() {
   let showMole = molesHungry[Math.floor(Math.random() * 10)]
   showMole.style.display = "block"; // set a random hole to have a mole in it

    if (showMole.src = "./mole-game/king-mole-hungry.png") {
        setTimeout(() => {
            showMole.src = "./mole-game/king-mole-sad.png"
            setTimeout(() => {
                showMole.src = "./mole-game/king-mole-leaving.png"
            }, 300)
            setTimeout(() => {
                showMole.style.display = "none"
            }, 500)
        }, 10000)
    } 
    
    if (showMole.src = "./mole-game/mole-hungry.png"){
        setTimeout(() => {
            showMole.src = "./mole-game/mole-sad.png"
            setTimeout(() => {
                showMole.src = "./mole-game/mole-leaving.png"
            }, 300)
            setTimeout(() => {
                showMole.style.display = "none"
            }, 500)
        }, 5000)
    }

    count++;
    //console.log(count);

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
        if (molesHungry[i].src === "file:///C:/Users/16788/Documents/elise_coding/frontendmasters_bootcamp/frontendmasters_bootcamp/portfolio/Feed-A-Mole/mole-game/mole-hungry.png") 
        {if (molesHungry[i].src = "./mole-game/mole-fed.png"){
            score += 10;
            setTimeout(() => {
                molesHungry[i].src = "./mole-game/mole-leaving.png"
               setTimeout(() => {
                molesHungry[i].style.display = "none"
               }, 200) 
            }, 500);
            }
        } 
        else if (molesHungry[i].src = "./mole-game/king-mole-fed.png") {
            score += 20;
            setTimeout(() => {
                molesHungry[i].src = "./mole-game/king-mole-leaving.png"
                setTimeout(() => {
                    molesHungry[i].style.display="none"
                }, 200)
            }, 500);
        }
    wormContainer.style.display = "block";
    wormContainer.style.width = `${score}%`;
    console.log (`the score is ${score}`)
    if (score >= 100) {
        document.getElementById("wrapper").remove("wrapper")
        document.getElementById("win").style.display = "block";
    }
});
}