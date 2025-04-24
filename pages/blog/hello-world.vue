<script setup lang="ts">
import Article from '~/components/article.vue';
</script>

<template>
    belhhhh
<Article ref="article" title="This is article 0's title">
<template #description>
    This is a short description of article 0
</template>
<template #content>
    This<br>
    is<br>
    article<br>
    0's<br>
    content.
    <div>
        nested
        <div>
            again
            <div>
                and again
            </div>
        </div>
    </div>
</template>
</Article>
</template>

<style>
</style>