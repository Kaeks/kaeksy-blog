export const useCookieLoaded = () => useCookie<Boolean>('loadedRecently', {
    maxAge: 21600
});