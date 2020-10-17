export default () => {
    return `
        <div class="container">
            <div class="control-nav">
                <span id="difficulty-select">
                    <h2>Select difficulty</h2>
                    <label for="easy">Easy</label>
                    <input type="radio" name="difficulty" id="easy" value="easy">
                    <label for="medium">Medium</label>
                    <input type="radio" name="difficulty" id="medium" value="medium">
                    <label for="hard">Hard</label>
                    <input type="radio" name="difficulty" id="hard" value="hard">
                </span>
                <span>
                    <h2>Set countdown</h2>
                    <input id="countdown" name="countdown" type="number" size="3">
                    <label id="countdown-label" for="countdown"> seconds</label>
                </span>
                <button class="load-game control-game">Load Game</button>
            </div>
        </div>
    `
};