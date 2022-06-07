const promptBox = document.querySelector('.prompt-content')
const userCounter = document.querySelector('.user-score')
const cpuCounter = document.querySelector('.cpu-score')




beginningPrompt()

firstToFive()
//firstToFive()



function beginningPrompt() {
    promptBox.textContent = "Welcome! Ready to play some good \'ole fashioned Rock, Paper, Scissors?"

    setTimeout(() => {
        promptBox.textContent = "This is a first to 5 series"
    }, 2000)

    setTimeout(() => {
        promptBox.textContent = "Select rock, paper, or scissors to compete against the computer"
    }, 4000)
}

function firstToFive() {
    let keepGoing = true
    let userWins = userCounter.textContent
    let cpuWins = cpuCounter.textContent
    let userWinsInt = parseInt(userWins)
    let cpuWinsInt = parseInt(cpuWins)

    userWins = '0'
    cpuWins = '0'

    while(keepGoing) {

        [userWinsInt, cpuWinsInt] = playGame(userWins, cpuWins)
        
        userCounter.textContent = userWinsInt
        cpuCounter.textContent = cpuWinsInt
        

        if (userWinsInt >= 5) {
            keepGoing = false
            promptBox.textContent = "Congrats! You achieved 5 wins before that pesky computer!"
        }
        if (cpuWinsInt >= 5) {
            keepGoing = false
            promptBox.textContent = "Uh oh! Looks like you lost to the computer. It was probably cheating anyway..."
        }
    }
}


function playGame(userW, cpuW) {

    //transform win counter from string to int to avoid concat
    let userInt = parseInt(userW)
    let cpuInt = parseInt(cpuW)
    let gameDecision

    [userInt, cpuInt] = userMove()

    //computerChoice = computerMove()
    
    //get new choices when a tie occurs
    // while(userChoice === computerChoice) {
    //     promptBox.textContent = 'Tie! Pick again.'

    //     userChoice = userMove()

    //     //computerChoice = computerMove()
    // }

    //let decision = userVsComputer(userChoice, computerChoice)

    return [userInt, cpuInt]
}




function userVsComputer(user, computer) {
    switch (user) {
        case 'Rock': 
            if (computer === 'Paper') {
                promptBox.textContent = 'You Lose. Paper beats Rock'
                return [0, 1]
            } else {
                promptBox.textContent = 'You Win! Rock beats Scissors.'
                return [1, 0]
            } 
            break;
        case 'Paper':
            if (computer === 'Scissors') {
                promptBox.textContent = 'You Lose. Scissors beats Paper.'
                return [0, 1]
            } else {
                promptBox.textContent = 'You Win! Paper beats Rock.'
                return [1, 0]
            } 
            break;
        case 'Scissors':
            if (computer === 'Rock') {
                promptBox.textContent = 'You Lose. Rock beats Scissors.'
                return [0, 1]
            } else {
                promptBox.textContent = 'You Win! Scissors beats Paper.'
                return [1, 0]
            }
            break;
        default: 
            alert('Something went very wrong. Restart the page.')
    }
}

function userMove() {
    const buttons = document.querySelectorAll('.user-btn')

    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            let userSelection = e.target.id
            let computerSelection = computerMove()

            while(userSelection === computerSelection) {
                promptBox.textContent = 'Tie! Pick again.'
                userSelection = e.target.id
                computerSelection = computerMove()
            }
            let winner = userVsComputer(userSelection, computerSelection)

            return winner
        })
    })
}

function computerMove() {
    const compOptions = ['Rock', 'Paper', 'Scissors']
    let randomSelection = Math.floor(Math.random() * compOptions.length)
    let select = compOptions[randomSelection]

    return select
}