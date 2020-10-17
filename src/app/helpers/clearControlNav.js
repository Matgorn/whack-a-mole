export default (gameBoard, scoreboard, gameTime) => {
    gameBoard.value = 0;
    scoreboard.innerHTML = `Score: ${gameBoard.value}`;
    
    return gameTime / 1000;
};