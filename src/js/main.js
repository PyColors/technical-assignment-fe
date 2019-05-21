require('../css/main.scss');
import { getDragonBallUserChoice } from './getDragonBallUserChoice';
import { gameMode } from "./gameMode";

import ComputerChoice from './ComputerChoice';


window.onload = function() {
	gameMode();
};

let player1;

/**
 *
 * @param userChoice
 * @param computerChoice
 * @returns {string}
 */
const determineWinner = (userChoice, computerChoice) => {

	if (userChoice !== computerChoice) {
		if (userChoice === 'rock') {
			if (computerChoice === 'scissors') {
				return `The ${player1} had rock to scissors and won brilliantly!`;
			} else {
				return 'The computer 2 had paper to rock and won impeccably!';
			}
		} else if (userChoice === 'paper') {
			if (computerChoice === 'rock') {
				return `The ${player1} had paper to rock and won nicely!`;
			} else {
				return `The computer 2 had scissors to paper and won completely!`;
			}
		} else if (userChoice === 'scissors') {
			if (computerChoice === 'paper') {
				return `The ${player1} had scissors to paper and won thoroughly!`;
			} else {
				return 'The computer 2 had rock to scissors and won perfectly!';
			}
		}
	} else {
		return 'The game was a tie. Play again!';
	}
};


const playGame = () => {

	// Instance ComputerChoice class
	let random = new ComputerChoice();
	const computerChoice = random.choise;
	const computerChoice2 = random.choise;

	let dragonBall = document.querySelector('input[name = "dragon-ball"]:checked').value;
	const userChoice = getDragonBallUserChoice(dragonBall);


	console.log('You threw: ' + userChoice);

	console.log('The computer threw: ' + computerChoice);

	//console.log(determineWinner(userChoice, computerChoice));
	console.log(determineWinner(computerChoice, computerChoice2));


	// Inject result into the vue
	// Create result game
	let result = document.getElementById("result");
	result.innerHTML = determineWinner(userChoice, computerChoice);

	let humanPlayer = document.getElementById("content-left-human-player");
	humanPlayer.innerHTML = `User: ${userChoice} - Computer: ${computerChoice2}`;

	let computerOne = document.getElementById("content-right-computer-1");
	computerOne.innerHTML = `Computer 2: ${computerChoice}`;

};


// Play a game
let playButton = document.getElementById("play");
playButton.addEventListener("click", playGame);
