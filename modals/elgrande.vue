<template>
  <MModal>
    <div ref="modalRef" class="project_cont">
      <div class="project_top">
        <div class="left">
          <!-- <div class="project_title title_proj">El Grande</div> -->
          <div class="project_bio font_body_md">Diseño y desarrollo de las aplicaciones de una marca ficticia dentro de
            la temática "camiones" en el marco de un trabajo universitario centrado en la producción gráfica, artes
            finales y acabados. El proyecto consta de; una publicación editorial, un desplegable de envolvente, dos
            piezas textiles, pegatinas, dos diseños de llaveros, dos carteles en formato A1, </div>
        </div>
        <div class="right">
          <div class="big_logo_holder">
            <svg width="233" height="30" viewBox="0 0 233 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M33.7097 0L25.9697 29.75H76.2197L84.2797 0H33.7097ZM57.4897 24.6H40.3597C40.6797 24.17 40.9397 23.72 41.1497 23.25C41.3597 22.79 41.5697 22.12 41.7797 21.26L44.9697 8.5C45.3097 7.15 45.3897 6.04001 45.2097 5.15001H62.0497L61.7097 8.89001C61.3497 8.77001 61.0797 8.69001 60.8997 8.64001C60.7197 8.59001 60.3997 8.53 59.9397 8.47C59.4897 8.41 58.9897 8.37001 58.4597 8.37001H52.4197L51.2897 12.94H56.5697C57.6497 12.94 58.7997 12.77 60.0397 12.42L58.9697 16.66C57.9397 16.32 56.8697 16.16 55.7497 16.16H50.4697L49.1597 21.38H55.5997C56.7397 21.38 57.8997 21.21 59.0897 20.86L57.4897 24.6ZM68.1997 21.32C68.0497 21.93 67.9697 22.46 67.9397 22.91C67.9097 23.35 67.9197 23.67 67.9497 23.84C67.9797 24.02 68.0597 24.27 68.1697 24.6H59.4297C59.6997 24.27 59.8897 24.02 60.0197 23.84C60.1497 23.66 60.3097 23.35 60.5097 22.91C60.7097 22.47 60.8797 21.94 61.0297 21.32L64.2497 8.43001C64.3997 7.82001 64.4797 7.29001 64.5097 6.84001C64.5397 6.39001 64.5297 6.08 64.4997 5.91C64.4697 5.73 64.3897 5.48001 64.2797 5.15001H72.2497L68.1997 21.32Z"
                fill="black" />
              <path
                d="M232.35 0H81.2101L80.6901 1.90001H80.3401H229.89L223.14 27.85H73.6601L73.1401 29.75H70.6201H224.6L232.35 0Z"
                fill="black" />
              <path
                d="M89.3402 24.5996H95.9002C96.4002 24.5996 96.8302 24.5696 97.1702 24.4996C97.5102 24.4296 97.8003 24.2996 98.0403 24.1096C98.2803 23.9196 98.4603 23.7396 98.5803 23.5796C98.7003 23.4096 98.8602 23.1596 99.0602 22.8096H99.1202L98.9103 24.5996H105.44C105.22 24.0896 105.12 23.6196 105.14 23.1996C105.16 22.7796 105.31 21.9696 105.6 20.7696L106.8 15.9596C106.98 15.2796 107.16 14.7596 107.35 14.4096C107.54 14.0596 107.91 13.5696 108.48 12.9296H96.1502L95.2302 16.4996C95.8002 16.2596 96.2503 16.1396 96.5703 16.1396H99.3402L98.3603 20.1196C98.2403 20.5696 98.0402 20.8996 97.7502 21.0796C97.4602 21.2696 97.0702 21.3596 96.5602 21.3596H94.0703C93.5703 21.3596 93.2203 21.2696 93.0503 21.0796C92.8703 20.8896 92.8403 20.5696 92.9603 20.1196L95.5703 9.59964C95.6903 9.14964 95.8903 8.81965 96.1603 8.63965C96.4403 8.44965 96.8303 8.35963 97.3303 8.35963H105.19C106.21 8.35963 107.16 8.52964 108.04 8.87964L108.41 5.13965H94.2002C92.5602 5.13965 91.2202 5.57964 90.1702 6.46964C89.1302 7.35963 88.3503 8.81964 87.8503 10.8496L85.8303 18.8696C85.3203 20.8996 85.3603 22.3596 85.9603 23.2496C86.5603 24.1396 87.6903 24.5896 89.3303 24.5896L89.3402 24.5996Z"
                fill="black" />
              <path
                d="M107.589 23.8396C107.459 24.0196 107.259 24.2696 106.979 24.5996H115.729C115.619 24.2696 115.549 24.0196 115.509 23.8396C115.479 23.6596 115.469 23.3496 115.499 22.9096C115.519 22.4696 115.609 21.9396 115.759 21.3196L116.919 16.7396C117.169 15.7496 117.539 15.0996 118.049 14.7796C118.549 14.4596 119.499 14.3096 120.899 14.3096C121.889 14.3096 122.549 14.3496 122.889 14.4396C123.229 14.5296 123.609 14.7196 124.029 14.9996L125.189 10.3096H121.699C120.609 10.3096 119.779 10.4796 119.189 10.8096C118.609 11.1396 118.019 11.7496 117.439 12.6296H117.38L117.71 10.3196H110.549C110.659 10.6496 110.73 10.8996 110.77 11.0796C110.81 11.2596 110.809 11.5796 110.779 12.0196C110.749 12.4596 110.659 12.9896 110.509 13.6096L108.6 21.3196C108.45 21.9296 108.279 22.4596 108.079 22.9096C107.879 23.3496 107.719 23.6696 107.589 23.8396Z"
                fill="black" />
              <path
                d="M136.94 14.7393C136.74 14.8693 136.4 14.9393 135.92 14.9393H129.39C127.83 14.9393 126.67 15.2693 125.9 15.9393C125.13 16.6093 124.57 17.7093 124.19 19.2593L123.91 20.2793C123.53 21.8193 123.56 22.9293 123.99 23.5993C124.42 24.2693 125.42 24.5993 126.98 24.5993H132.08C133.06 24.5993 133.77 24.4993 134.21 24.2893C134.65 24.0793 135.04 23.6593 135.39 23.0293H135.45L135.42 24.5993H142.6C142.29 23.9393 142.28 23.0493 142.57 21.9293L144.11 15.6993C144.59 13.7493 144.57 12.3693 144.04 11.5493C143.51 10.7293 142.38 10.3193 140.66 10.3193H127.59L126.23 13.7293C126.74 13.4993 127.21 13.3393 127.64 13.2593C128.07 13.1693 128.6 13.1293 129.24 13.1293H136.37C136.85 13.1293 137.16 13.1993 137.29 13.3293C137.42 13.4593 137.44 13.6993 137.36 14.0293C137.27 14.3793 137.13 14.6193 136.93 14.7493L136.94 14.7393ZM135.95 19.7593C135.72 20.6793 135.5 21.2493 135.27 21.4693C135.04 21.6893 134.6 21.7993 133.91 21.7993H132.23C131.65 21.7793 131.27 21.6993 131.09 21.5493C130.91 21.3993 130.89 21.0793 131.02 20.5893L131.42 18.9393C131.55 18.4493 131.74 18.1193 131.99 17.9793C132.24 17.8293 132.66 17.7493 133.24 17.7293H136.43L135.94 19.7593H135.95Z"
                fill="black" />
              <path
                d="M143.78 24.5996H152.53C152.42 24.2696 152.35 24.0196 152.32 23.8396C152.29 23.6596 152.28 23.3496 152.3 22.9096C152.33 22.4696 152.41 21.9396 152.56 21.3196L154.31 14.2996C154.41 13.8596 154.57 13.5596 154.79 13.3796C155.01 13.1996 155.34 13.1096 155.78 13.1096H158.39C158.83 13.1096 159.11 13.1996 159.25 13.3796C159.39 13.5596 159.4 13.8596 159.3 14.2996L157.55 21.3196C157.4 21.9296 157.23 22.4596 157.03 22.9096C156.83 23.3596 156.67 23.6696 156.54 23.8396C156.41 24.0196 156.21 24.2696 155.93 24.5996H164.68C164.57 24.2696 164.5 24.0196 164.47 23.8396C164.43 23.6596 164.43 23.3496 164.45 22.9096C164.47 22.4696 164.56 21.9396 164.71 21.3196L166.16 15.5196C166.57 13.8596 166.49 12.5796 165.95 11.6696C165.4 10.7696 164.31 10.3096 162.68 10.3096H156.88C156.54 10.3096 156.23 10.3896 155.93 10.5596C155.63 10.7196 155.4 10.8996 155.23 11.0896C155.06 11.2796 154.87 11.5196 154.65 11.8196H154.59L154.74 10.3196H147.32C147.43 10.6496 147.5 10.8996 147.54 11.0796C147.58 11.2596 147.58 11.5796 147.56 12.0196C147.53 12.4596 147.44 12.9896 147.29 13.6096L145.38 21.3196C145.23 21.9296 145.06 22.4596 144.86 22.9096C144.66 23.3496 144.5 23.6696 144.37 23.8396C144.24 24.0196 144.04 24.2696 143.78 24.5996Z"
                fill="black" />
              <path
                d="M170.66 24.5994H176.7C177.09 24.5994 177.42 24.4894 177.72 24.2594C178.01 24.0294 178.36 23.6394 178.77 23.0894L178.81 24.5994H185.97C185.74 23.8694 185.76 22.9794 186.03 21.9294L190.23 5.14941H182.44C182.67 5.88941 182.65 6.78941 182.38 7.82941L181.42 11.7194H181.36C181.33 11.4594 181.29 11.2494 181.23 11.0694C181.18 10.8994 181.03 10.7294 180.79 10.5594C180.55 10.3894 180.23 10.3094 179.83 10.3094H174.21C171.2 10.3094 169.34 11.7894 168.62 14.7494L167.26 20.1594C166.54 23.1194 167.68 24.5994 170.67 24.5994H170.66ZM174.29 20.7094L175.91 14.2094C176.01 13.8094 176.16 13.5294 176.36 13.3594C176.56 13.1894 176.84 13.1094 177.18 13.1094H180.03C180.39 13.1094 180.62 13.1994 180.74 13.3694C180.86 13.5394 180.87 13.8194 180.77 14.2094L179.15 20.7094C179.05 21.1094 178.9 21.3894 178.7 21.5594C178.5 21.7294 178.22 21.8094 177.88 21.8094H175.03C174.67 21.8094 174.44 21.7194 174.32 21.5494C174.2 21.3794 174.19 21.0994 174.29 20.7094Z"
                fill="black" />
              <path
                d="M188.59 20.2798C188.21 21.8198 188.24 22.9298 188.67 23.5998C189.1 24.2698 190.1 24.5998 191.66 24.5998H205.94L207.33 21.1998C206.72 21.4498 206.18 21.6098 205.71 21.6898C205.24 21.7698 204.64 21.8098 203.92 21.8098H197.04C196.47 21.8098 196.08 21.6998 195.88 21.4698C195.68 21.2398 195.64 20.8698 195.76 20.3398L196.09 18.9998H208.09L209.19 14.6198C209.57 13.0798 209.54 11.9698 209.11 11.2998C208.68 10.6298 207.68 10.2998 206.12 10.2998H195.22C193.66 10.2998 192.49 10.6298 191.73 11.2998C190.96 11.9698 190.39 13.0698 190.02 14.6198L188.6 20.2698L188.59 20.2798ZM197.28 14.2698C197.39 13.8498 197.54 13.5598 197.73 13.3798C197.92 13.1998 198.2 13.1098 198.59 13.1098H201.54C201.93 13.1098 202.18 13.1998 202.29 13.3798C202.4 13.5598 202.41 13.8498 202.29 14.2698L201.8 16.2098H196.79L197.28 14.2698Z"
                fill="black" />
              <path d="M218.69 19.4902H211.52L210.25 24.6002H217.41L218.69 19.4902Z" fill="black" />
              <path d="M24.96 0L17.21 29.75H23.56L31.3 0H24.96Z" fill="black" />
              <path d="M24.96 0L17.21 29.75H23.56L31.3 0H24.96Z" fill="black" />
              <path d="M16.5098 0L8.75977 29.75H15.1098L22.8498 0H16.5098Z" fill="black" />
              <path d="M16.5098 0L8.75977 29.75H15.1098L22.8498 0H16.5098Z" fill="black" />
              <path d="M14.08 0H7.74L0 29.75H6.34L14.08 0Z" fill="black" />
              <path d="M14.08 0H7.74L0 29.75H6.34L14.08 0Z" fill="black" />
            </svg>
          </div>
        </div>
      </div>

      <div class="el_grande_gallery">
        <div v-for="item in items" :key="item.id" class="gallery_card" @click="openModal(item)"
          @mouseenter="onHover(item.id, true)" @mouseleave="onHover(item.id, false)">
          <div class="card_thumbnail" :style="{ backgroundImage: `url(${item.thumbnail})` }"></div>
          <div class="card_name fecha_card_proy" v-if="hoveredCard === item.id">
            {{ item.name }}
          </div>
        </div>
      </div>

      <div v-if="selectedItem" class="gallery_modal" @click="handleOutsideClick"> <!-- ***** -->
        <div class="modal_content" @click.stop> <!-- ***** -->
          <button class="exit_button" @click="closeModal" >
            <svg width="24" height="8" viewBox="0 0 24 8" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4.72433 7.956C4.02166 7.11733 3.29633 6.392 2.54833 5.78C1.80033 5.168 1.02966 4.66933 0.236328 4.284V3.672C1.80033 2.87867 3.29633 1.65467 4.72433 0H5.91433C5.55166 0.770667 5.18899 1.45067 4.82633 2.04C4.46366 2.60667 4.11233 3.08267 3.77233 3.468V4.488C4.11233 4.85067 4.46366 5.32667 4.82633 5.916C5.18899 6.48267 5.55166 7.16267 5.91433 7.956H4.72433ZM3.60233 4.692V3.264H23.7643V4.692H3.60233Z" />
            </svg>
          </button>
          <div class="images_holder">
            <div v-for="photo in selectedItem.photos" :key="photo.src" class="modal_photo">
              <img :src="photo.src" :alt="photo.description" />
              <p>{{ photo.description }}</p>
            </div>
          </div>
        </div>
      </div>



      <div class="text_mobile hidden">
        <div class="text_mobile_top">
          <div class="project_title title_proj">El Grande</div>
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
          <span class="bg-white">Diseño y desarrollo de las aplicaciones de una marca ficticia dentro de
            la temática "camiones" en el marco de un trabajo universitario centrado en la producción gráfica, artes
            finales y acabados. El proyecto consta de; una publicación editorial, un desplegable de envolvente, dos
            piezas textiles, pegatinas, dos diseños de llaveros, dos carteles en formato A1,</span>
          <span class="bg-white annotation"></span>
        </div>
      </div>
    </div>
    <Exit_button class="exit_total" :class="{ 'pointer-events-none': selectedItem }" @click="handleCloseClick"  
     />
  </MModal>
