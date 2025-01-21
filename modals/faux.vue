<template>
  <MModal>
    <div ref="modalRef" class="project_cont">
      <div class="project_top">
        <div class="title_text">
          <!-- <div class="project_title title_proj hidden">Faux <input type="checkbox" class="mobile_title_checkbox hidden"></div> -->
          <div class="text_holder font_body_md">
            <span class="bg-white">{{ t('faux_text') }}</span>
            <span class="bg-white annotation"> <br><br> {{ t('faux_annotation') }}</span>
          </div>
        </div>
        <div class="big_logo_holder">
          <svg xmlns="http://www.w3.org/2000/svg" width="363" height="174" fill="none" viewBox="0 0 363 174">
            <path fill="#0A0A0A"
              d="m90.199 50.58-1.756 6.183h-13.73l-10.217 40.59c-4.63 17.917-9.1 31.712-13.73 41.542-6.545 13.795-13.569 23.308-21.072 28.541-5.747 3.963-11.495 6.025-17.242 6.025-3.672 0-6.864-1.11-9.578-3.33C.958 168.545 0 166.643 0 164.106c0-1.903.798-3.647 2.395-5.233 1.596-1.585 3.512-2.219 5.906-2.219 1.757 0 3.034.475 4.31 1.585 1.278 1.11 1.757 2.22 1.757 3.647 0 1.427-.639 2.696-1.916 3.805-.958.793-1.437 1.586-1.437 1.903 0 .634.16.951.639 1.269.639.475 1.437.634 2.554.634 2.714 0 5.428-.793 8.461-2.537 3.034-1.744 5.588-4.123 7.983-7.452 2.394-3.33 4.47-8.087 6.545-14.429.798-2.537 3.193-11.257 7.024-25.686l16.284-62.947H44.221l1.278-6.184c5.108 0 8.78-.317 10.855-1.11 2.076-.792 3.991-2.06 5.588-4.122 1.596-2.061 3.99-5.708 6.705-11.258 3.672-7.452 7.184-13.16 10.536-17.282 4.63-5.55 9.42-9.672 14.528-12.368C98.82 1.427 103.609 0 108.079 0c4.789 0 8.621 1.268 11.335 3.647 2.713 2.378 4.31 4.915 4.31 7.77 0 2.219-.639 3.963-2.075 5.548-1.437 1.586-3.353 2.22-5.588 2.22-1.916 0-3.512-.634-4.789-1.744-1.277-1.11-1.756-2.378-1.756-3.964 0-.951.479-2.22 1.277-3.647.798-1.427 1.277-2.378 1.277-2.854 0-.792-.319-1.585-.798-1.902-.799-.634-1.916-.952-3.512-.952-3.992 0-7.504 1.269-10.537 3.647-4.15 3.33-7.982 8.404-11.175 15.38-1.756 3.647-4.79 12.685-9.26 27.272h13.73l-.32.159Zm86.372-2.22-18.2 62.947-2.075 8.404c-.16.792-.319 1.427-.319 2.061 0 .951.319 1.903.957 2.537.479.634 1.118.793 1.916.793.798 0 1.916-.476 3.193-1.427 2.395-1.745 5.747-5.55 9.738-11.099l3.193 2.219c-4.31 6.501-8.78 11.416-13.25 14.746-4.47 3.33-8.781 5.074-12.612 5.074-2.714 0-4.63-.634-6.067-2.061-1.436-1.427-2.075-3.33-2.075-5.867 0-3.012.639-6.976 2.075-12.05l1.916-6.977c-8.142 10.624-15.645 17.917-22.51 22.198-4.949 3.013-9.738 4.598-14.527 4.598-4.79 0-8.461-1.902-11.814-5.549-3.352-3.647-4.949-8.879-4.949-15.539 0-9.83 3.033-20.295 8.94-31.235 5.907-10.94 13.57-19.661 22.67-26.32 7.184-5.233 13.889-7.77 20.274-7.77 3.832 0 7.025.952 9.419 3.013 2.395 2.061 4.47 5.232 5.748 9.83l3.352-10.623 14.847-2.22.16.317Zm-33.366 4.757c-3.991 0-8.301 1.903-12.772 5.55-6.385 5.232-11.973 13.001-16.922 23.466-4.949 10.465-7.503 19.661-7.503 28.064 0 4.281 1.118 7.611 3.193 9.989 2.075 2.379 4.63 3.647 7.343 3.647 6.865 0 14.209-4.915 22.191-14.904 10.696-13.319 15.964-26.796 15.964-40.75 0-5.232-.958-9.037-3.033-11.415-2.075-2.379-4.789-3.488-8.461-3.488v-.159Zm129.31-2.537-16.283 55.336c-2.395 8.245-3.672 13.477-3.672 15.538 0 1.11.16 1.903.639 2.537.478.634.957.793 1.596.793 1.117 0 2.235-.476 3.512-1.427 1.277-.952 4.47-4.757 9.738-11.416l2.874 2.061c-4.949 7.769-9.898 13.477-15.166 17.124-3.353 2.378-6.705 3.488-9.898 3.488-2.395 0-4.31-.634-5.747-2.061-1.437-1.427-2.076-3.171-2.076-5.232 0-2.062.479-4.916 1.278-8.404.957-4.598 3.831-14.587 8.461-29.967-10.537 17.283-19.477 29.174-26.661 35.834-7.184 6.659-13.729 9.83-19.955 9.83-2.874 0-5.269-.951-7.344-3.012-2.075-2.062-3.033-4.44-3.033-7.452 0-4.599 1.437-11.734 4.151-21.406l8.141-28.698c1.916-6.818 3.034-11.1 3.034-12.843 0-.793-.32-1.427-.799-1.903-.479-.476-1.117-.793-1.756-.793-1.277 0-2.554.476-3.991 1.427-1.437.952-4.31 4.44-8.94 10.306l-2.873-2.06c4.629-7.136 9.578-12.527 14.846-15.857 3.992-2.695 7.663-3.963 11.016-3.963 2.235 0 4.151.792 5.587 2.22 1.437 1.426 2.235 3.33 2.235 5.549 0 3.33-1.277 9.355-3.671 17.917l-8.781 29.967c-2.394 8.245-3.672 13.319-3.672 15.538 0 1.11.32 2.062 1.118 2.854.798.793 1.756 1.11 3.193 1.11 2.075 0 4.789-.951 7.982-3.012 3.193-2.061 7.663-6.66 13.25-13.636a172.185 172.185 0 0 0 13.73-19.82c3.672-6.183 7.343-16.014 11.494-29.333l2.076-7.135h14.367Zm38.949-2.219c3.033 3.172 5.428 6.501 6.864 9.672 1.118 2.22 3.034 8.087 5.588 17.6l8.301-12.209c2.235-3.012 4.79-5.866 7.983-8.562 3.192-2.695 5.906-4.598 8.301-5.55 1.437-.633 3.193-.95 4.949-.95 2.714 0 4.789.634 6.386 2.06 1.596 1.428 2.394 3.172 2.394 5.233 0 2.378-.479 3.964-1.436 4.757-1.756 1.585-3.672 2.378-6.067 2.378-1.277 0-2.714-.317-4.151-.793-2.873-.951-4.949-1.427-5.906-1.427-1.437 0-3.353.793-5.269 2.537-3.831 3.171-8.461 9.514-13.889 18.71l7.663 32.028c1.118 4.915 2.235 7.769 3.033 8.721.799.951 1.597 1.427 2.395 1.427 1.277 0 2.874-.634 4.63-2.061 3.352-2.854 6.386-6.501 8.78-11.099l3.353 1.744c-3.991 7.293-8.94 13.318-15.007 18.234-3.352 2.695-6.386 4.122-8.621 4.122-3.512 0-6.226-1.902-8.301-5.866-1.277-2.379-3.991-12.843-8.142-31.236-9.738 16.807-17.561 27.589-23.308 32.346-3.831 3.171-7.503 4.598-11.015 4.598-2.555 0-4.79-.952-6.865-2.696-1.437-1.427-2.235-3.171-2.235-5.549 0-2.062.639-3.806 2.075-5.074 1.437-1.269 3.034-2.061 5.109-2.061s4.151.951 6.386 3.012c1.596 1.427 2.873 2.061 3.672 2.061.798 0 1.756-.475 2.873-1.427 2.874-2.378 6.865-7.452 11.973-15.221 5.109-7.769 8.302-13.477 9.898-16.965-3.831-15.063-5.906-22.991-6.226-23.943-1.437-3.963-3.352-6.817-5.587-8.562-2.235-1.744-5.747-2.536-10.217-2.536-1.437 0-3.034 0-4.949.158v-3.33l24.904-4.44-.319.16Z" />
          </svg>
          <a href="https://drive.google.com/file/d/1mMJWN_ovgg_OtDINSemTyjwrJDozS5Lq/view?usp=sharing" target="_blank" ><div class="link"> <svg xmlns="http://www.w3.org/2000/svg" width="23" height="9" fill="none"
              viewBox="0 0 23 9">
              <path
                d="M15.655 8.656v-2h3a2 2 0 1 0 0-4h-6a2 2 0 0 0-2 2h-2a4 4 0 0 1 4-4h6a4 4 0 1 1 0 8h-3Zm-8-8v2h-3a2 2 0 1 0 0 4h6a2 2 0 0 0 2-2h2a3.999 3.999 0 0 1-4 4H4.656a4 4 0 0 1 0-8h3Z"
                clip-rule="evenodd" />
            </svg>{{ t('faux_memoria') }}</div></a>
        </div>

      </div>
      <div class="media">
        <a href="https://faux-noticiario.netlify.app/" class="noti" target="_blank">
          <video autoplay loop muted src="/img/faux/noticiario_comp.mp4"></video>
          <div class="link"> <svg xmlns="http://www.w3.org/2000/svg" width="23" height="9" fill="none"
              viewBox="0 0 23 9">
              <path
                d="M15.655 8.656v-2h3a2 2 0 1 0 0-4h-6a2 2 0 0 0-2 2h-2a4 4 0 0 1 4-4h6a4 4 0 1 1 0 8h-3Zm-8-8v2h-3a2 2 0 1 0 0 4h6a2 2 0 0 0 2-2h2a3.999 3.999 0 0 1-4 4H4.656a4 4 0 0 1 0-8h3Z"
                clip-rule="evenodd" />
            </svg> {{ t('faux_noticiario_link') }}</div>
        </a>
        <a href="https://faux-site.netlify.app/" class="site" target="_blank">
          <video autoplay loop muted src="/img/faux/site_comp.mp4"></video>
          <div class="link"> <svg xmlns="http://www.w3.org/2000/svg" width="23" height="9" fill="none"
              viewBox="0 0 23 9">
              <path
                d="M15.655 8.656v-2h3a2 2 0 1 0 0-4h-6a2 2 0 0 0-2 2h-2a4 4 0 0 1 4-4h6a4 4 0 1 1 0 8h-3Zm-8-8v2h-3a2 2 0 1 0 0 4h6a2 2 0 0 0 2-2h2a3.999 3.999 0 0 1-4 4H4.656a4 4 0 0 1 0-8h3Z"
                clip-rule="evenodd" />
            </svg> site</div>
        </a>
        <div class="image-box" @click="openLightbox(faux_images[currentImage])">
          <img :src="faux_images[currentImage]" alt="Rotating Image" />
        </div>
        <div class="image-box" @click="openLightbox(faux_promo_images[currentPromoImage])">
          <img :src="faux_promo_images[currentPromoImage]" alt="Rotating Image" />
        </div>
        <div v-if="isLightboxVisible" class="lightbox" @click="closeLightbox">
          <div class="lightbox-content">
            <img :src="selectedImage" alt="Enlarged Image" />
          </div>
        </div>
      </div>
      <div class="text_mobile hidden">
        <div class="text_mobile_top">
          <div class="project_title title_proj">Faux</div>
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
        <div class="text_holder font_body_md  bg-white" v-show="isVisible">
          <span class="bg-white">{{ t('faux_text') }}</span>
          <span class="bg-white annotation"><br>{{ t('faux_annotation') }}</span>
        </div>
      </div>
    </div>
    <Exit_button @click="handleCloseClick" />
  </MModal>
