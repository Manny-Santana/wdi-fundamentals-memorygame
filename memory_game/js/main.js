console.log("Up and running!");

let cards = ["queen", "king","queen", "king"];
let cardsInPlay = [];

let card1 = cards[0];
cardsInPlay.push(card1);

let card2 = cards[2];
cardsInPlay.push(card2);

console.log("User flipped " + cardsInPlay[cardsInPlay.length - 1]);
console.log("cards in play: " + cardsInPlay);

if(cardsInPlay.length === 2){

	if(cardsInPlay[0] === cardsInPlay[1]){
		alert("You have a match!");
	}else { 
		alert("Sorry try again")
	}

} else {

	alert("please choose 2 cards!");
}