import { timer } from "./util.js";

const newLineRegex = /\n/;

export async function slowTypeLine(string, parent, delay=100) {
	let cmd = getLastCmd(parent);
	for (let i = 0; i < string.length; i++) {
		let char = string.charAt(i);
		cmd.innerHTML += char;
		await timer(delay);
	}
}

export async function slowType(string, parent, delay=100, lineDelay=300) {
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