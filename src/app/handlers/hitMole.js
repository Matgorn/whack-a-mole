import handleScore from './handleScore';

const hitMole = (event) => {
    event.target.removeEventListener('click', hitMole);
    event.target.removeEventListener('touchstart', hitMole);
    event.target.style.backgroundImage = 'none';

    const gameBoard = event.target.parentElement;
    gameBoard.value = gameBoard.value + 1 || 1;
    handleScore(gameBoard);
};

export default hitMole;