// # Tic Tac Toe

// 1. Create a grid of nine boxes
// 1. When any box is clicked a red `X` appears
// 1. When the next box is clicked a Blue `O` appears
// 1. #1 and #2 are repeated until a row of 3 of the same character is created
// 1. When a win happens:
//     1. Alert the players who won
//     1. Disallow any further clicks on the game board
//     1. Display a `Play Again` button that resets the game
// 1. For a tie:
//     1. Alert players that game has ended in a tie
//     1. Display a `Play Again` button that resets the game

//Counter- value manipulated by click event determines X or O output 
let turncounter = 1

//Arrays to hold refrence to id of the html sections depending on if they have recieved the div containing an x or an o
const sectionWithX = []
const sectionWithO = []

//If this value is true, winning message is published to DOM, if still false after 9 or more turns, tie message is published to DOM
let disableBoolean = false

const allSections = document.querySelectorAll(".individual_box")

let body = document.querySelector("#body")


// function to create div with X || O along with appropriate class
const fillInXorO = (letter, className) => `
        <div class= "${className}">${letter}</div>  

`

// function to display winning message or tie message 
const youWinOrTieMessage = (message, className) => `
<div class="${className}">${message}</div>
<button value="Refresh Page" onClick="window.location.reload()" class="button"  >LET'S PLAY ONE MORE 'GAIN!</button>
`


//Function that checks arrays for winning section id combos in rows
const rowCheck = (arrayYouAreChecking) => {
        if (arrayYouAreChecking.includes("1") && arrayYouAreChecking.includes("2") && arrayYouAreChecking.includes("3")) {
                disableBoolean = true 
        }
        else if (arrayYouAreChecking.includes("4") && arrayYouAreChecking.includes("5") && arrayYouAreChecking.includes("6")) {
                disableBoolean = true 
        }
        else if (arrayYouAreChecking.includes("7") && arrayYouAreChecking.includes("8") && arrayYouAreChecking.includes("9")) {
                disableBoolean = true
        }
}

//Function that checks arrays for winning section id comobs in columns 
const columnCheck = (arrayYouAreChecking) => {
        if (arrayYouAreChecking.includes("1") && arrayYouAreChecking.includes("4") && arrayYouAreChecking.includes("7")) {
                disableBoolean = true 
        }
        else if (arrayYouAreChecking.includes("2") && arrayYouAreChecking.includes("5") && arrayYouAreChecking.includes("8")) {
                disableBoolean = true 
        }
        else if (arrayYouAreChecking.includes("3") && arrayYouAreChecking.includes("6") && arrayYouAreChecking.includes("9")) {
                disableBoolean = true 
        }
        
}

//Function that checks arrays for winning section id combos diagonally 
const diagonalCheck = (arrayYouAreChecking) => {
        if (arrayYouAreChecking.includes("3") && arrayYouAreChecking.includes("5") && arrayYouAreChecking.includes("7")) {
                disableBoolean = true
        }
        else if (arrayYouAreChecking.includes("9") && arrayYouAreChecking.includes("5") && arrayYouAreChecking.includes("1")) { 
                disableBoolean = true 
        }
        
        
}

// Add a click event listner to each section div's that have the value specified in allSection
for (const individualSection of allSections) { 
    individualSection.addEventListener(
        "click",
        (event) => {   
            // increment the turn counter by one and assign the value of the CURRENT individual section id the the variable sectionId
            turncounter++
            const sectionId = individualSection.id
            //if the turn counter is odd, publish the o section, and push the related section id to the sectionWithO array.
            if (turncounter%2 > 0) {
                individualSection.innerHTML = fillInXorO("o", "bigBlueO")
                individualSection.outerHTML = individualSection.outerHTML
                sectionWithO.push(sectionId)
            }
            // else -i.e. if the turncounter is even- publish the x section, and push the related section id to the sectionWithX array.
            else {
                individualSection.innerHTML = fillInXorO("x", "bigRedX")
                individualSection.outerHTML = individualSection.outerHTML
                sectionWithX.push(sectionId)
                }       
           // if 5 or more turns have been taken -the minimum number of turns necessary for one player to win tic tac toe- run all of the array checking functions
           if (turncounter >= 5) {
                columnCheck(sectionWithO)
                rowCheck(sectionWithO)
                columnCheck(sectionWithX)
                rowCheck(sectionWithX)
                diagonalCheck(sectionWithO)
                diagonalCheck(sectionWithX)
                //if the boolean is true, run the winning message
                if (disableBoolean === true)
                {
                body.innerHTML = youWinOrTieMessage("YOU WIN, MAH FREND!", "winningOrTie")
                }
                //if the function isnt true, check to see if the counter is at ten or more, if so display the tie message
                else if (turncounter >= 10) {
                body.innerHTML = youWinOrTieMessage("SORRY BUDDIES, YA'LL TIED. <3", "winningOrTie")

                }}
           }
    )}
    
