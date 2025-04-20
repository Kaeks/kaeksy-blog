import "./index.css";
import * as _cookies from "./public/script/cookie.js";
import * as _popups from "./public/script/popups.js";
import * as _agent from "./public/script/agent.js";
import * as _terminal from "./public/script/terminal.js";
import { timer } from "./public/script/util.js";

function fixProgressBar(bar, duration=1) {
	let barFill = bar.querySelector(".xp-progress-bar-fill");
	let barWidth = bar.offsetWidth;
	let style = window.getComputedStyle(document.body);
	let barPadding = parseInt(style.getPropertyValue('--progress-bar-padding'), 10)
	let segmentSize = parseInt(style.getPropertyValue('--progress-bar-segment-size'), 10);
	let segmentGap = parseInt(style.getPropertyValue('--progress-bar-segment-gap'), 10);
	let segments = (barWidth - 2 * barPadding + segmentGap) / (segmentSize + segmentGap) + 1;
	barFill.style.animation = `progress-bar steps(${segments}, jump-none) ${duration}s infinite`
}

function setProgressBar(bar, percentage) {
	let barFill = bar.querySelector(".xp-progress-bar-fill");
	let barWidth = bar.offsetWidth - 2;
	let style = window.getComputedStyle(document.body);
	let barPadding = parseInt(style.getPropertyValue('--progress-bar-padding'), 10)
	let segmentSize = parseInt(style.getPropertyValue('--progress-bar-segment-size'), 10);
	let segmentGap = parseInt(style.getPropertyValue('--progress-bar-segment-gap'), 10);
	let innerWidth = barWidth - 2 * barPadding;
	let segments = (innerWidth + segmentGap) / (segmentSize + segmentGap) + 1;

	let filledSegments = Math.round(percentage * segments);
	let fillWidth = Math.min(innerWidth, filledSegments * (segmentSize + segmentGap));
	barFill.style.width = `${fillWidth}px`;
}

const overlay = document.querySelector("#fly");

const headerTerminal = document.querySelector("#head #command-prompt");

const welcomeMessage =
`hello! welcome to my stupid dumb little website`;

function detectChromium() {}

window.onload = async () => {
	await loading();
	
	if (["Chrome", "Chromium", "Edge"].includes(_agent.getBrowser())) {
		_popups.showFirefoxRequest();
		return;
	}
	
	let cookie = _cookies.getCookie("cookie");
	if (cookie === "") {
		_popups.showCookieDialog();
	}
	
	_terminal.slowType(welcomeMessage, headerTerminal, 50, 400);
}

function bfs(root) {
	let elements = [root];
	let queue = []
	queue.push(root);
	while (queue.length > 0) {
		let element = queue.shift();
		for (let child of element.children) {
			elements.push(child);
			queue.push(child);
		}
	}
	return elements;
}

function destroyLoader() {
	let loader = document.getElementById("loader");
	loader.remove();
	overlay.classList.add("hidden");
}

function hideAll(list) {
	for (let element of list) {
		element.style.visibility = "hidden";
	}
}

const audioTester = document.getElementById("test-sound-player");
async function checkAutoplay() {
	let audioPromise = audioTester.play();
	if (audioPromise !== undefined) {
		try {
			await audioPromise;
			return true;
		} catch (error) {
			console.log(error);
		}
	}
	return false;
}

async function ensureAutoplay() {
	let allowed = await checkAutoplay();
	if (allowed) {
		return;
	}
	let _soundpls;
	let promise = new Promise(resolve => _soundpls = resolve);
	_popups.showSoundDialog(_soundpls);
	let result = await promise;
	console.log(result);
	let dialog = document.querySelector("#sound-consent");
	dialog.classList.add("hidden");
	await timer(1000);
}

async function loading() {
	let fly = document.getElementById("fly");
	fly.classList.remove("hidden");
	let page = document.getElementById("page");
	let bfslist = bfs(page);
	hideAll(bfslist);

	await ensureAutoplay();
	let loader = document.getElementById("loader");
	loader.classList.remove("hidden");

	let progressBar = loader.querySelector(".xp-progress-bar");
	for (let [i, element] of bfslist.entries()) {
		element.style.visibility = "visible";
		setProgressBar(progressBar, (i + 1) / bfslist.length);
		await timer(400);
	}
	await timer(1000);
	destroyLoader();
	await timer(1000);
}

const targetNode = document.getElementById("fly");
const config = { attributes: true, childList: true, subtree: true };
const callback = (mutantionsList, observer) => {
	for (const mutation of mutantionsList) {
		if (mutation.type === "childList") {
			console.log("Child node added or removed");
		} else if (mutation.type === "attributes") {
			console.log(`Attribute ${mutation.attributeName} was modified`);
		}
	}
};
const observer = new MutationObserver(callback);
observer.observe(targetNode, config);