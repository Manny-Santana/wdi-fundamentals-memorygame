console.log("Up and running!");

let cards = ["queen", "king","queen", "king"];
let cardsInPlay = [];

function checkForMatch(){

	if(cardsInPlay[0] === cardsInPlay[1]){
		alert("You have a match!");
	}else { 
		alert("Sorry try again")
	}

}

function flipCard(cardId){

console.log("User flipped " + cards[cardId]);
cardsInPlay.push(cards[cardId]);


if(cardsInPlay.length === 2){

	checkForMatch();

} else {

	alert("please choose 2 cards!");
	}
}

flipCard(0);
flipCard(2);