let firstCard =getRandomCard()
let secondCard=getRandomCard()
let cards=[firstCard,secondCard]
let sum=firstCard+secondCard
let hasBlackJack=false
let isAlive=true
let message=""
let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardsEl=document.getElementById("cards-el")

function getRandomCard(){
    let randomNumber=Math.floor(Math.random()*13)+1
    if(randomNumber>10)
    {
        return 10
    }else if(randomNumber===1)
    {
        return 11
    }else{
        return randomNumber
    }
}
function startGame()
{   isAlive=true
    renderGame()
}
function renderGame()
{
    cardsEl.textContent="cards"
}
if(sum<=21)
{
    message="Do you want to draw a new card"

}
else if(sum===21)
{
    message="You have got BlackJack"
    hasBlackJack=true
}
else{
    message="Sorry YOu're out"
    isAlive=false
}
console.log(message)