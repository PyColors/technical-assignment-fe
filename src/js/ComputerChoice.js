'use strict';

/**
 * This Class create random Computer choices
 */
export default class ComputerChoice {
	constructor() {
		this.rock = 'rock';
		this.paper = 'paper';
		this.scissors = 'scissors';
	}

	get choise() {
		return this.getChoise()
	}

	getChoise() {

		switch (Math.floor(Math.random() * 3)) {
			case 0:
				return this.rock;

			case 1:
				return this.paper;

			case 2:
				return this.scissors;
		}
	}
}
