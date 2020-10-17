export default (countdown) => {
    const minutes = Math.floor(countdown / 60);
    const seconds = parseInt(countdown % 60);

    if(countdown > 59) {
        return seconds > 9 ? `0${minutes}:${seconds}` : `0${minutes}:0${seconds}`;
    } else {
        return seconds > 9 ? `00:${seconds}` : `00:0${seconds}`;
    }
};