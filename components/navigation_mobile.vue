<template>
    <div class="navbar_holder w-full flex flex-col  bg-white pt-2"> 
        <div class="nav_top flex justify-between items-end px-[2.5vw]">
        <div class="nav_left flex items-center gap-4">
            <div class="name font_body_md text-nowrap">Carlos Martínez </div>
            <div class="checkbox_info flex gap-1"><CustomCheckbox @click="openNav" class="scale-80" />
                <p class="home_info_txt info_gray text-sm text-[#bebebe]">+info</p>
            </div>
        </div>
        <div class="nav_right flex">
            <div class="mamil_num flex flex-col info text-right">
                <a href="tel:+34646451283" class="tfn cursor-pointer" target="_blank">(+34) 646 45 1283</a>
                <a href="mailto:carlos.m.magro@gmail.com?subject=hola!" target="_blank"
                    class="mail cursor-pointer">carlos.m.magro@gmail.com</a>
            </div>
        </div>
    </div>
    <div class="nav_bttm mt-4 px-[2.5vw] w-full bg-[#F8F8F8]">
        <div v-show="isVisible" class="nav_mid flex gap-[20%] items-end py-2"> 
            <div class="nav_text fecha_card_proy flex max-w-[90ch]">{{ t('nav_text') }}</div>
            <div class="nav_contact_links flex flex-col gap-2 items-end info_gray">
                <!-- <a href="https://www.linkedin.com/in/carlos-m-/" target="_blank" class="linkedin cursor-pointer">linkedin</a> -->
                <a href="https://www.instagram.com/carlosrsly/" target="_blank" class="instagram cursor-pointer">instagram</a>
                <a href="https://www.are.na/carlos-martinez/channels" target="_blank" class="arena cursor-pointer">are.na</a>
            </div>
            <div class="credit fixed bottom-1 text-gray-300 text-xs opacity-50"> © 2024</div>
        </div>
    </div>
    </div>
</template>

<script setup>
import CustomCheckbox from '@/components/custom_checkbox.vue'; // Asegúrate de importar tu componente
import { useI18n } from 'vue-i18n';

const { t } = useI18n(); // Hook para obtener la función de traducción


const isVisible = ref(true);
const openNav = () => { isVisible.value = !isVisible.value; }
</script>

