<script setup lang="ts">
import { useTemplateRef, onMounted, ref } from 'vue';
import type { Ref } from 'vue';
const loadingProgress = inject<Ref<number>>('loadingProgress', ref(0));

const border = 1;
const segmentSize = 8;
const padding = 4;
const gap = 2;

const bar = useTemplateRef('bar');

const fillWidth = computed(() => {
    if (!bar.value) return;
    let fullWidth = bar.value?.offsetWidth;
    let innerWidth = fullWidth - 2 * (padding + border);
    let segments = (innerWidth + gap) / (segmentSize + gap) + 1;

    let filledSegments = Math.round(loadingProgress.value * segments);
    let value = Math.min(innerWidth, filledSegments * (segmentSize + gap));
    return value;
});
</script>
<template>
<div ref="bar" class="xp-progress-bar">
    <div ref="fill" class="xp-progress-bar-fill"></div>
</div>
</template>
<style scoped>
.xp-progress-bar {
    width: 100%;
    height: 18px;
    background: white;
    border: v-bind('border + "px"') solid #444;
    box-shadow: inset 1px 1px 1px 0px #0000004f, inset -1px -1px 1px 0px #0000001f;
    border-radius: 4px;
    display: flex;
    padding: v-bind('padding + "px"');
}

.xp-progress-bar-fill {
    height: v-bind('segmentSize')px;
    background: repeating-linear-gradient(
    90deg, 
    #3d892e,
    #3d892e v-bind('segmentSize + "px"'),
    #00000000 v-bind('segmentSize + "px"'),
    #00000000 v-bind('segmentSize + gap + "px"')
    );
    width: v-bind('fillWidth + "px"');
}

@keyframes progress-bar {
    from {width: 0%;}
    to {width: 100%;}
}
</style>