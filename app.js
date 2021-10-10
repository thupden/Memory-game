document.addEventListener("DOMContentLoaded", () => {
    //cards options
    const cardArray = [
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
    ]

cardArray.sort(() => 0.5 - Math.random());

const grid = document.querySelector(".grid");
const resultDisplay = document.querySelector("#result");
console.log(resultDisplay);
var cardChoosen = [];
var cardChoosenId = [];
var cardWon = [];


//creater your board
function createBoard(){
    for(let i = 0;i < cardArray.length;i++)
    {
        var card = document.createElement("img");
        card.setAttribute("src", "images/blank.png");
        card.setAttribute("data-id", i);
        card.setAttribute("class", "card-img");
        card.addEventListener("click", flipCard);
        grid.appendChild(card);
    }
}


//check for match
function checkForMatch(){
    var cards = document.querySelectorAll("img");
    const optionOneId = cardChoosenId[0];
    const optionTwoId = cardChoosenId[1];

    if(optionOneId == optionTwoId)
    {
        cards[optionOneId].setAttribute("src", "images/blank.png");
        cards[optionTwoId].setAttribute("src", "images/blank.png");
        alert("You have clicked the same image!");
    }
    else if(cardChoosen[0] === cardChoosen[1])
    {
        let correctSound = document.querySelector("#correct-sound");
        cards[optionOneId].setAttribute("src", "images/white.png");
        cards[optionTwoId].setAttribute("src", "images/white.png");
        cards[optionOneId].removeEventListener("click", flipCard);
        cards[optionTwoId].removeEventListener("click", flipCard);
        cardWon.push(cardChoosen);
        if(cardWon.length !== Math.floor(cardArray.length/2))
        {
            correctSound.play();
        }
    }else{
        cards[optionOneId].setAttribute("src", "images/blank.png");
        cards[optionTwoId].setAttribute("src", "images/blank.png");
        let wrongSound = document.querySelector("#wrong-ans");
        wrongSound.play();
    }
    cardChoosen = [];
    cardChoosenId = [];
    resultDisplay.textContent = cardWon.length;
    if(cardWon.length === Math.floor(cardArray.length/2))
    {
        let gameOver = document.querySelector("#game-over");
        gameOver.play();
        resultDisplay.textContent = cardWon.length + " Congratulations: You found them all!";
    }
}


// flip card 
function flipCard(){
    var cardId = this.getAttribute('data-id');
    var sound = document.querySelector("#audio");
    sound.play();
    cardChoosen.push(cardArray[cardId].name);
    cardChoosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if(cardChoosen.length === 2)
    {
        setTimeout(checkForMatch, 500);
    }
}
createBoard();

//restart Game
let restartBtn = document.querySelector("#restart");
restartBtn.addEventListener("click", () => {
    window.location.reload();
})
})