</template>

<script setup>
import { dirname } from "pathe";
import { ref, onMounted, onUnmounted } from 'vue';
import CustomCheckbox from '@/components/custom_checkbox.vue'; // Asegúrate de importar tu componente
import { useI18n } from 'vue-i18n';

const { t } = useI18n(); // Hook para obtener la función de traducción

// Lightbox control
const isLightboxVisible = ref(false);
const selectedImage = ref('');

// Función para abrir el lightbox con la imagen seleccionada
const openLightbox = (image) => {
  selectedImage.value = image;
  isLightboxVisible.value = true;
};

// Función para cerrar el lightbox
const closeLightbox = () => {
  isLightboxVisible.value = false;
  selectedImage.value = '';
};


// Array de imágenes
const faux_images = ref([
  '/img/faux/scans/editorial_scan_0015_faux1.webp',
  '/img/faux/scans/editorial_scan_0013_faux2.webp',
  '/img/faux/scans/editorial_scan_0012_faux3.webp',
  '/img/faux/scans/editorial_scan_0011_faux4.webp',
  '/img/faux/scans/editorial_scan_0010_faux5.webp',
  '/img/faux/scans/editorial_scan_0009_faux6.webp',
  '/img/faux/scans/editorial_scan_0008_faux7.webp',
  '/img/faux/scans/editorial_scan_0007_faux8.webp',
  '/img/faux/scans/editorial_scan_0006_faux9.webp',
  '/img/faux/scans/editorial_scan_0005_faux10.webp',
  '/img/faux/scans/editorial_scan_0004_faux11.webp',
  '/img/faux/scans/editorial_scan_0003_faux12.webp',
  '/img/faux/scans/editorial_scan_0002_faux13.webp',
  '/img/faux/scans/editorial_scan_0001_faux14.webp',
]);

