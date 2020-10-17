export default (numberOfFields, gameBoardSize, handleTime) => {
	const gameBoard = [];
	const fieldSize = gameBoardSize / Math.sqrt(numberOfFields);

		//Create fields depends on value
		for(let i = 0; i < numberOfFields; i++) {
			gameBoard.push(`
				<div 
					class="game-field" 
					id="field-${i + 1}"
					style="
						width: ${fieldSize}px;
						height: ${fieldSize}px;
					"
				>
				</div>
			`);
		};
	
	//Create Control Nav and Game Board with Fields
	return `
		<div 
			class="control-nav"
			style="
				width: ${gameBoardSize}px;
			"
		>
				<span>
					<h3 class="scoreboard">Score: 0<h3>
					<h3 class="timer">${handleTime}</h3>
				</span>
				<button class="control-game">Start Game</button>
		</div>
		<div 
			class="container"
			style="
				width: ${gameBoardSize}px;
				height: ${gameBoardSize}px;
				cursor: url("./imgs/hammer.png") 10 35, auto;
			"
		>
			${gameBoard.join('')}
		</div>
	`
};