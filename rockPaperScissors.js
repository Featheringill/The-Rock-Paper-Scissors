//access let choices object by using choices.player
let choices = {player: null, computer: null}

let weapon = {
    rock: {
        width: 150,
        src: 'dwayneTheRock.png'
    },
    scissors: {
        width: 210,
        src: 'scissorsFighter.png'
    },
    paper: {
        width: 380,
        src: 'paperFighter.png'
    },
}

function createWeaponImage (weaponChoice) {
    let chosenWeapon = weapon[weaponChoice]
    let png = new Image(chosenWeapon.width)
    png.src = chosenWeapon.src
    document.body.appendChild(png)

    return png
}

function choose (weaponChoice) {
    choices.player = weaponChoice
    let playerPng = createWeaponImage(weaponChoice)
    let computerPng = createWeaponImage(randomChoice())

    checkForWinner()
}

// Computer choice
function randomChoice() {
    let computerChoice = Math.random()
    if (computerChoice < 0.34) {
        choices.computer = "rock"
    } 
    else if(computerChoice <= 0.67) {
        choices.computer = "paper"
    } 
    else {
        choices.computer = "scissors"
    }

    return choices.computer
}


// Compare user choice vs computer choice

function checkForWinner() {
    console.log(choices)
    if (choices.player === choices.computer){
        //tie
        alert ("its a tie")
    }
    else if (choices.player === "rock") {
        if (choices.computer === "paper") {
            //computer wins
            alert ("computer wins")
        }
        else {
            //player wins
            alert ("you win")
        }
    }
    else if (choices.player === "paper") {
        if (choices.computer === "rock") {
            //player wins
            alert ("you win")
        }
        else {
            //computer wins
            alert ("computer wins")
        }
    }
    else if (choices.player === "scissors") {
        if (choices.computer === "rock") {
            //computer wins
            alert ("computer wins")
        }
        else {
            //player wins
            alert ("you win")
        }
    }    
}

// function checkForWinner() {
//     let playerComparator
//     let computerComparator
//     if (playerComparator = computerComparator) {
         
//          return "Meh, try again..";
       
//     }
//     if (playerComparator = 1) {
//         if (computerComparator = 3) {
//             // player wins
//             return "THE ROCK FOR THE WIN!";
//         } 
//         else {
//             // computer wins
//             return "Doh! Wipe out!";
//         }
//     }
//     if (playerComparator = 2) {
//         if (computerComparator = 1) {
//             // player wins
//             return "*snicker*";
//         } 
//         else {
//             // computer wins
//             return "wah wah";
//         }
//     }
//     if (playerComparator = 3) {
//         if (computerComparator = 1) {
//             // computer wins
//             return "He's The Rock, what did you expect?";
//         } 
//         else {
//             // scissors wins
//             return "You win, you did your exact job.";
//         }
//     }
// }

// Run the compare function
// var results = compare(playerChoice,computerChoice);
// Display results





//User makes a choice
//Computer makes a random choice
//Compare function will determine who wins


//create three buttons, one for The rock, paper, and scissor respectively
//first, the player clicks a button
//second, the corresponding png appears on screen
//third, computer randomly selects the rock, paper, or scissors
//use compare function  to determine win
//declare win
//play again?




// function choseTheRock () {
//     choices.player = "rock"

//     let theRockPng = new Image(150)
//     theRockPng.src = "dwayneTheRock.png"
//     document.body.appendChild(theRockPng)
//     computerChoice()
//     checkForWinner()

// function chosePaper () {
//     choices.player = "paper"

//     let thePaperPng = new Image(380)
//     thePaperPng.src = "paperFighter.png"
//     document.body.appendChild(thePaperPng)
//     computerChoice()
//     checkForWinner()
  

// function choose (weapon) {
    
// }}

// function choseScissors () {
//     choices.player = "scissors"

//     let theScissorsPng = new Image(210)
//     theScissorsPng.src = "scissorsFighter.png"
//     document.body.appendChild(theScissorsPng)
//     computerChoice()
//     checkForWinner()

// }