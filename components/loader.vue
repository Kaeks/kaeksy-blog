<script setup lang="ts">
import Window from "./xp/window.vue";
import ProgressBar from "./xp/progress-bar.vue";
</script>
<template>
<Window>
    <template v-slot:title>
        Downloading index.html
    </template>
    <template v-slot:content>
        <div class="xp-file-transfer">
            <img src="~/assets/img/globe.png"/>
            <div class="xp-file"><div class="xp-file-sprite"></div></div>
            <img src="~/assets/img/folder.png"/>
        </div>
        Opening:<br>
        index.html from <!--<script>document.write(window.location.href);</script>-->
        <ProgressBar />
    </template>
</Window>
</template>
<style scoped>
.xp-file-transfer {
    width: 256px;
    display: flex;
    justify-content: space-between;
}

.xp-file {
    position: absolute;
    animation: xp-file steps(21) 2s infinite;
}

.xp-file-sprite {
    width: 32px;
    height: 32px;
    background: url("~/assets/img/xp file.png") 0 0 no-repeat;
    background-size: 2200%;
    image-rendering: crisp-edges;
    animation: xp-file-sprite steps(21, jump-none) 2s infinite;
}

@keyframes xp-file-sprite {
    0% {background-position: 0%;} 100% {background-position: 100%;}
}

@keyframes xp-file {
    0% {left: 24px; top: 13px;}
    25% {top: 3px;}
    50% {top: 0px;}
    75% {top: 3px;}
    100% {left: 248px; top: 13px;}
}
</style>