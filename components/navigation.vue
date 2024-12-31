<template>
    <div class="navbar_holder w-full flex flex-row justify-between items-end pb-6">
        <div class="nav_left flex items-center gap-4">
            <div class="name font_body_md text-nowrap">Carlos Martínez </div>
            <div class="checkbox_info flex gap-1"><CustomCheckbox @click="openNav" class="scale-75"/>
                <p class="home_info_txt info_gray text-sm text-[#bebebe]">+info</p>
            </div>
        </div>
        <div v-show="isVisible" class="nav_mid flex gap-[20%] pl-[3vw] pr-[6vw] items-end"> <!-- bg-[#F8F8F8] -->
            <div class="nav_text fecha_card_proy flex max-w-[90ch]">diseñador enfocado en la experimentación visual
                y soluciones creativas. Especializado en diseño de identidad, frontend y diseño editorial.</div>
            <div class="nav_contact_links flex gap-4 items-center info_gray">
                <!-- <a class="linkedin cursor-pointer">linkedin</a> -->
                <a href="https://www.instagram.com/carlosrsly/" target="_blank" class="instagram cursor-pointer">instagram</a>
                <a href="https://www.are.na/carlos-martinez/channels" target="_blank" class="arena cursor-pointer">are.na</a>
            </div>
            <div class="credit fixed bottom-1 text-gray-300 text-xs opacity-50"> © 2024</div>
        </div>
        <div class="nav_right flex">
            <div class="mamil_num flex flex-col info text-right pr-16">
                <a href="tel:+34646451283" class="tfn cursor-pointer" target="_blank">(+34) 646 45 1283</a>
                <a href="mailto:carlos.m.magro@gmail.com?subject=hola!" target="_blank"
                    class="mail cursor-pointer">carlos.m.magro@gmail.com</a>
            </div>
        </div>
    </div>
</template>

<script setup>
import CustomCheckbox from '@/components/custom_checkbox.vue'; // Asegúrate de importar tu componente

const isVisible = ref(false);
const openNav = () => { isVisible.value = !isVisible.value; }
</script>