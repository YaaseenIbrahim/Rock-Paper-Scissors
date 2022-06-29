const compChoiceDisplay = document.querySelector("#compChoiceDisplay")
const userChoiceDisplay = document.querySelector('#userChoiceDisplay')
const resultText = document.querySelector('#resultText')
const buttons = Array.from(document.querySelectorAll('button'))
const options = ["Rock", "Paper", "Scissors"]


buttons.forEach(button => {
    button.onclick = () => {
        // Showing what you picked
        userChoiceDisplay.innerText = button.innerText
        // Using random generator to show what comp picked
        const compChoice = Math.floor(Math.random() * options.length)
        compChoiceDisplay.innerText = options[compChoice]
        
        if (userChoiceDisplay.innerText == compChoiceDisplay.innerText) {
            resultText.innerText = "It's a draw!"
        } 
        else if (userChoiceDisplay.innerText == options[compChoice+1]) {
            resultText.innerText = "You won!"
        } 
        else if (userChoiceDisplay.innerText == options[compChoice-1]){
            resultText.innerHTML = "You lost!"
        }
        else if (compChoice == 0 ){ //For the comp=rock and you=scissor combo since array cant -1 above limit
            resultText.innerText = "You lost!"
        }
        else { //For the you=rock and comp=scissor combo since array cant +1 above limit
            resultText.innerText = "You won!"
        }
    }
})


