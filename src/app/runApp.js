export default ({
    //Game Settings with default values
    createLayout,
    container = document.querySelector('body'),
    gameBoardSize = 600,
    gameTime = 60000,
    gameSpeed = 600,
    handleControl,
    handleTime,
	moleImage = './imgs/mole.jpg',
	numberOfFields = 9,
	placeMole
}) => {
    //Create and load game layout
    const countdown = gameTime / 1000;
    container.innerHTML = createLayout(
        numberOfFields, 
        gameBoardSize, 
        handleTime(countdown)
    );

    
    //Add functionality to the Control Game button
    const controlButton = document.querySelector('.control-game');
    controlButton.addEventListener('click', handleControl({
        placeMole,
        gameSpeed,
        gameTime,
        moleImage
    }));
};