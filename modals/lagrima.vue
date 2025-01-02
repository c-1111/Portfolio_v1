<template>
  <MModal>
    <div ref="modalRef" class="project_cont">
      <div class="project_top">
        <div class="left">
          <div class="poster_container">
            <img src="/public/img/lagrima/LAGRIMA_3_POSTER.webp" alt="">
            <img class="story" src="/public/img/lagrima/LAGRIMA_3_POSTER_story.webp" alt="">
          </div>
          <div class="image_gallery">
            <div v-for="(image, index) in imageUrls.slice(0, 4)" :key="'first-' + index">
              <img :src="image" :alt="'Image ' + (index + 1)" class="gallery_img_small" @click="openLightbox(index)" />
            </div>
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
          <p class="annotation">versiones previas</p>
          <div class="versions_gallery">
            <div v-for="(image, index) in imageUrls.slice(4, 8)" :key="'second-' + index">
              <img :src="image" :alt="'Image ' + (index + 4)" class="gallery_img_small"
                @click="openLightbox(index + 4)" />
            </div>
          </div>
          <div class="right_bttm">
            <p class="annotation">refs</p>
            <img src="/public/img/lagrima/lagrima_refs.webp" alt="">
          </div>
        </div>
      </div>



      <!-- Lightbox Modal -->
      <div v-if="isLightboxOpen" class="lightbox" @click="closeLightbox">
        <div class="lightbox-content" @click.stop>
          <img :src="imageUrls[selectedImage]" :alt="'Lightbox Image ' + (selectedImage + 1)" />
        </div>
      </div>
      <div class="text_mobile hidden">
        <div class="text_mobile_top">
          <div class="project_title title_proj">Title</div>
          <div class="text_top_right">
            <p class="home_info_txt info_gray text-sm text-[#bebebe]">info</p>
            <svg width="4" height="8" viewBox="0 0 4 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4 6.47399C3.57835 6.71291 3.21368 6.95954 2.90598 7.21387C2.59829 7.46821 2.34758 7.73025 2.15385 8L1.84615 8C1.44729 7.46821 0.831909 6.95954 -6.67041e-08 6.47399L-8.43908e-08 6.06936C0.387464 6.19268 0.729345 6.31599 1.02564 6.43931C1.31054 6.56262 1.54986 6.68208 1.74359 6.79769L2.25641 6.79769C2.43875 6.68208 2.67806 6.56262 2.97436 6.43931C3.25926 6.31599 3.60114 6.19268 4 6.06936L4 6.47399ZM2.35897 6.85549L1.64103 6.85549L1.64103 4.05106e-07L2.35897 3.73723e-07L2.35897 6.85549Z"
                fill="#B7B7B7" />
            </svg>
            <div class="checkbox">
              <CustomCheckbox @click="openMobileText" />
            </div>
          </div>
        </div>
        <div class="text_holder font_body_md" v-show="isVisible">
          <span class="bg-white">text</span>
          <span class="bg-white annotation"><br></span>
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
  .left
    display: flex
    flex-direction: column
    gap:2rem
    .poster_container
      display: flex
      gap: 2rem
      img
        max-height: 70vh
    .image_gallery
      display: flex
      gap: 5px
      flex-wrap: wrap
      .gallery_img_small
        max-width: 60px
        object-fit: cover
        cursor: pointer
  .right
    display: flex
    flex-direction: column
    gap: 2rem
    align-items: flex-end
    .right_top
      display: flex
      flex-direction: column
      align-items: flex-end
      gap: 4rem
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
    .versions_gallery
      display: flex
      gap: 5px
      flex-wrap: wrap
      .gallery_img_small
        max-width: 100px
        object-fit: cover
        cursor: pointer
    .right_bttm
      display: flex
      // flex-direction: column
      // align-items: flex-end
      img
        margin-left: .5rem

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
  max-width: 40vw
  max-height: 40vh
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
        gap:1rem
        margin-bottom: 1rem

        .poster_container
          display: flex
          flex-direction: column
          gap: 2rem
          img
            width: 100%
          .story
            // max-width: 70vw
            display: none
        .image_gallery
          display: flex
          gap: 5px
          flex-wrap: wrap
          .gallery_img_small
            max-width: 60px
            object-fit: cover
            cursor: pointer
      .right
        display: flex
        flex-direction: column
        gap: 2rem
        align-items: flex-start
        margin-bottom: 2rem
        .right_top
          display: flex
          flex-direction: column
          align-items: flex-end
          gap: 4rem
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
        .versions_gallery
          display: flex
          gap: 5px
          flex-wrap: wrap
          .gallery_img_small
            max-width: 80px
            object-fit: cover
            cursor: pointer
        .right_bttm
          display: flex
          flex-direction: column
          img
            margin-left: .5rem


    .lightbox
      display: none
      .text_mobile
        display: block
        width: 100%
        padding-right: 2.5vw
        position: fixed
        bottom: 0
        .text_mobile_top
          display: flex
          width: 100%
          justify-content: space-between
          align-items: center
          background: white

          margin-bottom: -.8rem
          .project_title
            display: flex
            gap: .5rem
            align-items: center
            width: fit-content
            padding-right: 1rem
          .text_top_right
            display: flex
            gap: .5rem
            align-items: center
            width: fit-content
            padding-left: 1rem
            height: 100%
            padding-top: 1.1rem
            padding-bottom: 1rem
            padding-right: 2.5vw

            .home_info_txt
            svg
              transform: rotate(180deg)
            .checkbox
        .text_holder
          width: 100%
          margin-right: 5vw
          background: white
          padding-top: .5rem
          padding-right: 2.5vw
          padding-bottom: 2vh
</style>



<script setup>
import { dirname } from "pathe";

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
  '/img/lagrima/nando.webp',
  '/img/lagrima/hello_sasy.webp',
  '/img/lagrima/cute_agression.webp',
  '/img/lagrima/deni.webp',
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
