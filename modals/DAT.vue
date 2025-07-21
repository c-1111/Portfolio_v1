<script setup>
import { dirname } from "pathe";
import Custom_checkbox_not from "../components/custom_checkbox_not.vue";
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
  '/img/DAT/estilos_color.webp',
  '/img/DAT/estilos_tipo.webp',
  '/img/DAT/estilos_grids.webp',
  '/img/DAT/estilos_comp.webp',
  '/img/DAT/estilos_spacing.webp',
  '/img/DAT/planillo_scans_baja.webp',
  '/img/DAT/scans_editorial.gif',
  '/img/DAT/gif_desktop2.gif',
  '/img/DAT/gif_mobile1.gif',
  '/img/DAT/gif_desktoparticle.gif',
  '/img/DAT/gif_mobilearticle.gif',


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

const isVisible = ref(false);
const openMobileText = () => { isVisible.value = !isVisible.value; }

</script>

<template>
  <MModal>
    <div ref="modalRef" class="project_cont">
      <div class="project_top">
        <div class="left">
          <div class="project_bio font_body_md pb-4">{{ t('DAT_text') }}</div>
          <a href="https://www.figma.com/proto/nG2DkgwmjHcXiJGLuB2Bn4/PROTOTIPO_FINAL_CARLOS_MARTINEZ?page-id=0%3A1&node-id=1-34&viewport=826%2C162%2C0.02&t=9ft0pQvlbK5qD0C9-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A34"
            class="link enlace_manual" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="9" fill="none" viewBox="0 0 23 9">
              <path
                d="M15.655 8.656v-2h3a2 2 0 1 0 0-4h-6a2 2 0 0 0-2 2h-2a4 4 0 0 1 4-4h6a4 4 0 1 1 0 8h-3Zm-8-8v2h-3a2 2 0 1 0 0 4h6a2 2 0 0 0 2-2h2a3.999 3.999 0 0 1-4 4H4.656a4 4 0 0 1 0-8h3Z"
                clip-rule="evenodd" />
            </svg>{{ t('DAT_prototype') }}</a>
        </div>
        <div class="right">
          <svg xmlns="http://www.w3.org/2000/svg" width="381" height="142" fill="none" viewBox="0 0 381 142">
            <path fill="#F8F8F8" d="M0 0h380.645v142H0z" />
            <path fill="#404040"
              d="M17.193 71.015h53.799v53.792H17.193V71.015Zm289.993 53.792V33.643h-37.665v-16.45h93.931v16.45h-37.818v91.164h-18.448Zm-129.3 0L220.47 17.193h22.291l41.816 107.614h-19.371L255.06 98.518h-47.811l-10.147 26.289h-19.216Zm35.666-42.892h35.051L231.077 36.41l-17.525 45.505ZM90.684 124.807V17.193h37.664c31.208 0 52.577 19.063 52.577 53.807s-20.908 53.807-52.116 53.807H90.684Zm18.448-16.45h17.679c21.676 0 35.666-10.761 35.666-37.357s-13.99-37.357-35.666-37.357h-17.679v74.714Z" />
          </svg>
        </div>
      </div>

      <div class="gallery w-full mt-4">

        <div class="cont_item flex flex-row w-full justify-between pt-4">
          <div class="cont_block flex flex-col">
            <div class="title_proj">{{ t('DAT_system') }}</div>
            <div class="cont">
              <div class="image_gallery">
                <img v-for="(image, index) in imageUrls.slice(0, -6)" :key="index" :src="image"
                  :alt="'Image ' + (index + 1)" class="gallery_img_small" @click="openLightbox(index)" />
              </div>
            </div>
          </div>

          <div class="cont_block flex flex-col">
            <div class="title_proj">{{ t('DAT_index') }}</div>
            <div class="cont flex">
              <img class="contimg desktop" src="/img/DAT/gif_desktop2.gif" alt="" @click="openLightbox(7)">
              <img class="contimg mobile" src="/img/DAT/gif_mobile1.gif" alt="" @click="openLightbox(8)">
            </div>
          </div>
        </div>


        <div class="cont_item second_block flex flex-row w-full justify-between pt-4">
          <div class="cont_block flex flex-col">
            <div class="title_proj">{{ t('DAT_editorial') }}</div>
            <div class="cont editorial flex">
              <img class="contimg" src="/img/DAT/planillo_scans_baja.webp" alt="" @click="openLightbox(5)">
              <img class="contimg" src="/img/DAT/scans_editorial.gif" alt="" @click="openLightbox(6)">
            </div>
          </div>
          <div class="cont_block flex flex-col">
            <div class="title_proj">{{ t('DAT_article') }}</div>
            <div class="cont flex">
              <img class="contimg desktop" src="/img/DAT/gif_desktoparticle.gif" alt="" @click="openLightbox(9)">
              <img class="contimg mobile" src="/img/DAT/gif_mobilearticle.gif" alt="" @click="openLightbox(10)">
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
      <div class="text_mobile hidden">
        <div class="text_mobile_top">
          <div class="project_title_proj title_proj_proj">.DAT</div>
          <div class="text_top_right">
            <p class="home_info_txt info_gray text-sm text-[#bebebe]">info</p>
            <svg width="4" height="8" viewBox="0 0 4 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4 6.47399C3.57835 6.71291 3.21368 6.95954 2.90598 7.21387C2.59829 7.46821 2.34758 7.73025 2.15385 8L1.84615 8C1.44729 7.46821 0.831909 6.95954 -6.67041e-08 6.47399L-8.43908e-08 6.06936C0.387464 6.19268 0.729345 6.31599 1.02564 6.43931C1.31054 6.56262 1.54986 6.68208 1.74359 6.79769L2.25641 6.79769C2.43875 6.68208 2.67806 6.56262 2.97436 6.43931C3.25926 6.31599 3.60114 6.19268 4 6.06936L4 6.47399ZM2.35897 6.85549L1.64103 6.85549L1.64103 4.05106e-07L2.35897 3.73723e-07L2.35897 6.85549Z"
                fill="#B7B7B7" />
            </svg>
            <div class="checkbox">
              <Custom_checkbox_not @click="openMobileText" />
            </div>
          </div>
        </div>
        <div class="text_holder font_body_md" v-show="isVisible">
          <span class="bg-white">{{ t('DAT_text') }}</span>
          <span class="bg-white annotation"><br></span>
        </div>
      </div>
    </div>
    <Exit_button @click="handleCloseClick" />
  </MModal>
