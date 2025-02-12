<template>
    <NuxtLink :to="page">
        <div class="project_card flex flex-col w-[19vw] h-[27.5vh] font_body_md_gris gap-1 cursor-pointer">
            <!-- Imagen posterizada    100% tienen que ser gifs -->
            <div class="project_posterized_image relative w-full h-full bg-contain bg-center transition-all duration-100 group cursor-pointer"
                :style="{ backgroundImage: `url(${posterized_thumbnail})` }">
                <div class="project_image_overlay absolute inset-0 bg-[#eeeeee] mix-blend-screen pointer-events-none">
                </div>
                <div class="project_image absolute inset-0 bg-contain bg-center transition-opacity duration-100 opacity-0 group-hover:opacity-100 cursor-pointer"
                    :style="{ backgroundImage: `url(${project_tumbnail})` }"></div>
            </div>

            <!-- Contenido de la tarjeta -->
            <div class="project_card_bttm flex flex-row justify-between items-baseline cursor-pointer">
                <div class="project_name">{{ project_title }}</div>
                <div class="project_date fecha_card_proy">{{ project_date }}</div>
            </div>
        </div>
    </NuxtLink>
</template>


<script setup>


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
/* Media query para pantallas móviles (max-width: 640px) */
@media (max-width: 640px)
  /* Tarjetas individuales */
  .project_card
    width: 95vw 
    // height: auto
    margin: 0 auto

</style>
