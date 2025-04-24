export default defineNuxtRouteMiddleware((to, from) => {
    if (to.path.length > 1 && to.path.endsWith('/')) {
        const newTo = to.path.replace(/\/+$/, '');
        return navigateTo(newTo, { redirectCode: 301, replace: true });
    }
});