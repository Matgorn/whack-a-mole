import getTime from '../helpers/getTime';

export default(countdown, timer) => {
    if(timer) {
        timer.innerHTML = getTime(countdown);
    } else {
        const result = getTime(countdown);
        return result
    }
};