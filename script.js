const body = document.querySelector("body")
const header = document.querySelector(".header-container")
const rps = document.querySelector(".rps-container")
const promptBox = document.querySelector(".prompt-content")
const userCounter = document.querySelector(".user-score")
const cpuCounter = document.querySelector(".cpu-score")
const buttons = document.querySelectorAll(".user-btn")

promptBox.textContent =
  "Welcome! Play in a Best of 5 Series of Rock, Paper, Scissors against our finest robot on the market!"

generateMathjaxScript()
gamePlay()

function generateMathjaxScript() {
  const script = document.createElement("script")
  script.src = "./load-mathjax.js"
  document.head.appendChild(script)
}

function gamePlay() {
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      let userSelection = e.target.id

      let cpuSelection = computerMove()

      if (userSelection === cpuSelection) {
        promptBox.textContent = "Tie!"
      } else if (userSelection === "Rock") {
        if (cpuSelection === "Paper") {
          promptBox.textContent = "You lose. Paper beats rock."
          cpuCounter.textContent = parseInt(cpuCounter.textContent) + 1
        } else {
          promptBox.textContent = "You win. Rock beats scissors."
          userCounter.textContent = parseInt(userCounter.textContent) + 1
        }
      } else if (userSelection === "Paper") {
        if (cpuSelection === "Scissors") {
          promptBox.textContent = "You lose. Scissors beats paper."
          cpuCounter.textContent = parseInt(cpuCounter.textContent) + 1
        } else {
          promptBox.textContent = "You win. Paper beats rock."
          userCounter.textContent = parseInt(userCounter.textContent) + 1
        }
      } else {
        if (cpuSelection === "Rock") {
          promptBox.textContent = "You lose. Rock beats scissors."
          cpuCounter.textContent = parseInt(cpuCounter.textContent) + 1
        } else {
          promptBox.textContent = "You win. Scissors beats paper."
          userCounter.textContent = parseInt(userCounter.textContent) + 1
        }
      }
      endGame()
    })
  })
}

function endGame() {
  if (
    parseInt(userCounter.textContent) >= 5 ||
    parseInt(cpuCounter.textContent) >= 5
  ) {
    if (parseInt(userCounter.textContent) >= 5) {
      promptBox.textContent =
        "Congrats! You're the winner! Start training for nationals!"
    }

    if (parseInt(cpuCounter.textContent) >= 5) {
      promptBox.textContent =
        "Aw rats! The computer took the win this time. Probably cheated..."
    }

    const playAgain = document.createElement("div")

    playAgain.classList.add("prompt-content")

    playAgain.textContent = "Would you like to play again?"
    playAgain.style.textAlign = "center"

    promptBox.appendChild(playAgain)

    const playAgainYesBtn = document.createElement("button")
    const playAgainNoBtn = document.createElement("button")

    playAgainYesBtn.classList.add("playAgain")
    playAgainNoBtn.classList.add("playAgain")

    playAgainYesBtn.textContent = "Yes"
    playAgainNoBtn.textContent = "No"

    promptBox.appendChild(playAgainYesBtn)
    promptBox.appendChild(playAgainNoBtn)

    playAgainYesBtn.addEventListener("click", () => {
      userCounter.textContent = "0"
      cpuCounter.textContent = "0"

      promptBox.removeChild(playAgain)
      promptBox.removeChild(playAgainYesBtn)
      promptBox.removeChild(playAgainNoBtn)

      promptBox.textContent = "See if you can stump the robot this time around!"
    })

    playAgainNoBtn.addEventListener("click", () => {
      body.removeChild(header)
      body.removeChild(rps)

      promptBox.removeChild(playAgain)
      promptBox.removeChild(playAgainYesBtn)
      promptBox.removeChild(playAgainNoBtn)

      promptBox.textContent =
        "Thank you for playing! Come back any time you like!"
    })
  }
}

function computerMove() {
  const compOptions = ["Rock", "Paper", "Scissors"]
  let randomSelection = Math.floor(Math.random() * compOptions.length)
  let select = compOptions[randomSelection]

  return select
}