// Variable para controlar la imagen actual
const currentImage = ref(0);

// Tiempo entre cambios (en milisegundos)
const intervalTime = ref(1000);

// Función para cambiar a la siguiente imagen
const nextImage = () => {
  currentImage.value = (currentImage.value + 1) % faux_images.value.length;
};

let intervalId;

// Iniciar el intervalo cuando el componente se monta
onMounted(() => {
  intervalId = setInterval(nextImage, intervalTime.value);
});

// Limpiar el intervalo cuando el componente se desmonta
onUnmounted(() => {
  clearInterval(intervalId);
});


//------------------promo images roulette-----------------------------------------------------

const faux_promo_images = ref([
  '/img/faux/promo/blanco1.webp',
  '/img/faux/promo/blanco2.webp',
  '/img/faux/promo/blanco3.webp',
  '/img/faux/promo/blanco4.webp',
  '/img/faux/promo/blanco5.webp',
  '/img/faux/promo/blanco6.webp',
  '/img/faux/promo/blanco7.webp',
  '/img/faux/promo/negro1.webp',
  '/img/faux/promo/negro2.webp',
  '/img/faux/promo/negro3.webp',
  '/img/faux/promo/negro4.webp',
  '/img/faux/promo/negro5.webp',
  '/img/faux/promo/negro6.webp',
  '/img/faux/promo/negro7.webp',
]);

