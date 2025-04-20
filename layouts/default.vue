<template>
<ClientOnly>
<div id="popup-container">
    <slot name="popups">
    </slot>
</div>
<div v-show="showFlying" id="fly-container">
    <Loader v-if="flyingState.loader" />
    <slot name="flying">
    </slot>
</div>
</ClientOnly>
<div v-show="isPageReady" id="container">
    <div id="page">
        <Header />
        <div id="content">
            <slot>
                <div>Default content</div>
            </slot>
        </div>
    </div>
    <Footer />
</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Loader from "~/components/loader.vue";

const timer = useTimer();
const flyingState = useFlying();
const loaderState = computed(() => flyingState.value.loader);
const showFlying = computed(() => {
    return flyingState.value.loader;
});

const loadingProgress = ref<number>(0);
provide<Ref<number>>("loadingProgress", loadingProgress);

const rootId = "container";
const hiddenClass = "hidden";

const isPageReady = ref(false);

const bfs = (root:Element) => {
	let elements = [root];
	let queue = [root];
	while (queue.length > 0) { // <-- there is for sure something in the queue
		let element = queue.shift()!; // so: non-null assertion operator
		for (let child of element.children) {
			elements.push(child);
			queue.push(child)
		}
	}
	return elements;
}

const triggerLoad = async () => {
	flyingState.value.loader = true; // show the loader
    let root;
    if (import.meta.client) {
	    document.querySelectorAll(`#${rootId} *`)
		    .forEach(el => el.classList.add(hiddenClass)); // hide all elements
	    // slowly reveal the elements
	    root = document.getElementById(rootId);
    }
	if (!root) return; // guard: if root somehow couldn't be found
	let elements = bfs(root);
	for (let [i, element] of elements.entries()) {
		element.classList.remove(hiddenClass);
		loadingProgress.value = (i + 1) / elements.length;
		await timer(400);
	}
    await timer(1000);
    flyingState.value.loader = false;
}

const loadedRecently = useCookieLoaded()
if (loadedRecently.value) {
    // do it quicker if it's already true
    // it won't change state to no suddenly
    isPageReady.value = true;
}

onNuxtReady(() => {
    isPageReady.value = true;
    if (loaderState.value) {
        console.log(import.meta.server)
        triggerLoad();
    }
});
</script>