export const useTimer = () => {
    const timer = (ms:number) => new Promise(resolve => setTimeout(resolve, ms));
    return timer;
};

export const useRandom = () => {
    const getRandom = () => Math.random();
    const getRandomInRange = (min=0, max=1) => min + (max - min) * getRandom();
    const getRandomIntInRange = (min=0, max=1) => {
        if (min != Math.floor(min) || max != Math.floor(max)) {
            console.error(`Numbers min=${min} and max=${max} should be integers.`);
        }
        let num = getRandomInRange(min, max);
        return Math.round(num);
    };
    return { getRandom, getRandomInRange, getRandomIntInRange };
}