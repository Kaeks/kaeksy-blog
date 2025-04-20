export const timer = (ms) => new Promise(res => setTimeout(res, ms));

export function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}