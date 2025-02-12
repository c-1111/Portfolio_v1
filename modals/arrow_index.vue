<template>
  <MModal>
    <div ref="modalRef" class="project_cont flex justify-between">
      <div class="enlace_holder">
        <a href="https://arrow-index.netlify.app/" class="link enlace_arrows" target="_blank"><svg
            xmlns="http://www.w3.org/2000/svg" width="23" height="9" fill="none" viewBox="0 0 23 9">
            <path
              d="M15.655 8.656v-2h3a2 2 0 1 0 0-4h-6a2 2 0 0 0-2 2h-2a4 4 0 0 1 4-4h6a4 4 0 1 1 0 8h-3Zm-8-8v2h-3a2 2 0 1 0 0 4h6a2 2 0 0 0 2-2h2a3.999 3.999 0 0 1-4 4H4.656a4 4 0 0 1 0-8h3Z"
              clip-rule="evenodd" />
          </svg><span>arrow-index</span></a>
      </div>
      <div class="image-box">
        <img :src="images[currentImage]" alt="Rotating Image" />
      </div>
    </div>

    <Exit_button @click="handleCloseClick" />
  </MModal>
</template>


<style scoped lang="sass">
.image-box
  width: 40vw
  max-width: 80vw
  aspect-ratio: 16 / 9
  overflow: hidden
  display: flex
  justify-content: center
  align-items: center
  img
    width: 100%
    height: 100%
    object-fit: cover
    transition: opacity 0.5s ease-in-out
.enlace_holder
  height: fit-content
  .enlace_arrows
    display: flex 
    align-items: center
    transform: scale(8)
    transform-origin: left
    margin-left: -2vw
    margin-top: 3rem
    &:hover
      background-color: #3f7fed 
      color: #f5f5f4
      svg
        fill: #f5f5f4
    svg
      fill: black
      padding-top: .2rem

    span
      transform-origin: left
      
@media (max-width: 640px)
  .project_cont
    width: 100%
    height: 100%
    align-items: center
    display: flex
    flex-direction: column-reverse
    justify-content: start
    padding-top: 10vh
    .image-box
      width: 100%
      max-width: 100vw
    .enlace_holder
      width: 100%
      display: flex
      justify-content: center
      .enlace_arrows
        width: 100%
        transform: scale(3.5)

</style>



<script setup>
import { dirname } from "pathe";
import { ref, onMounted, onUnmounted } from 'vue';

// Array de imágenes
const images = ref([
  '/img/arrow_index/1_iJ7yXNiQ3Xo4kCPVydSCxQ.jpg',
  '/img/arrow_index/8fvl7.png',
  '/img/arrow_index/6688.jpg_860-696x464.jpg',
  '/img/arrow_index/Arrow_keys.jpg',
  '/img/arrow_index/Fedex960.jpg',
  '/img/arrow_index/Klee_Contrasts.png',
  '/img/arrow_index/rebote_forCrop.jpg',
  '/img/arrow_index/RGBpixels.png',
  '/img/arrow_index/simple-black-four-directional-dpad-260nw-1696570738.webp',
  '/img/arrow_index/unicode_bloc.png'
]);

// Variable para controlar la imagen actual
const currentImage = ref(0);

// Tiempo entre cambios (en milisegundos)
const intervalTime = ref(300);

// Función para cambiar a la siguiente imagen
const nextImage = () => {
  currentImage.value = (currentImage.value + 1) % images.value.length;
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

</script>
