<template>
    <div class="navbar_holder w-full flex flex-row justify-between items-end pb-6">
        <div class="nav_left flex items-center gap-4">
            <div class="name font_body_md text-nowrap">Carlos Martínez </div>
            <div class="checkbox_info flex gap-1">
                <CustomCheckbox @click="openNav" class="scale-75" />
                <p class="home_info_txt info_gray text-sm text-[#bebebe]">+info</p>
            </div>
        </div>
        <div v-show="isVisible" class="nav_mid flex gap-[20%] pl-[3vw] pr-[6vw] items-end"> <!-- bg-[#F8F8F8] -->
            <div class="nav_text fecha_card_proy flex flex-col-reverse max-w-[90ch]">{{ t('nav_text') }}
                <div class="nav_text pb-4 flex flex-col-reverse">
                    <div class="wrap flex items-baseline text-[14px] gap-2 text-[#B7B7B7]">
                        Design & Front-End Dev intern at <a href="https://works.display.design/" target="_blank"><svg
                                xmlns="http://www.w3.org/2000/svg" width="73" height="13" fill="none"
                                viewBox="0 0 86 16">
                                <path fill="#B7B7B7"
                                    d="M.484 15V1.17h4.759c4.448 0 6.653 2.263 6.653 6.712C11.896 12.466 9.807 15 5.36 15H.484Zm1.838-1.586h3.017c3.327 0 4.7-2.031 4.7-5.416 0-3.598-1.412-5.222-4.72-5.222H2.323v10.638ZM18.627 2.756h-1.702v10.658h1.702V15h-5.222v-1.586h1.702V2.756h-1.702V1.17h5.222v1.586Zm7.348 12.514c-3.463 0-5.745-1.702-5.803-4.719l1.721-.116c.174 2.65 2.476 3.288 4.043 3.288 1.915 0 3.481-.812 3.481-2.456 0-.929-.483-1.49-1.489-1.915-1.025-.445-3.5-.948-4.855-1.47-1.296-.503-2.495-1.412-2.495-3.114 0-2.399 2.244-3.869 4.932-3.869 3.056 0 5.068 1.47 5.28 4.217h-1.779c-.174-1.799-1.508-2.727-3.481-2.727-1.819 0-3.114.715-3.114 2.205 0 .928.715 1.412 1.412 1.682 1.238.484 3.83 1.045 4.835 1.432 1.625.6 2.573 1.702 2.573 3.481 0 2.553-2.438 4.082-5.261 4.082Zm7.197-.27V1.17h5.706c3.636 0 4.739 2.07 4.739 4.081 0 2.612-1.51 4.12-4.72 4.12H35.01V15h-1.837Zm1.837-7.215h3.579c2.243 0 3.152-.793 3.152-2.534 0-1.74-1.102-2.475-2.843-2.475H35.01v5.01ZM45.27 15V1.17h1.838v12.244h7.08V15H45.27Zm19.955 0-1.547-4.178h-5.88L56.288 15h-1.914l5.338-13.83h2.012L67.237 15h-2.012Zm-6.886-5.687h4.778l-2.418-6.537h-.02l-2.34 6.537ZM70.921 15V9.255L65.583 1.17h2.166l4.12 6.557 4.178-6.557h2.108l-5.397 8.085V15h-1.837Zm10.427 0v-4.2h4.2V15h-4.2Z" />
                            </svg></a></div>
                    <div class="currently pb-2 text-[12px] text-[#B7B7B7]">currently</div>

                </div>
            </div>
            <div class="nav_contact_links flex gap-4 items-center info_gray">
                <a href="https://www.linkedin.com/in/carlos-m-/" target="_blank"
                    class="linkedin cursor-pointer">linkedin</a>
                <a href="https://www.instagram.com/carlosrsly/" target="_blank"
                    class="instagram cursor-pointer">instagram</a>
                <a href="https://www.are.na/carlos-martinez/channels" target="_blank"
                    class="arena cursor-pointer">are.na</a>
            </div>
            <div class="credit tooltip fixed bottom-1 text-gray-300 text-xs opacity-50"> © 2024 <span
                    class="tooltiptext">{{ t('tooltiptext') }}</span> </div>
        </div>
        <div class="nav_right flex">
            <div class="mamil_num flex flex-col info text-right pr-16">
                <a :href="cvFilePath" target="_blank" rel="noopener noreferrer" class="arena cursor-pointer pb-2">CV</a>
                <a href="tel:+34646451283" class="tfn cursor-pointer" target="_blank">(+34) 646 45 12 83</a>
                <a href="mailto:carlos.m.magro@gmail.com?subject=hola!" target="_blank"
                    class="mail cursor-pointer">carlos.m.magro@gmail.com</a>
            </div>
        </div>
    </div>
</template>

<script setup>
import CustomCheckbox from '@/components/custom_checkbox.vue'; // Asegúrate de importar tu componente
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n(); // Hook para obtener la función de traducción

// Ruta dinámica al archivo
const cvFilePath = computed(() => {
    return locale.value === 'es' ? '/CV_Carlos_Martinez_2024_ESP.pdf' : '/CV_Carlos_Martinez_2024_ENG.pdf';
});

const isVisible = ref(true);
const openNav = () => { isVisible.value = !isVisible.value; }

</script>

<style scoped>
.tooltip {
    display: inline-block;
    border-bottom: 1px dotted black;
}

.tooltip .tooltiptext {
    visibility: hidden;
    width: 230px;
    background-color: #eeeeee;
    color: black;
    text-align: center;
    border-radius: 6px;
    padding: 1px 0;

    /* Position the tooltip */
    position: absolute;
    z-index: 1;
    top: -3px;
    right: 105%;
}

.tooltip:hover .tooltiptext {
    visibility: visible;
}
</style>