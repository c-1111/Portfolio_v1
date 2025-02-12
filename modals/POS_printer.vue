<template>
  <MModal>
    <div ref="modalRef" class="project_cont">
      <div class="project_top">
        <div class="left">
          <div class="project_bio font_body_md">{{ t('POS_text') }} <br> {{ t('POS_agradecimiento') }}</div>
          <a href="https://drive.google.com/file/d/1c-cPHY0AMeTpimjO0yDwz-_rZOw5yPoH/view?usp=sharing"
            class="link enlace_manual" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="23" height="9"
              fill="none" viewBox="0 0 23 9">
              <path
                d="M15.655 8.656v-2h3a2 2 0 1 0 0-4h-6a2 2 0 0 0-2 2h-2a4 4 0 0 1 4-4h6a4 4 0 1 1 0 8h-3Zm-8-8v2h-3a2 2 0 1 0 0 4h6a2 2 0 0 0 2-2h2a3.999 3.999 0 0 1-4 4H4.656a4 4 0 0 1 0-8h3Z"
                clip-rule="evenodd" />
            </svg>{{ t('dosier_impresora') }}</a>
          <div class="stack flex gap-4">
            <span class="bg-white annotation"> <span class="bold_gris">Vue</span> <br><span class="bold_gris">Qz-tray</span> (print library) </span>
            <span class="bg-white annotation"> <span class="bold_gris">Express</span> (server) <br> <span class="bold_gris">SocketChat</span> (websocket)</span>
          </div>
          <!-- <div class="image_gallery">
            <img v-for="(image, index) in imageUrls" :key="index" :src="image" :alt="'Image ' + (index + 1)"
              class="gallery_img_small" @click="openLightbox(index)" />
          </div> -->
        </div>
        <div class="right">
          <div class="right_top">
            <div class="img_holder">
              <img src="/public/img/POS_printer/img1_final.webp" alt="">
              <video autoplay muted loop playsinline webkit-playsinline
                src="/public/img/POS_printer/multipantalla.mp4"></video>

            </div>
          </div>
          <div class="right_bttm"></div>
        </div>
      </div>

      <div class="tickets_holder">
        <Tikets />
      </div>



      <!-- Lightbox Modal ------->
      <div v-if="isLightboxOpen" class="lightbox" @click="closeLightbox">
        <div class="lightbox-content" @click.stop>
          <img :src="imageUrls[selectedImage]" :alt="'Lightbox Image ' + (selectedImage + 1)" />
        </div>
      </div>

      <!-- Text Mobile ------->
      <div class="text_mobile hidden">
        <div class="text_mobile_top">
          <div class="project_title title_proj">POS printer</div>
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
          <span class="bg-white">{{ t('POS_text') }} </span>
          <span class="bg-white annotation"><br>{{ t('POS_agradecimiento') }}<br></span>
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
  .left
    display: flex
    flex-direction: column
    gap: 1.8rem
    .enlace_manual
      display: flex
      align-items: center
      gap: .2rem
      width: fit-content
      &:hover
        background-color: #3f7fed
        color: #f5f5f4
        svg
          width: auto
          fill: #f5f5f4
      svg
        fill: black
    .project_bio
      max-width:60ch
    .stack
    .image_gallery
      display: flex
      flex-direction: row
      gap: 5px
      max-width: 50% 
      .gallery_img_small
        height: 9vh
        object-fit: cover
        cursor: pointer

  .right
    display: flex
    .right_top
      .img_holder
        display: flex
        gap: .5rem
        img
          height: 20vw
        video
          height: 20vw
    .right_bttm
  .tickets_holder
    width: 100%
    padding-top: 1rem

.lightbox
  position: fixed
  top: 0
  left: 0
  right: -8%
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
  max-width: 60vw
  max-height: 60vh
  img
    max-width: 70%
    max-height: 70%
@media (max-width: 640px)
  .project_cont
    overflow-y: auto
    height: 100% // Asegura que ocupe toda la altura del viewport 
    align-items: center
    width: 100%
    overflow-x: hidden
    .project_top
      flex-direction: column
      .left
        padding-top: 1.2rem
        gap: .6rem
        padding-bottom: 1rem
        
        .enlace_manual
          padding-left: 3.5rem
        .project_bio
          display: none
        .stack
          justify-content: space-between
      .right
        width: 100%
        .right_top
          width: 100%
          .img_holder
            width: 50%
            gap: 0
            img
              height: auto
            video
              height: auto
        .right_bttm
      .tickets_holder
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



<script setup>
import { dirname } from "pathe";
import { useI18n } from 'vue-i18n';
import Tikets from "../components/tikets.vue";
import Custom_checkbox_not from "../components/custom_checkbox_not.vue";

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
  '/img/POS_printer/screens.webp',
  '/img/POS_printer/flow.webp',
  // '/img/POS_printer/img2_final.webp',
  // '/img/POS_printer/vid_movil.mp4',





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
