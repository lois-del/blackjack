let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = []
let hasBlackJack = false
let sum = 0
let isAlive = false
let message = ''
let messageEl = document.getElementById('message-el')
let greetingEl = document.getElementById('greeting-el')
let sumEl = document.getElementById('sum-el')
let cardsEl = document.getElementById('cards-el')
let playerEl = document.getElementById('player-el')
let player = {
    name: "Per",
    chips: 145
}
playerEl.textContent = player.name + ": $" + player.chips
function getRandomCard () {
    let randomCard = Math.floor(Math.random() * 13) + 1
    if (randomCard > 10) {
        return 10
    } else if (randomCard === 1) {
        return 11
    } else {
        return randomCard
    }
   
}


function startGame() {
    isAlive = true
    console.log(cards)
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards.push(firstCard, secondCard)
    console.log(cards)
    sum = firstCard + secondCard
    renderGame()
}

function renderGame () {
    for (let i = 0; i < cards.length; i++) {
        //console.log(cards[i])
        console.log(cards.length)
        console.log(cardsEl)
        cardsEl.textContent = 'Cards: ' + cards + " "   
        
    }
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
         isAlive = true
     
     } else if (sum === 21) {
         message = "Yaaaaay, you've won a blackjack"
         hasBlackJack = true
     } else {
         message = "Ooooops, better luck next time"
         isAlive = false
     }

     messageEl.textContent = message
     sumEl.textContent =  'Sum: ' + sum
     
    }

function newCard () {
    if (isAlive === true && hasBlackJack === false) {
    let newCard = getRandomCard()
    sum += newCard
    cards.push(newCard)
    console.log(cards)
    cardsEl.textContent += newCard
    renderGame()
}

}