</template>


<style scoped lang="sass">

.project_top
  display: flex
  justify-content: space-between
  margin-bottom: 4rem
  align-items: center
  .left
    .project_bio
      max-width:60ch
  .right
    display: flex
    .big_logo_holder
      display: flex
      svg
        width: 100%
        transform: scale(2)
        transform-origin: right
      

.el_grande_gallery
  display: flex
  column-gap: 8vw
  row-gap: 1vw
  flex-wrap: wrap
  max-width: 90vw
  .gallery_card 
    display: flex
    min-width: 200px
    flex-direction: column
    align-items: center
    cursor: pointer
    transition: transform 0.3s
    padding-bottom: 4rem
    .card_thumbnail 
      width:200px
      height: 200px
      background-size: contain
      background-repeat: no-repeat
      background-position: center
    .card_name 
      margin-bottom: -2rem
      align-self: flex-end
      background: #fafafa
.gallery_modal 
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100%
  background-color: rgba(255, 255, 255, 0.9)
  display: grid
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr))
  justify-content: center
  align-items: flex-start
  overflow-y: auto 
  padding: 2rem
  z-index: 800
  .exit_button
    display: flex
    align-items: center
    justify-content: center
    width: 34px
    height: 34px
    position: fixed
    bottom: 4rem
    left: 0
    margin: auto
    border: solid 1px #acacac
    border-radius: 7px
    margin-left: 2rem
    z-index: 999

    svg
      fill: #acacac
      mix-blend-mode: difference
  .exit_button:hover 
    background-color: white
    svg
      fill: white
  .images_holder 
    display: grid
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr))
    gap: 1rem
    justify-content: center
    margin-left: 20vw

  .modal_photo img 
    max-width: 350px
    max-height: 350px