// Variable para controlar la imagen actual
const currentPromoImage = ref(0);

// Tiempo entre cambios (en milisegundos)
const intervalPromoTime = ref(700);

// Función para cambiar a la siguiente imagen
const nextPromoImage = () => {
  currentPromoImage.value = (currentPromoImage.value + 1) % faux_promo_images.value.length;
};

let intervalPromoId;

// Iniciar el intervalo cuando el componente se monta
onMounted(() => {
  intervalPromoId = setInterval(nextPromoImage, intervalPromoTime.value);
});

// Limpiar el intervalo cuando el componente se desmonta
onUnmounted(() => {
  clearInterval(intervalPromoId);
});



const isVisible = ref(false);
const openMobileText = () => { isVisible.value = !isVisible.value; }


const modalRef = ref(null);
const router = useRouter();
const handleCloseClick = () => {
  navigateTo(dirname(router.currentRoute.value.path));
};
onClickOutside(modalRef, handleCloseClick);
onKeyStroke("Escape", handleCloseClick);
</script>



<style scoped lang="sass">
// *
//  border: 1px solid tomato
.project_top
  width: 100%
  display: flex
  align-items: center
  justify-content: space-between
  .title_text
    display: flex
    flex-direction: column
    .project_title
      display: block
    .text_holder
      min-width: 50ch
      max-width: 65ch
  .big_logo_holder
    padding-right: 10%
    display: flex
    flex-direction: column
    align-items: flex-end
    svg
      width: 15vw
    a 
      width: fit-content
      .link
        display: flex
        width: auto
        justify-content: end
        align-items: center
        gap: .2rem
        width: fit-content
        cursor: pointer

        &:hover
          color: #ff5e00
          svg
            width: auto
            fill: #ff5e00
        svg
          fill: black
          width: auto

