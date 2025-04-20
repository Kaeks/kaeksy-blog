export const useFlying = () => useState('flyingState', () => {
    return {
        loader: false
    };
});