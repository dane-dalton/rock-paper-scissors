alert('Welcome! Proceed to play some good \'ole fashioned Rock, Paper, Scissors!')

playSeries()

function playSeries() {
    let userWins = 0
    let playAgain = 'y'

    for(let i = 0; i < 5; i++) {
        userWins = playGame(userWins)
        console.log(userWins)
    }
    if(userWins >= 3) playAgain = prompt(`You came out with ${userWins} wins in the Best of 5! Play again? (y/n)`, 'y')
    else playAgain = prompt(`${userWins} wins??? You lost. Robots cheat anyway. Play again? (y/n)`, 'y')
    
    if(playAgain === 'y') playSeries()
}


function playGame(userWins) {
    let userChoice = prompt('Please choose "Rock", "Paper", or "Scissors": ', '')
    if (userChoice === '' || userChoice === null) {
        alert('Game cancelled. Proceed to play again.')
        playGame()
    }

    userChoice = capitalize(userChoice)
    userChoice = validChoice(userChoice, userWins)
    computerChoice = computerPlay()
    
    userVsComputerTie(userChoice, computerChoice, userWins)
    let decision = userVsComputer(userChoice, computerChoice)

    userWins += decision[1]

    alert(decision[0])
    alert('Play again!')
    
    return userWins
}




function userVsComputer(user, computer) {
    switch (user) {
        case 'Rock': 
            if (computer === 'Paper') return ['You Lose. Paper beats Rock.', 0]
            else return ['You Win! Rock beats Scissors.', 1]
            break;
        case 'Paper':
            if (computer === 'Scissors') return ['You Lose. Scissors beats Paper.', 0]
            else return ['You Win! Paper beats Rock.', 1]
            break;
        case 'Scissors':
            if (computer === 'Rock') return ['You Lose. Rock beats Scissors.', 0]      
            else return ['You Win! Scissors beats Paper.', 1]
            break;
        default: 
            alert('Something went very wrong. Play again.')
            return playGame()
    }
}

function userVsComputerTie(user, computer, userWins) {
    if(user === computer) {
        alert('Game tied. Run it back!')
        playGame(userWins)
    }
}

function validChoice(userChoice, userWins) {
    if (userChoice === 'Rock' || userChoice === 'Paper' || userChoice === 'Scissors') return userChoice

    alert('Invalid choice, check for spelling errors and play again.')
    playGame(userWins)
}

function capitalize(userChoice) {
    userChoice = userChoice.charAt(0).toUpperCase() + userChoice.slice(1).toLowerCase()
    return userChoice
}

function computerPlay() {
    const compOptions = ['Rock', 'Paper', 'Scissors']
    let randomSelection = Math.floor(Math.random() * compOptions.length)
    let select = compOptions[randomSelection]

    return select
}