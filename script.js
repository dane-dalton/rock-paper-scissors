alert('Welcome! Proceed to play some good \'ole fashioned Rock, Paper, Scissors!')

playGame()


//Ask player for selection
//Verify selection is valid
//ensure selection is case insensitive

//Rock beats scissors, scissors beats paper, paper beats rock

//If there is a tie, go again
//Alert player the computers action and declare a winner

//Allow for the start of a new game

function playGame() {
    let userChoice = prompt('Please choose "Rock", "Paper", or "Scissors": ', '')
    if (userChoice === '' || userChoice === null) {
        alert('Game cancelled. Proceed to play again.')
        playGame()
    }

    userChoice = capitalize(userChoice)
    userChoice = validChoice(userChoice)
    computerChoice = computerPlay()

    let decision = userVsComputer(userChoice, computerChoice)

    alert(decision)
}




function userVsComputer(user, computer) {
    if(user === computer) {
        alert('Game tied. Run it back!')
        playGame()
    }
    switch (user) {
        case 'Rock': 
            if (computer === 'Paper') return 'You Lose. Paper beats Rock.'
            else return 'You Win! Rock beats Scissors.'
            break;
        case 'Paper':
            if (computer === 'Scissors') return 'You Lose. Scissors beats Paper.'
            else return 'You Win! Paper beats Rock.'
            break;
        case 'Scissors':
            if (computer === 'Rock') return 'You Lose. Rock beats Scissors.'       
            else return 'You Win! Scissors beats Paper.'
            break;
        default: 
            alert('Something went very wrong. Play again.')
            return playGame()
    }
}

function validChoice(userChoice) {
    if (userChoice === 'Rock' || userChoice === 'Paper' || userChoice === 'Scissors') return userChoice

    alert('Invalid choice, check for spelling errors and play again.')
    playGame()
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