<script setup lang="ts">
import frame from "~/assets/img/frame.png";
defineProps({
    imgUrl: String
});
</script>

<template>
<div class="rpg-dialog">
    <div class="rpg-dialog-character">
        <img class="rpg-dialog-character-frame" :src="frame">
        <img class="rpg-dialog-character-image" :src="imgUrl"/>
    </img>
    </div>
    <div class="rpg-dialog-text pixel-corners">
        <slot />
    </div>
</div>
</template>

<style>
.rpg-dialog {
    display: flex;
    flex-direction: row;
    flex-shrink: 0;
    gap: 8px;
    width: 100%;
}

.rpg-dialog-character {
    width: 80px;
    height: 80px;
    position: relative;
    flex-shrink: 0;
}

.rpg-dialog-character-frame {
    width: 80px;
    height: 80px;
    position: absolute;
    top: 0;
}

.rpg-dialog-character-image {
    position: absolute;
    top: 8px;
    left: 8px;
    width: 64px;
    height: 64px;
    background: repeating-linear-gradient(-45deg,
        #222 0,
        #222 16px,
        #444 16px,
        #444 32px
    );
}

.rpg-dialog-text {
    padding: 8px 12px;
    background-color: #222;
    border-top: 2px solid #333;
    border-left: 2px solid #333;
    border-right: 2px solid #000;
    border-bottom: 2px solid #000;
    box-shadow:  inset 0 0 0 2px #111, inset 2px 2px 0 2px #aa00dd, inset -2px -2px 0 2px #dd00aa;
    width: 100%;
}

.pixel-corners {
  clip-path: polygon(
    0px calc(100% - 4px),
    4px calc(100% - 4px),
    4px 100%,
    calc(100% - 4px) 100%,
    calc(100% - 4px) calc(100% - 4px),
    100% calc(100% - 4px),
    100% 4px,
    calc(100% - 4px) 4px,
    calc(100% - 4px) 0px,
    4px 0px,
    4px 4px,
    0px 4px
  );
}

</style>