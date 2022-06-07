const promptBox = document.querySelector('.prompt-content')
const userCounter = document.querySelector('.user-score')
const cpuCounter = document.querySelector('.cpu-score')
const buttons = document.querySelectorAll('.user-btn')
let keepGoing = true

beginningPrompt()

//while (keepGoing) {
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            let userSelection = e.target.id
            console.log('User Selection: ' + userSelection)
    
            let cpuSelection = computerMove()
            console.log('CPU Selection: ' + cpuSelection)
    
            if(userSelection === cpuSelection) {
                promptBox.textContent = 'Tie!'
            } else if (userSelection === 'Rock') {
                if (cpuSelection === 'Paper') {
                    promptBox.textContent = 'You lose. Paper beats rock.'
                    cpuCounter.textContent = parseInt(cpuCounter.textContent) + 1
                } else {
                    promptBox.textContent = 'You win. Rock beats scissors.'
                    userCounter.textContent = parseInt(userCounter.textContent) + 1
                }
            } else if (userSelection === 'Paper') {
                if (cpuSelection === 'Scissors') {
                    promptBox.textContent = 'You lose. Scissors beats paper.'
                    cpuCounter.textContent = parseInt(cpuCounter.textContent) + 1
                } else {
                    promptBox.textContent = 'You win. Paper beats rock.'
                    userCounter.textContent = parseInt(userCounter.textContent) + 1
                }
            } else {
                if (cpuSelection === 'Rock') {
                    promptBox.textContent = 'You lose. Rock beats scissors.'
                    cpuCounter.textContent = parseInt(cpuCounter.textContent) + 1
                } else {
                    promptBox.textContent = 'You win. Scissors beats paper.'
                    userCounter.textContent = parseInt(userCounter.textContent) + 1
                }
            }
        })
    })
    if ( userCounter >= 5 ) {
        promptBox.textContent = 'Congrats! You\'re the winner! Start training for nationals!'
        keepGoing = false
    }
    if ( cpuCounter >= 5 ) {
        promptBox.textContent = 'Aw rats! The computer took the win this time. Probably cheated...'
        keepGoing = false
    }
//}


// let userSelection = btnClick()

// let cpuSelection = computerMove()

// let keepGoing = true

// while (keepGoing) {
//     userSelection = btnClick()
//     cpuSelection = computerMove()

//     let windowClick = window.addEventListener('click', () => {
//         if(userSelection === cpuSelection) {
//             promptBox.textContent = 'Tie!'
//         } else if (userSelection === 'Rock') {
//             if (cpuSelection === 'Paper') {
//                 promptBox.textContent = 'You lose. Paper beats rock.'
//                 cpuCounter.textContent = parseInt(userCounter.textContent) + 1
//             } else {
//                 promptBox.textContent = 'You win. Rock beats scissors.'
//                 userCounter.textContent = parseInt(userCounter.textContent) + 1
//             }
//         } else if (userSelection === 'Paper') {
//             if (cpuSelection === 'Scissors') {
//                 promptBox.textContent = 'You lose. Scissors beats paper.'
//                 cpuCounter.textContent = parseInt(userCounter.textContent) + 1
//             } else {
//                 promptBox.textContent = 'You win. Paper beats rock.'
//                 userCounter.textContent = parseInt(userCounter.textContent) + 1
//             }
//         } else {
//             if (cpuSelection === 'Rock') {
//                 promptBox.textContent = 'You lose. Rock beats scissors.'
//                 cpuCounter.textContent = parseInt(userCounter.textContent) + 1
//             } else {
//                 promptBox.textContent = 'You win. Scissors beats paper.'
//                 userCounter.textContent = parseInt(userCounter.textContent) + 1
//             }
//         }
//     })


//     console.log('userSelection: ' + userSelection)
//     console.log('cpuSelection: ' + cpuSelection)
//     console.log('windowClick: ' + windowClick)

//     keepGoing = false
// }
    


function btnClick() {
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            return e.target.id
        })
    })
}



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
    userCounter.textContent = '0'
    cpuCounter.textContent = '0'

    console.log('userWins: ' + userWins)
    console.log('cpuWins: ' + cpuWins)

    while(keepGoing) {

        updateCounter = playGame()

        console.log('updateCounter: ' + updateCounter)
        
        userWins = parseInt(userCounter.textContent) + updateCounter[0]
        cpuWins = parseInt(cpuCounter.textContent) + updateCounter[1]

        userCounter.textContent = userWins
        cpuCounter.textContent = cpuWins
        

        if (userWins >= 5) {
            keepGoing = false
            promptBox.textContent = "Congrats! You achieved 5 wins before that pesky computer!"
        }
        if (cpuWins >= 5) {
            keepGoing = false
            promptBox.textContent = "Uh oh! Looks like you lost to the computer. It was probably cheating anyway..."
        }
        keepGoing = false
    }
}


function playGame() {

    //transform win counter from string to int to avoid concat

  // while(gameDecision === null || gameDecision === undefined) {

        let gameDecision = userMove()
        
        console.log('gameDecision: ' + gameDecision)
    //}
    
    if (gameDecision === null || gameDecision === undefined) {
        gameDecision = userMove()
        console.log('gameDecision2: ' + gameDecision)
    } else {
        console.log('gameDecision Return: ' + gameDecision)
        return gameDecision
    }


    
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

            console.log('winner: ' + winner)

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