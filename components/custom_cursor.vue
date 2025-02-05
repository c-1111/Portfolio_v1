<template>
    <div>
        <div :style="horizontalLineStyle" class="horizontal-line"></div>
        <div :style="verticalLineStyle" class="vertical-line"></div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Definir posiciones reactivas del cursor
const mouseX = ref(0)
const mouseY = ref(0)

// Actualizar posición del cursor cuando el mouse se mueve
const updateMousePosition = (event) => {
    mouseX.value = event.clientX
    mouseY.value = event.clientY
}

// Añadir y eliminar el event listener al montar/desmontar
onMounted(() => {
    window.addEventListener('mousemove', updateMousePosition)
})
onUnmounted(() => {
    window.removeEventListener('mousemove', updateMousePosition)
})

// Estilos reactivos para el cursor y las líneas
const cursorStyle = computed(() => ({
    left: `${mouseX.value}px`,
    top: `${mouseY.value}px`,
}))

const horizontalLineStyle = computed(() => ({
    top: `${mouseY.value}px`,
}))

const verticalLineStyle = computed(() => ({
    left: `${mouseX.value}px`,
}))


</script>

<style scoped>
/* Línea horizontal */
.horizontal-line {
    position: fixed;
    width: 100vw;
    height: .1px;
    background-color: rgb(240, 240, 240);
    pointer-events: none;
    z-index: 999;
    mix-blend-mode: overlay;
}

/* Línea vertical */
.vertical-line {
    position: fixed;
    width: .1px;
    height: 100vh;
    background-color: rgb(240, 240, 240);
    pointer-events: none;
    z-index: 999;
    mix-blend-mode: overlay;
}
</style>