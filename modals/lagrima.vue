<template>
  <MModal>
    <div ref="modalRef" class="project_cont">
      <div class="project_top">
        <div class="left">
          <div class="poster_container">
            <img src="/public/img/lagrima/LAGRIMA_3_POSTER.webp" alt="">
            <img class="story" src="/public/img/lagrima/LAGRIMA_3_POSTER_story.webp" alt="">
          </div>
        </div>
        <div class="right">
          <div class="right_top">
            <a href="https://www.instagram.com/lagrima.collective/" class="link enlace_lagrima" target="_blank"><svg
                xmlns="http://www.w3.org/2000/svg" width="23" height="9" viewBox="0 0 23 9">
                <path
                  d="M15.655 8.656v-2h3a2 2 0 1 0 0-4h-6a2 2 0 0 0-2 2h-2a4 4 0 0 1 4-4h6a4 4 0 1 1 0 8h-3Zm-8-8v2h-3a2 2 0 1 0 0 4h6a2 2 0 0 0 2-2h2a3.999 3.999 0 0 1-4 4H4.656a4 4 0 0 1 0-8h3Z"
                  clip-rule="evenodd" />
              </svg>lagrima.collective</a>
          </div>
          <div class="right_bttm">
            <p class="annotation">{{ t('lagrima_versiones') }}</p>
            <div class="versions_gallery">
              <div v-for="(image, index) in imageUrls">
                <img :src="image" :alt="'Image ' + (index)" class="gallery_img_small" @click="openLightbox(index)" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Lightbox Modal -->
      <div v-if="isLightboxOpen" class="lightbox" @click="closeLightbox">
        <div class="lightbox-content" @click.stop>
          <img :src="imageUrls[selectedImage]" :alt="'Lightbox Image ' + (selectedImage + 1)" />
        </div>
      </div>
    </div>
    <Exit_button @click="handleCloseClick" />
  </MModal>
</template>


<style scoped lang="sass">

.project_top
  display: flex
  justify-content: space-between
  align-items: flex-start
  height: 70vh
  .left
    display: flex
    flex-direction: column
    gap:2rem
    height: fit-content
    .poster_container
      display: flex
      gap: 2rem
      img
        max-height: 70vh
  .right
    display: flex
    flex-direction: column
    justify-content: space-between
    height: 100%
    .right_top
      display: flex
      flex-direction: column
      align-items: flex-end
      margin-bottom: 2rem
      justify-content: space-between
      .enlace_lagrima
        display: flex
        align-items: center
        gap: .2rem
        &:hover
          color: #ff5e00
          svg
            fill: #ff5e00
        svg
          fill: black
    .right_bttm
      display: flex
      flex-direction: column
      align-items: flex-end
      .annotation
        margin-bottom: .2rem
      .versions_gallery
        display: flex
        gap: 5px
        flex-wrap: wrap
        .gallery_img_small
          max-width: 70px
          object-fit: cover
          cursor: pointer

.lightbox
  position: fixed
  top: 0
  left: 0
  right: 1rem
  bottom: 0
  background: rgba(255, 255, 255, 0.5)
  display: flex
  justify-content: flex-end
  align-items: center
  z-index: 1000
.lightbox-content
  position: relative
  display: flex
  justify-content: center
  align-items: center
  max-width: 30vw
  max-height: 30vh
  width: auto
  height: auto
  object-fit: cover

@media (max-width: 640px)
  .project_cont
    overflow-y: auto
    height: 100% // Asegura que ocupe toda la altura del viewport 
    align-items: center
    width: 100%

    .project_top
      display: flex
      flex-direction: column
      width: 100%
      margin-top: 4rem
      .left
        display: flex
        flex-direction: column
        margin-bottom: .5rem

        .poster_container
          display: flex
          flex-direction: column
          gap: 2rem
          img
            width: 100%
          .story
            display: none
      .right
        display: flex
        flex-direction: column
        gap: 1rem
        align-items: flex-start
        .right_top
          display: flex
          flex-direction: column
          align-items: flex-end
          .enlace_lagrima
            display: flex
            align-items: center
            gap: .2rem
            &:hover
              color: #ff5e00
              svg
                fill: #ff5e00
            svg
              fill: black
        .right_bttm
          display: flex
          flex-direction: column
          align-items: start
          .annotation
            margin-bottom: .8rem
          .versions_gallery
            display: flex
            gap: 5px
            flex-wrap: wrap
            .gallery_img_small
              max-width: 70px
              object-fit: cover
              cursor: pointer
  .lightbox
    margin-inline: auto 2.5vw
    position: fixed
    inset: 0
    background: rgba(255, 255, 255, 0.5)
    display: flex
    z-index: 1000
  .lightbox-content
    max-width: 80vw
    width: auto
    height: auto

</style>



<script setup>
import { dirname } from "pathe";
import { useI18n } from 'vue-i18n';

const { t } = useI18n(); // Hook para obtener la función de traducción

// Referencia para el modal
const modalRef = ref(null);

// Obtener el router
const router = useRouter();

// Función para manejar el cierre del modal
const handleCloseClick = () => {
  navigateTo(dirname(router.currentRoute.value.path));
};

// Agregar eventos para cerrar el modal al hacer clic afuera o presionar la tecla Escape
onClickOutside(modalRef, handleCloseClick);
onKeyStroke("Escape", handleCloseClick);

// array para meter las fotos de la mini-galeria
const imageUrls = ref([
  '/img/lagrima/v_1_.webp',
  '/img/lagrima/v_2_.webp',
  '/img/lagrima/v_3_.webp',
  '/img/lagrima/v_4_.webp',
]);

// Navegar a la imagen anterior o siguiente
const navigateImage = (direction) => {
  if (!isLightboxOpen.value) return; // Asegurarse de que el lightbox esté abierto
  const newIndex = selectedImage.value + direction;
  if (newIndex >= 0 && newIndex < imageUrls.value.length) {
    selectedImage.value = newIndex;
  }
};

// Detectar la tecla presionada (flechas izquierda y derecha)
const handleKeydown = (event) => {
  if (!isLightboxOpen.value) return; // Asegurarse de que el lightbox esté abierto
  if (event.key === 'ArrowRight') {
    navigateImage(1); // Flecha derecha (adelante)
  } else if (event.key === 'ArrowLeft') {
    navigateImage(-1); // Flecha izquierda (atrás)
  }
};

// Añadir un "escuchador" de teclas al montar el componente
onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
});

// Limpiar el "escuchador" de teclas cuando el componente se desmonte
onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown);
});

// Lógica para el lightbox
const isLightboxOpen = ref(false);
const selectedImage = ref(null);

const openLightbox = (index) => {
  selectedImage.value = index;
  isLightboxOpen.value = true;
};

const closeLightbox = () => {
  isLightboxOpen.value = false;
};

const isVisible = ref(true);
const openMobileText = () => { isVisible.value = !isVisible.value; }

</script>