.media
  display: flex
  align-items: stretch
  justify-content: space-between
  padding-right: 10%
  padding-top: 4rem
  .noti
    video
      height: 20vh
      cursor: pointer
    .link
      display: flex
      justify-content: end
      align-items: center
      gap: .2rem
      cursor: pointer

      &:hover
        color: #ff5e00
        svg
          fill: #ff5e00
      svg
        fill: black
  .site
    cursor: pointer
    video
      height: 20vh
      cursor: pointer

    .link
      display: flex
      justify-content: end
      align-items: center
      gap: .2rem
      cursor: pointer

      &:hover
        color: #ff5e00
        svg
          fill: #ff5e00
      svg
        fill: black
  .lightbox 
    position: fixed
    width: 100%
    height: 100%
    background-color: rgba(255, 255, 255, 0.7)
    display: flex
    justify-content: center
    align-items: center
    z-index: 1000 
    .lightbox-content 
      position: fixed
      top: 10%
      right: 4rem
      img 
        max-height: 80vh
.image-box
  height: 20vh
  // overflow: hidden
  display: flex
  justify-content: center
  align-items: center
  img
    width: 100%
    height: 100%
    object-fit: contain
    transition: opacity 0.5s ease-in-out
    cursor: pointer

@media (max-width: 640px) 
  .project_cont
    overflow-y: auto
    height: 100% // Asegura que ocupe toda la altura del viewport 
    align-items: center
    width: 100%
    .project_top
      display: flex
      flex-direction: column
      .title_text
        display: none
      .big_logo_holder
        padding-top: 2rem
        padding-right: 0
        width: 100%
        svg
          width: 100%
        a
          display: none
    .media
      display: flex
      flex-direction: column
      align-items: center
      width: 100%
      height: fit-content
      padding-right: 0
      gap: 2rem
      padding-bottom: .5rem
      .noti
        video
          width: 100%
          height: auto
      .site
        video
          width: 100%
          height: auto
      .lightbox 
        .lightbox-content 
          img 
      .image-box
        width: 100%
        height: 100%
        img
          width: 100%
          height: auto
          object-fit: cover
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