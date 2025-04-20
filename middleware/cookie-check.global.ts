import { parseCookies } from "h3";
export default defineNuxtRouteMiddleware((to, from) => {
    const flyingState = useFlying(); // state loader

    if (import.meta.server) {
        // On the server, we get the event
        const event = useRequestEvent()!;
        const cookies = parseCookies(event);
        const serverLoadedRecently = cookies["loadedRecently"] === "true";
        flyingState.value.loader = !serverLoadedRecently;
        if (!serverLoadedRecently) {
            // set server-side cookie? idk
        }
    }

    if (import.meta.client) {
        const loadedRecently = useCookieLoaded(); // cookie loader
        console.log(loadedRecently.value);
        flyingState.value.loader = !loadedRecently.value;
        if (!loadedRecently.value) {
            loadedRecently.value = true;
        }
    }
});