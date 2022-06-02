

function computerPlay() {
    const compOptions = ['Rock', 'Paper', 'Scissors']
    let randomSelection = Math.floor(Math.random() * compOptions.length)
    let select = compOptions[randomSelection]

    return select
}