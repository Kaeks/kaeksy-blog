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

export function getBrowser(agent = window.navigator.userAgent) {
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

export function parseAgent(agent) {
	let items = agent.matchAll(agentRegex);
	for (let item of items) {
		let product = item[1];
		let version = item[2];
		let comment = item[3];
	}
}