</template>


<style scoped lang="sass">
.project_cont
  overflow-y: auto
  max-height: 100vh
  padding-bottom: 8rem
  overflow-y: scroll
  scrollbar-width: none
  -ms-overflow-style: none 
  .project_top
    display: flex
    justify-content: space-between
    .left
      .project_bio
        max-width:60ch
      a
        display: flex
        align-items: center
        gap: .2rem
        margin-top: 1rem
        width: fit-content
        background-color: #3f7fed
        color: #f5f5f4
        &:hover
          color: #000
          background-color: white
          svg
            width: auto
            fill: #000
        svg
          fill: #f5f5f4
    .right
      display: flex

    
  .cont_block
    max-width: 40vw
    .cont
      gap: 2rem
      .contimg
        max-height: 200px

  .image_gallery
    display: flex
    gap: 5px
    flex-wrap: nowrap
    .gallery_img_small
      height: 12vh
      width: 8vw
      object-fit: cover
      cursor: pointer

  .lightbox
    position: fixed
    top: 0
    left: 0
    right: -5%
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
    max-height: 100vh
    width: auto
    margin-right: 5vw
    img
      max-height: 100vh
      width: auto

@media (max-width: 640px)
  .project_cont
    overflow-y: auto
    height: 100% 
    align-items: center
    width: 100%
    overflow-x: hidden
    .project_top
      width: 100%
      flex-direction: column
      align-items: center
      .left
        padding-top: 1.2rem
        gap: .6rem
        padding-bottom: 1rem
        .enlace_manual
          visibility: hidden
        .project_bio
          display: none
      .right
        width: 100%
        svg
          width: 100%
  .gallery
    display: flex
    flex-direction: column
    gap: 2rem
    .cont_item
      display: flex
      flex-direction: column
      gap:2rem

      .cont_block
        .title_proj
          text-wrap: nowrap

        .cont
          img
            width: 100%
            max-height: 50vh
            object-fit: contain
          .mobile
            width: 40%
          .desktop
            width: 140%
        .editorial
          flex-direction: column
          align-items: center
          width: 100%
    .second_block
      flex-direction: column-reverse


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
      padding-bottom: 1rem
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
