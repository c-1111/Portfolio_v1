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
        <div class="project_title bg-white title_proj">Title <input type="checkbox" checked class="mobile_title_checkbox cursor-pointer hidden" @click="openMobileText">
        </div>
        <div class="text_holder font_body_md" v-show="isVisible">
          <span class="">bio</span>
          <span class="annotation"></span>
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
          position: fixed
          // margin-inline: 2.5vw 2.5vw
          bottom: -.1rem
          .project_title
            display: flex
            gap: .5rem
            align-items: center
            background: white
            width: fit-content
            padding-right: 1rem
            .mobile_title_checkbox
              display: block
              transform: scale(1.5)
              background: white
          .text_holder
            margin-right: 5vh
            background: white
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
