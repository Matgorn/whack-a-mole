const checkIfDifferent = (prevRand) => {
	const rand = Math.floor(Math.random() * 8);

	if(rand == prevRand) {
		return checkIfDifferent(prevRand);
	} else {
		return rand;
	}
};

export default checkIfDifferent;