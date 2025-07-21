<template>
    <div class="cursor-lines-container">
        <div :style="horizontalLineStyle" class="horizontal-line"></div>
        <div :style="verticalLineStyle" class="vertical-line"></div>
        <img :style="cursorStyle" class="custom-cursor" src="/crosscursor.svg" alt="cursor" />
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const mouseX = ref(0)
const mouseY = ref(0)

const updateMousePosition = (event) => {
    mouseX.value = event.clientX
    mouseY.value = event.clientY
}

onMounted(() => {
    window.addEventListener('mousemove', updateMousePosition)
})
onUnmounted(() => {
    window.removeEventListener('mousemove', updateMousePosition)
})

const horizontalLineStyle = computed(() => ({
    transform: `translateY(${mouseY.value}px)`
}))

const verticalLineStyle = computed(() => ({
    transform: `translateX(${mouseX.value}px)`
}))

const cursorStyle = computed(() => ({
    left: `${mouseX.value}px`,
    top: `${mouseY.value}px`,
}))
</script>


<style scoped>
.cursor-lines-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    z-index: 999;
    /* más bajo que el cursor */
}

/* Línea horizontal */
.horizontal-line {
    position: absolute;
    width: 100vw;
    height: 0.5px;
    background-color: rgb(240, 240, 240);
    mix-blend-mode: overlay;
}

/* Línea vertical */
.vertical-line {
    position: absolute;
    width: 0.5px;
    height: 100vh;
    background-color: rgb(240, 240, 240);
    mix-blend-mode: overlay;
}

.custom-cursor {
    position: fixed;
    width: 32px;
    /* o el tamaño de tu SVG */
    height: 32px;
    pointer-events: none;
    z-index: 9999;
    /* por encima de todo */
    transform: translate(-50%, -50%);
}
</style>