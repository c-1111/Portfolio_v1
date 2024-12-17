<template>
  <MModal>
    <div ref="modalRef" class="project_cont">
      <div class="project_top">
        <div class="left">
          <div class="project_title title_proj">Junicode Modular</div>
          <div class="project_bio inline-block font_body_md"><span class="bg-white">Desarrollo de una tipografía modular
              variable generando la variabilidad
              desde los módulos que la componen. Se trata de la pequeña escala a un proyecto de desarrollo de software
              que
              permita modularizar toda tipografía dada. Junicode es una tipografía open-source desarrollada por Medieval
              Unicode Font Initiative en base a documentos de 1700-1705. Este proyecto ha sido desarrollado en Fontlab 8
              para la asignatura de tipografía experimental. </span></div>
        </div>
        <div class="right">
          <span class="abc">Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz</span>
          <span>0 1 2 3 4 5 6 7 8 9</span>
          <span>Áá Éé Íí Óó Úú ÄÂ Ç</span>
          <span>@ € ¥ $ + - = ( ) [ ] .: ,; ¿ ? ¡ ! _ / * ^ º</span>
        </div>
      </div>
      <div class="font_playground">
        <div class="module_1">
          <div class="font-tester">
            <!-- Texto de prueba con fuente variable -->
            <textarea v-model="userText" :style="textStyles" wrap="soft"> </textarea>
            <!-- Sliders para el tamaño de la fuente y los ejes de variación -->
            <div class="sliders">
              <div class="slider_holder">
                <label for="squa">Square</label>
                <input id="squa" type="range" v-model="squa" min="0" max="100" step="1"
                  @input="updateSliderBackground(squa, 'squa')" />
                <span>{{ squa }}%</span>
              </div>
              <div class="slider_holder">

                <label for="devi">Deviation (+-)</label>
                <input id="devi" type="range" v-model="devi" min="-100" max="100" step="1" @input="checkSnap" />
                <span>{{ devi }}%</span>
              </div>
              <div class="slider_holder">

                <label for="size">Size</label>
                <input id="size" class="size_desktop" type="range" v-model="size" min="30" max="245" step="1"
                  @input="updateSliderBackground(size, 'size')" />
                <input id="size" class="hidden size_mobile" type="range" v-model="size" min="30" max="250" step="1"
                  @input="updateSliderBackground(size, 'size')" />
                <span>{{ size }}px</span>
              </div>

            </div>
          </div>
        </div>
        <!-- Galería de imágenes -->
        <div class="gallery_holder">
          <div class="image_gallery flex gap-5 flex-wrap">
            <img v-for="(image, index) in imageUrls" :key="index" :src="image" :alt="'Image ' + (index + 1)"
              class="gallery_img_small" @click="openLightbox(index)" />
          </div>
        </div>
        <!-- Lightbox Modal -->
        <div v-if="isLightboxOpen" class="lightbox" @click="closeLightbox">
          <div class="lightbox-content" @click.stop>
            <img :src="imageUrls[selectedImage]" :alt="'Lightbox Image ' + (selectedImage + 1)" />
            <!-- <button class="close-btn" @click="closeLightbox">×</button> -->
          </div>
        </div>
      </div>
      <div class="text_mobile hidden">
        <div class="project_title bg-white title_proj">Junicode Modular <input type="checkbox" checked
            class="mobile_title_checkbox cursor-pointer hidden" @click="openMobileText">
        </div>
        <div class="text_holder font_body_md" v-show="isVisible">
          <span class="">Desarrollo de una tipografía modular variable generando la variabilidad desde los módulos que la componen. Se trata de la pequeña escala a un proyecto de desarrollo de software que permita modularizar toda tipografía dada. Junicode es una tipografía open-source desarrollada por Medieval Unicode Font Initiative en base a documentos de 1700-1705. Este proyecto ha sido desarrollado en Fontlab 8 para la asignatura de tipografía experimental.</span>
          <span class="annotation"></span>
        </div>
      </div>
    </div>


    <Exit_button @click="handleCloseClick" />
  </MModal>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { dirname } from "pathe";


// Referencia para el modal
const modalRef = ref(null);

// Obtener el router
const router = useRouter();

// Función para manejar el cierre del modal
const handleCloseClick = () => {
  navigateTo(dirname(router.currentRoute.value.path));
};

onClickOutside(modalRef, handleCloseClick);
onKeyStroke("Escape", handleCloseClick);

const imageUrls = ref([
  '/img/junicode/junicode_1.webp',
  '/img/junicode/junicode_2.webp',
  '/img/junicode/junicode_3.webp',
  '/img/junicode/junicode_4.webp',
  '/img/junicode/junicode_5.webp',
  '/img/junicode/junicode_6.webp',
]);

const userText = ref('Text here !');

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

const size = ref(90);
const squa = ref(100);  // Eje de variación SQUA
const devi = ref(0);  // Eje de variación DEVI

const checkSnap = () => {
  // Si el valor se acerca a 0, lo ajustamos a 0
  if (devi.value < 10 && devi.value > -10) {
    devi.value = 0;
  }
};

