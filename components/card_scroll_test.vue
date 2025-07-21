<template>
  <div>
    <!-- Link de la tarjeta -->
    <NuxtLink :to="page">
      <div :id="'project_card_' + id" class="project_card flex flex-col w-[22vw] h-[30.5vh] font_body_md_gris">

        <!-- Imagen posterizada (siempre teñida con fondo fijo) -->
        <div
          class="project_posterized_image relative w-full h-full bg-contain bg-center transition-all duration-100 group"
          :style="{ backgroundImage: `url(${posterized_thumbnail})`, backgroundColor: '#eeeeee', mixBlendMode: 'screen' }">

          <div class="project_image absolute inset-0 bg-contain bg-center transition-opacity duration-100"
            :class="{ 'opacity-100': isActive, 'opacity-0': !isActive }"
            :style="{ backgroundImage: `url(${project_tumbnail})` }">
          </div>
        </div>

        <!-- Contenido de la tarjeta -->
        <div class="project_card_bttm flex flex-row justify-between items-baseline">
          <div class="project_name">{{ project_title }}</div>
          <div class="project_date fecha_card_proy">{{ project_date }}</div>
        </div>
      </div>
    </NuxtLink>

    <!-- Mostrar el valor del scroll -->
    <div class="scroll-value fixed top-10 left-0 p-2 bg-black text-white">
      Scroll Y: {{ scrollY }} px
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

let props = defineProps({
  id: Number,
  project_title: String,
  project_date: String,
  project_tumbnail: String,
  posterized_thumbnail: String,
  page: String,
});

// Reactividad para saber si la tarjeta debe ser visible
const isActive = ref(false);

// Para almacenar el valor actual del scroll
const scrollY = ref(0);

// Obtener el contenedor de la galería
const galleryRef = ref(null);

// Manejador de scroll para cambiar el estado de cada tarjeta basado en el scroll
const handleScroll = () => {
  // Verificamos si el contenedor de la galería existe
  if (!galleryRef.value) return;

  // Obtener la posición del scroll de la galería
  const scrollPosition = galleryRef.value.scrollTop + window.innerHeight;
  scrollY.value = galleryRef.value.scrollTop;

  // Definir el valor de activación para cada tarjeta basado en el valor del scroll
  if (scrollPosition < 10 && props.id === 1) {
    isActive.value = true;
  } else if (scrollPosition >= 10 && scrollPosition < 20 && props.id === 2) {
    isActive.value = true;
  } else if (scrollPosition >= 20 && scrollPosition < 30 && props.id === 3) {
    isActive.value = true;
  } else {
    isActive.value = false;
  }
};

onMounted(() => {
  // Añadimos el event listener al contenedor de la galería
  if (galleryRef.value) {
    galleryRef.value.addEventListener('scroll', handleScroll);
  }
});

onBeforeUnmount(() => {
  // Eliminamos el event listener al desmontar el componente
  if (galleryRef.value) {
    galleryRef.value.removeEventListener('scroll', handleScroll);
  }
});
</script>

<style scoped lang="css">
/* Media query para pantallas móviles (max-width: 640px) */
@media (max-width: 640px) {

  /* Tarjetas individuales */
  .project_card {
    width: 95vw;
    margin: 0 auto;
  }

  /* Reemplazamos el hover para la tarjeta con scroll-triggered visibility */
  .project_image {
    transition: opacity 0.5s ease-in-out;
  }
}

/* En desktop, el hover sigue funcionando como estaba definido antes con Tailwind */
@media (min-width: 641px) {
  .project_card .project_posterized_image {
    position: relative;
    overflow: hidden;
  }

  .project_card .project_image {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  .project_card:hover .project_image {
    opacity: 1;
    /* Aquí se activa el hover */
  }
}
</style>