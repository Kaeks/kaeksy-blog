export const useTimer = () => {
    const timer = (ms:number) => new Promise(resolve => setTimeout(resolve, ms));
    return timer;
};

export const useRandom = () => {
    const getRandom = () => Math.random();
    const getRandomInRange = (min=0, max=1) => min + (max - min) * getRandom();
    const getRandomIntInRange = (min=0, max=1) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    return { getRandom, getRandomInRange, getRandomIntInRange };
}