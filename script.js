let player1 = true

let game = [
    "", "", "",
    "", "", "",
    "", "", ""
]

let clickCounter = 0

const resetGame = () => {
    game = [
        "", "", "",
        "", "", "",
        "", "", ""
    ]
    let list = document.getElementsByClassName("square")
    for (let square of list) {
        square.innerHTML = ""
    }
    clickCounter = 0
}

let clickSquare = (id, element) => {
    if (element.hasChildNodes()) {
        return
    } else {
        game[id] = player1 ? true : false
        clickCounter++
        checkWin()
        var text = document.createElement("P")
        var t = document.createTextNode(player1 ? "x" : "o")
        text.appendChild(t)
        element.appendChild(text);
    }
    player1 = !player1
}
let allFilled = () => {
    let allFilled = false
    for (let i = 0; i < game.length; i++) {
        if (game[i] == "") {
            allFilled = false
        }
    }
    return allFilled
}

let checkWin = () => {
    let win = false
    if ((game[0] && game[1] && game[2])) {
        win = true
    } else if ((game[3] && game[4] && game[5])) {
        win = true
    } else if ((game[6] && game[7] && game[8])) {
        win = true
    } else if ((game[0] && game[4] && game[8])) {
        win = true
    } else if ((game[2] && game[4] && game[6])) {
        win = true
    } else if ((game[1] && game[4] && game[7])) {
        win = true
    } else if ((game[0] && game[3] && game[6])) {
        win = true
    } else if ((game[2] && game[5] && game[8])) {
        win = true
    }
    if (clickCounter > 8 && !win) {
        alert("Draw")
    }
    if (win) {
        alert(player1 ? "Player 1 Wins!" : "Player 2 Wins!")
    }
}