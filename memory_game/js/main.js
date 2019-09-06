console.log("Up and running!"); //checking to see if js is working on the page


//create card objects
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

//cards chosen by user get pushed into the array
let cardsInPlay = [];

//validates matching pairs have been chosen
function checkForMatch(){

	if(cardsInPlay[0] === cardsInPlay[1]){
		alert("You have a match!");
	}else { 
		alert("Sorry try again")
	}

}

//logic for user selection of cards, passed to an event listener function
function flipCard(){


let cardId = this.getAttribute('data-id'); // retrieve the data-id of the card clicked on by user
console.log("User flipped " + cards[cardId].rank); //log to console for debugging
cardsInPlay.push(cards[cardId].rank); //add selected card to the cards in play list

//logs for debugging
console.log(cards[cardId].suit);
console.log(cards[cardId].cardImage);

//set the src attribute of the clicked card to its corresponding card image 
this.setAttribute('src', cards[cardId].cardImage);

//logic to check for a match when player chooses 2 cards. 
if(cardsInPlay.length === 2){

	checkForMatch();

	} else {

	alert("please choose 2 cards!");
	}
}

//function to create the board
//uses js to create card elements instead of html
function createBoard(){
	for(let i=0; i < cards.length; i++){

		let cardElement = document.createElement('img'); //create new element for each object in cards array
		cardElement.setAttribute('src',"images/back.png");// set the image src attribute
		cardElement.setAttribute('data-id', i);//set a data-id to identify the card clicked on by the user
		cardElement.addEventListener('click', flipCard); // event triggered by user click to display the flipped card
		const gameBoard = document.getElementById('game-board'); // get gamebord div 
		gameBoard.appendChild(cardElement); // add child node to gameboard div to display imgs


	}
}

//function call to display gamegit
createBoard();

//testing