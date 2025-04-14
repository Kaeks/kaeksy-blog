import "./style.css"

const timer = (ms) => new Promise(res => setTimeout(res, ms));

const newLineRegex = /\n/;

async function slowTypeLine(string, parent, delay=100) {
  let cmd = getLastCmd(parent);
  for (let i = 0; i < string.length; i++) {
    let char = string.charAt(i);
    cmd.innerHTML += char;
    await timer(delay);
  }
}

async function slowType(string, parent, delay=100, lineDelay=300) {
  let lines = string.split(newLineRegex);
  if (lines.length === 0) {
    lines[0] = string;
  }
  for (let line of lines) {
    await slowTypeLine(line, parent, delay);
    let blinker = parent.querySelector('.blinking');
    parent.insertBefore(document.createElement("br"), blinker);
    let sibling = document.createElement("span");
    sibling.classList.add("cmd");
    parent.insertBefore(sibling, blinker);
    await timer(lineDelay);
  };
}

function getLastCmd(parent) {
  let cmds = parent.querySelectorAll(".cmd")
  return cmds[cmds.length - 1];
}

const headerTerminal = document.querySelector("#head #command-prompt");

const welcomeMessage =
`hello! welcome to my stupid dumb little website`;

window.onload = async () => {

  if (["Chrome", "Chromium", "Edge"].includes(getBrowser(window.navigator.userAgent))) {
    showFirefoxRequest();
    return;
  }

  let cookie = getCookie("cookie");
  if (cookie === "") {
    showCookieDialog();
  }

  await slowType(welcomeMessage, headerTerminal, 50, 400);
}

const cookieTemplate = document.querySelector("#consent-template");
function showCookieDialog() {
  let clone = cookieTemplate.content.cloneNode(true);
  let cookieButtons = clone.querySelectorAll(".xp-dialog-button");
  for (let button of cookieButtons) {
    button.onclick = giveCookie;
  }
  document.querySelector("#fly").appendChild(clone);
}

const firefoxTemplate = document.querySelector("#firefox-template");
function showFirefoxRequest() {
  let clone = firefoxTemplate.content.cloneNode(true);
  document.querySelector("#fly").appendChild(clone);
}

function getCookie(name) {
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

function setCookie(name, value, days) {
  let d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value}; expires=${d.toUTCString()};`;
}

function giveCookie() {
  setCookie("cookie", "chocolate chip", 7);
  let consent = document.querySelector(".xp-window.consent");
  consent.remove();
}

const agentRegex = /([^\s\/]+)(?:(?:\/)([^\s\/]+))?(?: (\(.*\)))?/g;
function hasBrowserRegex(string) {
  return new RegExp(String.raw`${string}\/[^\s\/]+`, "g");
}
const re_ff = hasBrowserRegex("Firefox");
const re_sm = hasBrowserRegex("Seamonkey");
const re_ch = hasBrowserRegex("Chrome");
const re_chm = hasBrowserRegex("Chromium");
const re_sa = hasBrowserRegex("Safari");
const re_ed = hasBrowserRegex("Edg.*");

function getBrowser(agent) {
  let ff = !!agent.match(re_ff);
  let sm = !!agent.match(re_sm);
  let ch = !!agent.match(re_ch);
  let chm = !!agent.match(re_chm);
  let sa = !!agent.match(re_sa);
  let ed = !!agent.match(re_ed);
  if (sm) return "Seamonkey";
  if (ff) return "Firefox";
  if (ed) return "Edge";
  if (chm) return "Chromium";
  if (ch) return "Chrome";
  if (sa) return "Safari";
  return "";
}

function parseAgent(agent) {
  let items = agent.matchAll(agentRegex);
  for (let item of items) {
    let product = item[1];
    let version = item[2];
    let comment = item[3];
  }
}