.exit_total
  z-index: 995

@media (max-width: 640px)
  .project_cont
    overflow-y: auto
    height: 100% // Asegura que ocupe toda la altura del viewport 
    align-items: center
    width: 100vw
    overflow-x: hidden
    margin-left: -2.5vw
    .project_top
      display: flex
      flex-direction: column
      align-items: center
      width: 100%
      margin-bottom: 3rem
      margin-top: 5rem
      .left
        display: none
        .project_bio
      .right
        width: 100%
        .big_logo_holder
          width: 100%
          svg
            transform: scale(1.6)
            transform-origin: center
    .el_grande_gallery
      display: flex
      column-gap: 1vw
      row-gap: 4vw
      flex-wrap: wrap
      max-width: 100%
      width: 100vw
      overflow-x: hidden
      left: -1rem
      padding-bottom: 4rem
      .gallery_card 
        display: flex
        width: 100px
        flex-direction: column
        align-items: center
        cursor: pointer
        transition: transform 0.3s
        padding-bottom: 2rem
        .card_thumbnail 
          width:180px
          height: 180px
          background-size: contain
          background-repeat: no-repeat
          background-position: center
        .card_name 
          margin-bottom: -2rem
          align-self: flex-end
          background: #fafafa
    .gallery_modal 
      position: fixed
      top: 0
      left: 0
      width: 100vw
      height: 100%
      background-color: rgba(255, 255, 255, 0.8)
      color: white
      display: flex
      justify-content: center
      align-items: flex-start
      overflow-y: auto
      padding-bottom: 4rem
      padding-top: 2rem
      .exit_button
        bottom: 95%
        left: 2.5vw
        margin-left: 0  
      .images_holder 
        display: flex
        flex-direction: column
        align-items: center
        gap: 1rem
        margin-left: 0

      .modal_photo img 
        max-width: 350px
        max-height: 350px
    .text_mobile
      display: block
      width: 100%
      padding-right: 2.5vw
      position: fixed
      bottom: 0
      margin-left: 2.5vw
      z-index: 999
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
import { ref } from "vue";



