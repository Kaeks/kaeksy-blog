export function getCookie(name) {
    name = `${name}=`;
    let decoded = decodeURIComponent(document.cookie);
    let cookies = decoded.split(";");
    for (let cookie of cookies) {
        while (cookie.charAt(0) === " ") {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) == 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return "";
}
  
export function setCookie(name, value, days) {
    let d = new Date();
    d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value}; expires=${d.toUTCString()};`;
}

export function giveCookie() {
    setCookie("cookie", "chocolate chip", 7);
    let consent = document.querySelector(".xp-window.consent");
    consent.remove();
}