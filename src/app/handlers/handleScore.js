export default (gameBoard) => {
    const scoreboard = document.querySelector('.scoreboard');
    scoreboard.innerHTML = `Score: ${gameBoard.value}`;
};