const selectedItem = ref(null);

const openModal = (item) => {
  selectedItem.value = item;
};

const closeModal = () => {
  selectedItem.value = null;
};

const handleOutsideClick = (event) => {
  closeModal();
};







const items = ref([
  {
    "id": 1,
    "name": "Textil",
    "thumbnail": "/img/elgrande/cami_delante.webp",
    "photos": [
      { "src": "/img/elgrande/cami_delante.webp", "description": "" },
      { "src": "/img/elgrande/cami_detras.webp", "description": "" },
      { "src": "/img/elgrande/chaleco.webp", "description": "" }

    ]
  },
  {
    "id": 2,
    "name": "Llaveros",
    "thumbnail": "/img/elgrande/llaveros_animated.webp",
    "photos": [
      { "src": "/img/elgrande/llavero_azul.webp", "description": "" },
      { "src": "/img/elgrande/llavero_rojo.webp", "description": "" },
      { "src": "/img/elgrande/llavero_dados.webp", "description": "" },
      { "src": "/img/elgrande/llaveros_measure.webp", "description": "" }

    ]
  },
  {
    "id": 3,
    "name": "Editorial",
    "thumbnail": "/img/elgrande/editorial_anim.webp",
    "photos": [
      { "src": "/img/elgrande/editorial_camiones__0000_1.webp", "description": "" },
      { "src": "/img/elgrande/editorial_camiones__0001_2.webp", "description": "" },
      { "src": "/img/elgrande/editorial_camiones__0002_3.webp", "description": "" },
      { "src": "/img/elgrande/editorial_camiones__0003_4.webp", "description": "" },
      { "src": "/img/elgrande/editorial_camiones__0004_5.webp", "description": "" },
      { "src": "/img/elgrande/editorial_camiones__0005_6.webp", "description": "" },
      { "src": "/img/elgrande/editorial_camiones__0006_7.webp", "description": "" },
      { "src": "/img/elgrande/editorial_camiones__0007_8.webp", "description": "" },
      { "src": "/img/elgrande/editorial_camiones__0008_9.webp", "description": "" },
      { "src": "/img/elgrande/editorial_camiones__0009_10.webp", "description": "" },
      { "src": "/img/elgrande/editorial_camiones__0010_11.webp", "description": "" },
      { "src": "/img/elgrande/editorial_camiones__0011_12.webp", "description": "" },
      { "src": "/img/elgrande/editorial_camiones__0012_13.webp", "description": "" },
      { "src": "/img/elgrande/editorial_camiones__0013_14.webp", "description": "" },

    ]
  },
  {
    "id": 4,
    "name": "Desplegable",
    "thumbnail": "/img/elgrande/desplegable_ext.webp",
    "photos": [
      { "src": "/img/elgrande/desplegable1.webp", "description": "" },
      { "src": "/img/elgrande/desplegable2.webp", "description": "" },
      { "src": "/img/elgrande/desplegable3.webp", "description": "" },
      { "src": "/img/elgrande/desplegable4.webp", "description": "" },
      { "src": "/img/elgrande/desplegable_ext.webp", "description": "" },
      { "src": "/img/elgrande/desplegable_int.webp", "description": "" }
    ]
  },
  {
    "id": 5,
    "name": "Carteles",
    "thumbnail": "/img/elgrande/posters_camiones.webp",
    "photos": [
      { "src": "/img/elgrande/posters_camiones.webp", "description": "" },
      { "src": "/img/elgrande/posters_camiones2.webp", "description": "" }
    ]
  },
  {
    "id": 6,
    "name": "Logos",
    "thumbnail": "/img/elgrande/1.gif",
    "photos": [
      { "src": "/img/elgrande/logos/_(1).webp", "description": "" },
      { "src": "/img/elgrande/logos/_(2).webp", "description": "" },
      { "src": "/img/elgrande/logos/_(3).webp", "description": "" },
      { "src": "/img/elgrande/logos/_(4).webp", "description": "" },
      { "src": "/img/elgrande/logos/_(5).webp", "description": "" },
      { "src": "/img/elgrande/logos/_(6).webp", "description": "" },
      { "src": "/img/elgrande/logos/_(7).webp", "description": "" },
      { "src": "/img/elgrande/logos/_(8).webp", "description": "" },
      { "src": "/img/elgrande/logos/_(9).webp", "description": "" },
      { "src": "/img/elgrande/logos/_(10).webp", "description": "" },
      { "src": "/img/elgrande/logos/_(11).webp", "description": "" },
      { "src": "/img/elgrande/logos/_(12).webp", "description": "" },
      { "src": "/img/elgrande/logos/_(13).webp", "description": "" },
      { "src": "/img/elgrande/logos/_(14).webp", "description": "" },
      { "src": "/img/elgrande/logos/_(15).webp", "description": "" },
      { "src": "/img/elgrande/logos/_(16).webp", "description": "" },

      { "src": "/img/elgrande/.webp", "description": "" }
    ]
  },
  {
    "id": 7,
    "name": "Proceso",
    "thumbnail": "/img/elgrande/laser.gif",
    "photos": [
      { "src": "/img/elgrande/print.gif", "description": "" },
      { "src": "/img/elgrande/laser.gif", "description": "" },
      { "src": "/img/elgrande/lasercut.webp", "description": "" },
      { "src": "/img/elgrande/serigrafia.webp", "description": "" },
      { "src": "/img/elgrande/llaveros_prueba.webp", "description": "" },
      { "src": "/img/elgrande/caja1.webp", "description": "" },
      // { "src": "/img/elgrande/caja2.webp", "description": "" },

    ]
  }

])

const hoveredCard = ref(null); // Aquí almacenaremos el ID de la tarjeta que está siendo hovered
function onHover(cardId, state) {
  hoveredCard.value = state ? cardId : null; // Establece el ID cuando está hover, o null si no lo está
}

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


const isVisible = ref(false);
const openMobileText = () => { isVisible.value = !isVisible.value; }

</script>
