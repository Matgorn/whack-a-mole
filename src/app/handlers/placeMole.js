import checkIfDifferent from '../helpers/checkIfDifferent';
import hitMole from './hitMole';

export default (moleImage, gameSpeed) => {
	let rand = 0;
	return setInterval(() => {
		const gameFields = document.querySelectorAll('.game-field');
		const prevRand = rand;
        rand = checkIfDifferent(prevRand);

		gameFields.forEach(field => {
            field.style.backgroundImage = 'none';
			field.removeEventListener('click', hitMole);
			field.removeEventListener('touchstart', hitMole);
		});
    
        const molePosition = gameFields[rand];
        molePosition.style.backgroundImage = `url(${moleImage})`;
		molePosition.addEventListener('click', hitMole);
		molePosition.addEventListener('touchstart', hitMole);
	}, gameSpeed);
};


