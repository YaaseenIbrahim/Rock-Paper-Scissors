const compChoiceDisplay = document.querySelector("#compChoiceDisplay")
const userChoiceDisplay = document.querySelector('#userChoiceDisplay')
const resultText = document.querySelector('#resultText')
const buttons = Array.from(document.querySelectorAll('button'))
const options = ["Rock", "Paper", "Scissors"]
// const winsDisplay = document.querySelector('#counters').children[0]
// const lossesDisplay = document.querySelector('#counters').children[1]
// const drawsDisplay = document.querySelector('#counters').children[2]
let draws = wins = losses = 0

buttons.forEach(button => {
    button.onclick = () => {
        // Showing what you picked
        userChoiceDisplay.innerText = button.innerText
        // Using random generator to show what comp picked
        const compChoice = Math.floor(Math.random() * options.length)
        compChoiceDisplay.innerText = options[compChoice]
        
        if (userChoiceDisplay.innerText == compChoiceDisplay.innerText) {
            resultText.innerText = "It's a draw!"
            draws = draws+1
            drawsDisplay.innerText = 'Draws:'+ draws 
        } 
        else if (userChoiceDisplay.innerText == options[compChoice+1]) {
            resultText.innerText = "You won!"
            wins = wins + 1
            winsDisplay.innerText = 'Wins:'+ wins
        } 
        else if (userChoiceDisplay.innerText == options[compChoice-1]){
            resultText.innerHTML = "You lost!"
            losses = losses + 1
            lossesDisplay.innerText = 'Losses:' + losses
        }
        else if (compChoice == 0 ){ //For the comp=rock and you=scissor combo since array cant -1 above limit
            resultText.innerText = "You lost!"
            losses = losses + 1
            lossesDisplay.innerText = 'Losses:' + losses
        }
        else { //For the you=rock and comp=scissor combo since array cant +1 above limit
            resultText.innerText = "You won!"
            wins = wins + 1
            winsDisplay.innerText = 'Wins:' + wins
        }
    }
})



