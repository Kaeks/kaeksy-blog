<script setup lang="ts">
const { getRandomIntInRange } = useRandom();
const strings = [
    "hii a-li-en!",
    "welcome",
    "whalecome",
    "helo",
    "bone jure",
    "munancho",
    "gleeb glorb!"
];
let message = strings[getRandomIntInRange(0, strings.length)];
</script>

<template>
    <div id="hello" class="cool-box">
        <h1>{{ message }}</h1>
        you have found your way onto my website. look around. or don't
    </div>
    <div id="linques" class="cool-box">
        linques
    </div>
</template>

<style>
#hello {
	width: 65%;
}

#linques {
	width: 35%;
}

#loader {
	top: 30%;
	position: fixed;
}

.firefox-pls {
	top: 30%;
	position: fixed;
}
</style>