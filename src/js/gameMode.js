/**
 * Determine if the user will play or a computer vs computer
 * @param player1
 */
export const gameMode = (player1) => {

	let checkbox = document.querySelector("input[name=checkbox]");

	checkbox.addEventListener( 'change', function() {

		let contentDragonBall = document.getElementById("content-dragon-ball");

		if(this.checked) {
			contentDragonBall.style.display = 'none';
			player1 = 'computer 1';

		} else {
			contentDragonBall.style.display = 'block';
			player1 = 'user';
		}
	});

};
