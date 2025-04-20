export const useTimer = () => {
    const timer = (ms:number) => new Promise(resolve => setTimeout(resolve, ms));
    return timer;
};