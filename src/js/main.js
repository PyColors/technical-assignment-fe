require('../css/main.scss');
import { getDragonBallUserChoice } from './getDragonBallUserChoice';
import ComputerChoice from './ComputerChoice';

/**
 * Execute gameMode() immediately after the page has been loaded.
 */
window.onload = function() {
	gameMode();
};

let player1;

/**
 * Logic to determine who won between user vs computer or computer vs computer
 *
 * @param userChoice
 * @param computerChoice
 * @returns {string}
 */
const winner = (userChoice, computerChoice) => {

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


/**
 * Determine if the user will play or a computer vs computer
 */
const gameMode = () => {

	let checkbox = document.querySelector("input[name=checkbox]");

	checkbox.addEventListener( 'change', function() {

		let contentDragonBall = document.getElementById("content-dragon-ball");

		if(this.checked) {
			contentDragonBall.style.display = 'none';
			player1 = 'computer 1'

		} else {
			contentDragonBall.style.display = 'block';
			player1 = 'user'
		}
	});
};

/**
 * Run the game
 */
const playGame = () => {

	// Instance ComputerChoice classgir
	let random = new ComputerChoice();
	const computerChoice = random.choise;
	const computerChoice2 = random.choise;

	// Get user choice
	let dragonBall = document.querySelector('input[name = "dragon-ball"]:checked').value;
	const userChoice = getDragonBallUserChoice(dragonBall);

	// Inject result
	// Create result game
	let result = document.getElementById("result");
	result.innerHTML = winner(userChoice, computerChoice);

	let humanPlayer = document.getElementById("content-left-human-player");
	humanPlayer.innerHTML = `User: ${userChoice} <br /> Computer 1: ${computerChoice2}`;

	let computerOne = document.getElementById("content-right-computer-1");
	computerOne.innerHTML = `Computer 2: ${computerChoice}`;
};


// Button play game
let playButton = document.getElementById("play");
playButton.addEventListener("click", playGame);
