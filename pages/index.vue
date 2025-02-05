<!-- ---------------------- ESTE ES EL HOME --------------- -->
<template>
  <CustomCursor />
  <div>
    <NuxtLayout>

    </NuxtLayout>
  </div>

  <div class="home mx-auto pt-6 pl-8 bg-white">
    <div class="nav_holder fixed bottom-[0] w-full">
      <Navigation />
    </div>
    <div class="nav_mobile_holder hidden fixed w-full">
      <Navigation_mobile />
    </div>
    <div class="projects_gallery flex flex-wrap gap-[1vw] max-w-[70%]">
      <Card class="card" v-for="(card) in cards" :page="card.page" :project_tumbnail="card.project_tumbnail"
        :project_date="card.project_date" v-bind:project_title="card.project_title"
        :posterized_thumbnail="card.posterized_thumbnail" />
      <Card_small class="small_card" v-for="(smallCard) in smallCards" :page="smallCard.page"
        :project_tumbnail="smallCard.project_tumbnail" :project_date="smallCard.project_date"
        v-bind:project_title="smallCard.project_title" :posterized_thumbnail="smallCard.posterized_thumbnail" />
    </div>
<LanguageSwitcher />
  </div>
</template>


<script setup>
import { ref } from 'vue';

const cards = ref([
  {
    id: 1,
    project_title: 'Faux',
    project_date: '09/2023',
    project_tumbnail: '/img/faux/faux_thumb.gif',
    posterized_thumbnail: '/img/faux/faux_trshld_thumbnail_4x.webp',
    page: '/faux',
  },
  {
    id: 2,
    project_title: 'El Grande',
    project_date: '01/2024',
    project_tumbnail: '/img/elgrande/grande.gif',
    posterized_thumbnail: '/img/elgrande/grande_thumb.webp',
    page: '/elgrande',
  },
  {
    id: 3,
    project_title: 'Sala Equis',
    project_date: '12/2023',
    project_tumbnail: '/img/SALAEQUIS/salaequis_thumb.gif',
    posterized_thumbnail: '/img/SALAEQUIS/salaequis_trshld.webp',
    page: '/salaequis',
  },
  {
    id: 4,
    project_title: 'Junicode Modular',
    project_date: '03/2024',
    project_tumbnail: '/img/junicode/junicode_thumb.gif',
    posterized_thumbnail: '/img/junicode/junicode_thumb_static.gif',
    page: '/junicode',
  },
])

const smallCards = ref([
  {
    id: 1,
    project_title: 'Arrow Index',
    project_date: '02/2024',
    project_tumbnail: '/img/arrow_index/arrows_thumbnail.gif',
    posterized_thumbnail: '/img/arrow_index/arrows_trshld_thumbnail.webp',
    page: 'arrow_index',
  },
  {
    id: 2,
    project_title: 'Lagrima #3',
    project_date: '02/2024',
    project_tumbnail: '/img/lagrima/lagrima.gif',
    posterized_thumbnail: '/img/lagrima/lagrima_thumn_tresh.webp',
    page: 'lagrima',
  },
  {
    id: 3,
    project_title: 'processing sketches',
    project_date: '05/2024',
    project_tumbnail: '/img/processing/ppl_ascii.gif',
    posterized_thumbnail: '/img/processing/processing_thumb1.webp',
    page: '/',
  },
])
</script>


<style scoped lang="sass">
.home
  background-color: white  // 
  cursor: none


/* Media query para móviles (max-width: 640px) */
@media (max-width: 641px)
  .home
    padding-top: 0
    padding-left: 0
    height: 100vh // Asegura que ocupe toda la altura del viewport 
    background: white
    width: 100%
    /* Galería de proyectos */
    .projects_gallery
      padding-top: 3.2rem
      justify-content: center
      align-items: center
      margin-bottom: 4rem
      display: grid
      grid-template-columns: repeat(2,1fr)
      max-width: 100vw  
      gap: 1rem
      padding-bottom: 4rem
      .card
        grid-column: span 2 
        cursor: pointer !important
      .small_card
    .nav_holder
      display: none
    .nav_mobile_holder
      position: fixed // Se mantiene fija respecto al contenedor que hace scroll 
      top: 0 // Queda anclada en la parte superior 
      z-index: 10 // Asegura que esté por encima de otros elementos 
      width: 100%
      background: white
      display: block
  </style>
