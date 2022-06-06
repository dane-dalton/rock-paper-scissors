//alert('Welcome! Proceed to play some good \'ole fashioned Rock, Paper, Scissors!')

//playSeries()

function playSeries() {
    let playAgain = 'y'
    let userWins

    while(playAgain === 'y') {
        userWins = 0

        // for(let i = 0; i < 5; i++) {
             userWins += playGame()
        // }

        if(userWins >= 3) playAgain = prompt(`You came out with ${userWins} wins in the Best of 5! Play again? (y/n)`, 'y')
        else playAgain = prompt(`${userWins} wins??? You lost. Robots cheat anyway. Play again? (y/n)`, 'y')
    }
}


function playGame() {
    let userChoice = prompt('Please choose "Rock", "Paper", or "Scissors": ', '')
    while (userChoice === '' || userChoice === null) {
        alert('Game cancelled. Restart the page to play again.')
    }

    userChoice = capitalize(userChoice)
    userChoice = validChoice(userChoice)
    computerChoice = computerPlay()
    
    while(userChoice === computerChoice) {
        alert('Game tied. Run it back!')
        userChoice = prompt('Please choose "Rock", "Paper", or "Scissors": ', '')
        while (userChoice === '' || userChoice === null) {
            alert('Game cancelled. Restart the page to play again.')
        }

        userChoice = capitalize(userChoice)
        userChoice = validChoice(userChoice)
        computerChoice = computerPlay()
    }

    let decision = userVsComputer(userChoice, computerChoice)

    alert(decision[0])
    alert('Play again!')
    return decision[1]
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
            alert('Something went very wrong. Restart the page.')
    }
}

function validChoice(userWord) {
    while(true) {
        if (userWord === 'Rock' || userWord === 'Paper' || userWord === 'Scissors') return userWord

        alert('Invalid choice, check for spelling errors and play again.')
        userWord = prompt('Please choose "Rock", "Paper", or "Scissors": ', '')
        while (userWord === '' || userWord === null) {
            alert('Game cancelled. Proceed to play again.')
            userWord = prompt('Please choose "Rock", "Paper", or "Scissors": ', '')
        }

        userWord = capitalize(userWord)
    }
}

function capitalize(userWord) {
    userWord = userWord.charAt(0).toUpperCase() + userWord.slice(1).toLowerCase()
    return userWord
}

function computerPlay() {
    const compOptions = ['Rock', 'Paper', 'Scissors']
    let randomSelection = Math.floor(Math.random() * compOptions.length)
    let select = compOptions[randomSelection]

    return select
}