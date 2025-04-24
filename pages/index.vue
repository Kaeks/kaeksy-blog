<script setup lang="ts">
import Dialog from "~/components/dialog.vue";
import bunny from "~/assets/img/bunny.png";
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
let message = ref("welcome");
onNuxtReady(() => {
    let index = getRandomIntInRange(0, strings.length - 1);
    message.value = strings[index];
});
</script>

<template>
    <div id="left-content">
        <Dialog id="hello" :img-url="bunny">
            woaghh!! {{ message }} to my website. maybe look around a little.....
        </Dialog>
        <div id="about" class="cool-box">
            <h1>whuh?</h1>
            hi, i am jana.<br>
            i don't really know what to put in a little bio like this.<br><br>
            check out my blog --&gt;
        </div>
    </div>
    <div id="linques" class="cool-box">
        <h1>linques</h1>
        <div class="link"><a href="http://lexie.land">❤️ wife ❤️</a></div>
        <div class="link"><a href="blog">Blog</a></div>
        <div class="link"><a href="bookmarks">Bookmarks</a></div>
        <div class="link"><a href="">pee</a></div>
    </div>
</template>

<style>
#content {
    display: grid;
    grid-template-columns: 13fr 7fr;
}

#left-content {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

#hello {
}

#about {
}

#linques {
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.link {
    height: 2rem;
    background-color: #222;
    border-top: 2px solid #333;
    border-left: 2px solid #333;
    border-right: 2px solid #000;
    border-bottom: 2px solid #000;
    transition: 0.1s;
}

.link a {
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: inherit;
    display: flex;
    align-items: center;
    padding: 0px 8px;
    transition: 0.1s;
}

.link:hover {
    box-shadow: inset 0 0 0 2px #111, inset 2px 2px 0 2px #ff5500, inset -2px -2px 0 2px #ff9900;
}

.link:hover a {
    padding-left: 20px;
}

#linques h1 {
    text-align: center;
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