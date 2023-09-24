let sum = 0
let cards = []
let hitsBlackjack = false
let isAlive = false
let startBtn = document.getElementById("btn-start")
let drawBtn = document.getElementById("btn-draw")
let messageEl = document.getElementById("message-el")
let cardEl = document.getElementById("card-el")
let sumEl = document.getElementById("sum-el")
let message =""

function startGame() {
    let firstDraw = drawCard()
    let secondDraw = drawCard()
    cards = [firstDraw, secondDraw]
    sum = firstDraw + secondDraw
    hitsBlackjack = false
    isAlive = true
    renderGame()
}

function drawCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 11) {
        return 1
    } else {
        return randomNumber
    }
}

function renderGame(){
    startBtn.style.display = 'none'
    drawBtn.style.display = 'block'

    cardEl.textContent = "Cards: "
    for(i = 0; i < cards.length; i++){
        cardEl.textContent += ` ${cards[i]}`
    }
    sumEl.textContent = `Value: ${sum}`

    if (sum <= 20) {
        message = "Want to draw another card?"
    } else if (sum === 21) {
        message = "You've got blackjack"
        hitsBlackjack = true
    } else {
        message = "You're out of the game"
        isAlive = false
    }

    messageEl.textContent = message

}

function newCard() {
    if(isAlive && !hitsBlackjack){
        let newDraw = drawCard()
        sum += newDraw
        cards.push(newDraw)
        renderGame() 
    } else {
        drawBtn.style.display = 'none'
        startBtn.style.display = 'block'
    }
}

startBtn.addEventListener("click", startGame)
drawBtn.addEventListener("click", newCard)

