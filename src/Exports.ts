export const currentEpoch = () => {
	return Math.floor(Date.now() / 1000);
};

export const addToEpoch = (
	epoch: number,
	seconds: number
) => {
	return epoch + seconds;
};
