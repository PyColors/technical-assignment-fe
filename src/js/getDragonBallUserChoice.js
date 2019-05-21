/**
 * Get user choice:
 * @param userDragonBall
 * @returns {*}
 */
export const getDragonBallUserChoice = userDragonBall => {

	let dragonBall = document.querySelector('input[name = "dragon-ball"]:checked').value;

	if (typeof dragonBall === 'string' && userDragonBall === dragonBall) {
		return userDragonBall;
	}
};
