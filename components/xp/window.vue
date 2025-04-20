<script setup>
import ProgressBar from "./progress-bar.vue";
</script>
<template>
<div class="xp-window">
    <div class="xp-window-title">
        <span><slot name="title"/></span>
        <div class="xp-window-nav">
    	    <button class="xp-window-nav-button xp-window-close" onclick="console.log('ARGGGG')">X</button>
        </div>
    </div>
    <div class="xp-window-content vertical">
        <slot name="content"/>
    </div>
</div>
</template>
<style>
.xp-window {
    background: linear-gradient(135deg, #0053e1, #0036aa);
    font-family: Tahoma, 'Segoe UI', Geneva, Verdana, sans-serif;
    display: grid;
    grid-template-rows: 2em auto;
    width: fit-content;
    height: fit-content;
    border-radius: 10px 10px 0 0;
    box-shadow:
    inset 0 5px 5px -3px /*#1269ff*/ #ffffff4d,
    inset 0 -10px 10px 0px #0036aa,
    inset 10px 0 10px 0px #0036aa,
    inset -10px 0 10px 0px #0036aa;
    overflow: hidden;
}

.xp-window-title {
    color: white;
    text-shadow: 1px 1px 1px black;
    font-weight: bold;
    display: flex;
    align-items: center;
    padding: 5px 5px;
    box-shadow:
    inset 0 -6px 5px -5px #ffffff4d;
    justify-content: space-between;
    gap: 20px;
}

.xp-window-content {
    position: relative;
    padding: 15px;
    background: #edead9;
    color: black;
    margin: 0 3px 3px 3px;
    font-size: 10pt;
    box-shadow: 0 0 5px 4px #00168ad4;
    z-index: 2;
    display: flex;
}

.xp-window-content.vertical {
    flex-direction: column;
    gap: 10px;
}

.xp-window-content.dialog {
    display: grid;
    grid-template-columns: 32px auto;
    grid-auto-rows: auto;
    row-gap: 20px;
    justify-content: center;
    align-items: center;
}

.xp-window-content-text {
    padding: 0 20px;
}

.xp-window-content-image {
    height: 100%;
    display: flex;
    flex-direction: column;
}

.xp-window-content-image > img {
    width: 32px; height: 32px;
}

.xp-window-nav-button {
    padding: 0;
    color: white;
    text-align: center;
    font-weight: 1000;
    border: 1px solid white;
    border-radius: 3px;
    width: 1.3rem;
    height: 1.3rem;
    box-shadow: inset 3px 3px 3px 0 #ffffff4d;
}

.xp-window-nav-button:hover {
    box-shadow: inset 3px 3px 3px 0 #ffffff8d;
}

.xp-window-nav-button:active {
    box-shadow: inset 0 0 3px 0 #0000003f;
}

.xp-window-close {
    background: #ff5566;
}

.xp-dialog-button-container {
    grid-area: 2 / 1 / 2 / 3 ;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
}

.xp-dialog-button {
    background: #edead9;
    border: 1px solid black;
    min-width: 4rem;
    box-shadow: inset 2px 2px 2px 0px #ffffffd4, inset -2px -2px 2px 0px #0000002f;
    border-radius: 1px;
}

.xp-dialog-button:hover {
    box-shadow: inset 2px 2px 2px 2px #ffffffe4, inset -2px -2px 2px 0px #0000001f;
}

.xp-dialog-button:active {
    box-shadow: inset 2px 2px 2px 0px #0000004f, inset -2px -2px 2px 0px #00000001;
}
</style>