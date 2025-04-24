<script setup lang="ts">
import type { Article } from '#components';

const route = useRoute();
console.log(route?.path);

const subpages = await useSubpages(route.path);

</script>

<template>

<div v-if="$route.path !== '/blog'" id="article" class="cool-box">
    <NuxtPage />
</div>
<div v-else id="blog" class="cool-box">
    This is the blog landing page
    <div class="article-link" v-for="subpage of subpages" :key="subpage">
        <NuxtLink :to="`${route.fullPath}/${subpage}`">{{ subpage }}</NuxtLink>
    </div>
</div>
</template>

<style>
#blog {
    
}
.article-link {

}
</style>