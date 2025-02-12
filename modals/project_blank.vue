<template>
  <MModal>
    <div ref="modalRef" class="project_cont">
      <div class="project_top">
        <div class="left">
          <div class="project_title title_proj">Project Title</div>
          <div class="project_bio font_body_md">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
            minus, sapiente ipsam itaque, aliquid deserunt numquam doloribus accusamus id aspernatur, nemo obcaecati
            fugit laboriosam! Laboriosam quis doloremque animi soluta omnis. </div>
        </div>
        <div class="right">

        </div>
      </div>
      <div class="image_gallery">
        <img v-for="(image, index) in imageUrls" :key="index" :src="image" :alt="'Image ' + (index + 1)"
          class="gallery_img_small" @click="openLightbox(index)" />
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
              <Custom_checkbox_not @click="openMobileText" />
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
  .left
    .project_bio
      max-width:60ch
  .right
    display: flex

.image_gallery
  display: flex
  gap: 5px
  flex-wrap: wrap
  max-width: 50% 
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
  max-width: 80vw
  max-height: 80vh
  img
    max-width: 70%
    max-height: 70%

@media (max-width: 640px)
  .project_cont
    overflow-y: auto
    height: 100% // Asegura que ocupe toda la altura del viewport 
    align-items: center
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
import Custom_checkbox_not from "../components/custom_checkbox_not.vue";

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
