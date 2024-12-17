<template>

    <NuxtLink :to="page">
        <div class="project_card flex flex-col w-[10.5vw] h-[30.5vh]" @mouseenter="isHovered = true"
            @mouseleave="isHovered = false">
            <!-- Imagen posterizada    100% tienen que ser gifs -->
            <div class="project_posterized_image relative w-full h-full bg-contain bg-center transition-all duration-100 group"
                :style="{ backgroundImage: `url(${posterized_thumbnail})` }">
                <div class="project_image_overlay absolute inset-0 bg-[#eeeeee] mix-blend-screen pointer-events-none">
                </div>
                <div class="project_image absolute inset-0 bg-contain bg-center transition-opacity duration-100 opacity-0 group-hover:opacity-100"
                    :style="{ backgroundImage: `url(${project_tumbnail})` }"></div>
            </div>

            <!-- Contenido de la tarjeta -->
            <div class="project_card_bttm flex flex-row items-baseline justify-end">
                <div class="project_name fecha_card_proy" :class="{ 'hovered-class': isHovered }"
                    @mouseenter="onHover(true)" @mouseleave="onHover(false)">{{ project_title
                    }}</div>
                <!-- <div class="project_date fecha_card_proy">{{ project_date }}</div> -->
            </div>
        </div>

    </NuxtLink>

</template>


<script setup>
import { ref } from 'vue';

const isHovered = ref(false);
function onHover(state) {
    isHovered.value = state;
}

let props = defineProps({
    id: Number,
    project_title: String,
    project_date: String,
    project_tumbnail: String,
    posterized_thumbnail: String,
    page: String,
})
</script>




<style scoped lang="sass">
.project_card_bttm 
    visibility: hidden
.hovered-class 
    visibility: visible
/* Media query para pantallas móviles (max-width: 640px) */
@media (max-width: 640px)
  /* Tarjetas individuales */
  .project_card
    width: 100% 
    // height: auto
    max-width: 100% 
    margin: 0 auto

</style>