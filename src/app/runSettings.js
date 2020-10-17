const { default: gameSettings } = require("./gameSettings")

export default ({
    container = document.querySelector('body'),
    createLayout,
    gameSettings,
    handleControl,
    handleTime,
    placeMole,
    runApp
}) => {
    container.innerHTML = gameSettings();
    const settings = {};

    const difficultySelect = document.querySelector('#difficulty-select');
    difficultySelect.addEventListener('input', (e) => {
        if(e.target.value == 'easy') {
            settings.gameSpeed = 1000;
        } else if(e.target.value == 'medium') {
            settings.gameSpeed = 600;
        } else {
            settings.gameSpeed = 300;
        }
    });

    const setCountdown = document.querySelector('#countdown');
    setCountdown.addEventListener('input', (e) => {
        settings.gameTime = parseInt(e.target.value) * 1000;
    });

    const loadGame = document.querySelector('.load-game');
    loadGame.addEventListener('click', () => {
        container.innerHTML = '';
        runApp({
            createLayout,
            handleControl,
            handleTime,
            placeMole,
            ...settings
        });
    });
};