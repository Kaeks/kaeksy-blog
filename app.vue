<script lang="ts" setup>
</script>

<template>
<NuxtLayout>
  <NuxtPage />
</NuxtLayout>
</template>

<style>
:root {
	--text-color: #b2b2b2;
}

* {
	box-sizing: border-box;
}

.hidden {
	visibility: hidden;
	display: none;
}

html, body {
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0;
}

html {
	background-image: url("~/assets/img/deepslate.png");
	background-size: 80px;
	image-rendering: crisp-edges;
}

body {
	backdrop-filter: brightness(15%);
}

/* Header */

#home-link {
	text-decoration: none;
	color: inherit;
}

#ascii {
	padding: 0;
	margin: 0;
	user-select: none;
}

#command-prompt {
	padding: 1rem 0;
}

.blinking {
	animation: blinking 1s steps(2, jump-none) infinite;
}

span.cmd::before {
	content: "> ";
}

@keyframes blinking {
	from {
		background-color: none;
	}
	to {
		background-color: var(--text-color);
	}
}

/* Page layout */

#container {
	display: grid;
	grid-template-rows: auto 50px;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
	row-gap: 50px;
	padding-top: 50px;
	
	color: var(--text-color);
	font-family: 'Courier New', Courier, monospace;
	font-weight: bold;
}

#page {
	height: 100%;
	width: 100vw;
	max-width: 900px;
	display: grid;
	grid-template-rows: 130px auto;
	box-shadow: 0 0 10px -5px black;
	row-gap: 10px;
	margin: 0 auto;
	z-index: 2;
}

#head {
	height: 130px;
	display: flex;
	padding: 0 10px;
	align-content: center;
	gap: 10px;
}


#foot {
	padding: 10px;
	text-align: center;
	vertical-align: middle;
	background: #171717df;
	height: 50px;
	width: 100vw;
	box-shadow: inset -4px -4px #0000002f, inset 4px 4px #ffffff0d, 0 0 20px 10px black;
	display: flex;
	align-items: center;
	justify-content: center;
}

#content {
	display: flex;
	/* height: 200vh; */
	gap: 10px;
}

.cool-box {
	border: 4px solid #555;
	background-color: #2e2f2fbf;
	box-shadow: inset -4px -4px #0000002f, inset 4px 4px #ffffff0d, 0 0 10px -5px black;
	
	box-sizing: border-box;
	padding: 10px;
}

.cool-box > h1 {
	margin: 0;
	padding: 0;
	font-weight: bold;
	color: #bbb;
	font-size: 1.5rem;
	font-style: italic;
}

.cool-box > h1::before {
	content: "/* ";
}

.cool-box > h1::after {
	content: " */";
}

#fly-container {
	position: fixed;
	display: flex;
	width: 100vw;
	height: 100vh;
	z-index: 255;
	justify-content: center;
	background: #000000bf;
}

#popup-container {
	pointer-events: none;
	position: fixed;
	width: 100vw;
	height: 100vh;
	z-index: 127;
}

.popup {
	position: fixed;
}
</style>