// Computed para generar los estilos de texto dinámicamente
const textStyles = computed(() => ({
  fontFamily: 'Junicode_mod_var',
  fontWeight: 400,  // Peso fijo
  fontSize: `${size.value}px`,  // Tamaño de la fuente
  fontVariationSettings: `"SQUA" ${squa.value}, "DEVI" ${devi.value}`,  // Ajuste de los ejes
}));


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

const isVisible = ref(true);
const openMobileText = () => { isVisible.value = !isVisible.value; }

</script>


<style scoped lang="sass">
// *
//   border: solid 1px tomato
.project_top
  display: flex
  justify-content: space-between
  .left
    .project_bio
      min-width: 50ch
      max-width: 70ch
  .right
    display: flex
    flex-direction: column
    justify-content: space-between
    align-items: flex-end
    margin-top: .8rem
    span
      font-family: "Junicode_mod_var"
      font-size: 24px

.font_playground
  padding-top: 2rem
  display: flex
  justify-content: space-between
  width: 100%
  
@font-face
  font-family: "Junicode_mod_var"
  src: url("/public/fonts/junicode_prueba_xport1.otf") format("opentype")

  .module_1
    display: flex
    flex-direction: column
.font-tester
  display: flex
  flex-direction: column
  width: 140ch
  overflow-y: visible

  .sliders
    display: flex
    // flex-direction: column
    gap: 2vw
  
    .slider_holder
      display: flex
      flex-direction: column
      margin-top: 1rem
      label
        font-family: 'Univers LT Std'
        font-size: 16px
        line-height: 24px
        font-weight: normal
        color: #9a9a9a
      span
        font-family: 'Univers LT Std'
        font-size: 14px
        line-height: 24px
        font-weight: 300
        color: #9a9a9a
        margin-top: .2rem
  textarea
    all: unset
    display: block
    max-width: 100ch
    height: 10rem
    line-height: 0.8
    overflow-y: visible
    overflow-x: hidden
    white-space: pre-wrap
    word-wrap: break-word
    font-size: inherit
    font-family: inherit
    resize: none
    padding-top: 1rem
    padding-bottom: 3.5rem
    // background-color: white
    // transform: scale(2)
    &::-webkit-scrollbar
      display: none
      scrollbar-width: none

input[type="range"]
  -webkit-appearance: none
  appearance: none
  width: 300px
  z-index: 50
  &::-webkit-slider-runnable-track
    background: #eeeeee
    height: 3px

  &::-webkit-slider-thumb
    -webkit-appearance: none
    appearance: none
    width: 15px
    height: 10px
    background: #eeeeee
    cursor: pointer

  &:hover::-webkit-slider-thumb
    background: #b7b7b7

  &::-moz-range-thumb
    width: 3px
    height: 15px
    background: #eeeeee
    border-radius: 0
    cursor: pointer

  &:hover::-moz-range-thumb
    background: #eeeeee

  &::-ms-thumb
    width: 3px
    height: 15px
    background: #eeeeee
    cursor: pointer

  &:hover::-ms-thumb
    background: #eeeeee

.gallery_holder
  max-width: 20vw
  .image_gallery
    display: flex
    gap: 5px
    flex-wrap: wrap
    justify-content: right
    
    .gallery_img_small
      display: flex
      height: 8vh
      width: 6vw
      object-fit: cover
      cursor: pointer

.lightbox
  position: fixed
  top: 0
  left: 0
  right: 0
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
  background: white
  max-width: 80vw
  max-height: 80vh
  padding-right: 2rem
  img
    max-width: 100%
    max-height: 100%
@media (max-width: 640px)
  .project_cont
    height: 100%
    overflow-y: auto
    overflow-x: hidden
    height: 100% // Asegura que ocupe toda la altura del viewport 
    align-items: center
    .project_top
      display: flex
      flex-direction: column
      width: 100%
      .left
        display: none
      .right
        align-items: flex-start
        width: 100%
        gap: .5rem
        .abc
          line-height: 1.7rem

    .font_playground
      width: 100%
      flex-direction: column
      .module_1

      .font-tester
        width: 100%

        .sliders
          flex-direction: column
          width: 100%
          .slider_holder
            width: 100%
            .size_desktop
              display: none
            .size_mobile
              display: block
            label

            span

        textarea
          width: 100%
          all: unset
          display: block
          max-width: 100vw
          height: 20vh
          line-height: 0.8
          overflow-y: visible
          overflow-x: hidden
          white-space: pre-wrap
          word-wrap: break-word
          font-size: inherit
          font-family: inherit
          resize: none
          padding-top: 1rem
          &::-webkit-scrollbar
            display: none
            scrollbar-width: none
      input[type="range"]
        width: 100%
      .gallery_holder
        display: none
    .text_mobile
      display: block
      width: 100%
      position: fixed
      z-index: 100
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
        margin-right: 5vw
        background: white
        padding-bottom: 2vh   
</style>
