import clearControlNav from './helpers/clearControlNav';
import clearFields from './helpers/clearFields';
import handleTime from './handlers/handleTime';

export default({
    gameTime,
    gameSpeed,
    moleImage,
    placeMole
}) => {
    let speedIntervalId;
    let timeIntervalId;
    let timeoutId;
    let countdown = gameTime / 1000;

    //Event handler for Control Game button
    return (e) => {
        const scoreboard = document.querySelector('.scoreboard');
        const gameBoard = document.querySelector('.container');
        const timer = document.querySelector('.timer');

        // Start Game button control
        if(e.target.innerHTML == 'Start Game') {
            speedIntervalId = placeMole(moleImage, gameSpeed);
            countdown = clearControlNav(gameBoard, scoreboard, gameTime);

            timeIntervalId = setInterval(() => {
                handleTime(countdown, timer);
                countdown -= 1;
            }, 1000);

            timeoutId = setTimeout(() => {
                clearInterval(speedIntervalId);
                clearInterval(timeIntervalId);
                clearFields(gameBoard);

                e.target.innerHTML = 'Start Game';
                timer.innerHTML = '00:00';
        
                countdown = gameTime / 1000;
                handleTime(countdown, timer);
            }, gameTime);

            e.target.innerHTML = 'Stop Game';

        //Stop Game button control
        } else if (e.target.innerHTML == 'Stop Game') {
            clearInterval(speedIntervalId);
            clearInterval(timeIntervalId);
            clearTimeout(timeoutId);
            clearFields(gameBoard);

            e.target.innerHTML = 'Restart';

        //Reset button control
        } else {
            countdown = clearControlNav(gameBoard, scoreboard, gameTime);
            handleTime(countdown, timer);

            e.target.innerHTML = 'Start Game';
        }
    };
};