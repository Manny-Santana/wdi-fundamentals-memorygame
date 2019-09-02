console.log("Up and running!"); //checking to see if js is working on the page


//create
let cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
}, {
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
}, {
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
}, {
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}];


let cardsInPlay = [];

function checkForMatch(){

	if(cardsInPlay[0] === cardsInPlay[1]){
		alert("You have a match!");
	}else { 
		alert("Sorry try again")
	}

}

function flipCard(){



let cardId = this.getAttribute('data-id');
console.log("User flipped " + cards[cardId].rank);
cardsInPlay.push(cards[cardId].rank);
console.log(cards[cardId].suit);
console.log(cards[cardId].cardImage);

this.setAttribute('src', cards[cardId].cardImage);

if(cardsInPlay.length === 2){

	checkForMatch();

} else {

	alert("please choose 2 cards!");
	}
}


function createBoard(){
	for(let i=0; i < cards.length; i++){

		let cardElement = document.createElement('img');
		cardElement.setAttribute('src',"images/back.png");
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		const gameBoard = document.getElementById('game-board');
		gameBoard.appendChild(cardElement);


	}
}

createBoard();