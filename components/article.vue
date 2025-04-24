<script setup lang="ts">
const props = defineProps({
    title: String
});
const title = props.title;
defineExpose({
    title
});
</script>

<template>
<div id="article-title">
    {{ title }}
</div>
<div id="article-content">
    <slot name="content"></slot>
</div>
    <slot v-if="false" name="description"></slot>
</template>

<style scoped>

</style>