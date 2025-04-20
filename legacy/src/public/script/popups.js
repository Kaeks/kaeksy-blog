import * as _cookies from "./cookie.js";
import * as _util from "./util.js";

var cursorPosition = [];

window.onmousemove = (event) => {
    cursorPosition[0] = event.clientX;
    cursorPosition[1] = event.clientX;
}

function getRandomLocation(xmin, xmax, ymin, ymax) {
    let x = _util.getRandom(xmin, xmax);
    let y = _util.getRandom(ymin, ymax);
    return [x, y];
}

const cookieTemplate = document.querySelector("#consent-template");
export function showCookieDialog() {
    let clone = cookieTemplate.content.cloneNode(true);
    let cookieButtons = clone.querySelectorAll(".xp-dialog-button");
    for (let button of cookieButtons) {
        button.onclick = _cookies.giveCookie;
    }
    let element = clone.firstElementChild;
    let position = getRandomLocation(400, 600, 200, 400);
    element.style.left = `${position[0]}px`;
    element.style.top = `${position[1]}px`
    document.querySelector("#popup-container").appendChild(clone);
}

const firefoxTemplate = document.querySelector("#firefox-template");
export function showFirefoxRequest() {
    let clone = firefoxTemplate.content.cloneNode(true);
    document.querySelector("#fly").classList.remove("hidden");
    document.querySelector("#fly").appendChild(clone);
}

const autoplayPls = document.querySelector("#sound-consent");
export function showSoundDialog(func) {
    autoplayPls.classList.remove("hidden");
    let tada = autoplayPls.querySelector("#sound-consent-tada");
    let done = autoplayPls.querySelector("#sound-consent-done");
    let player = autoplayPls.querySelector("#sound-consent-player");
    tada.onclick = () => {
        player.play();
    };
    done.onclick = func;
}