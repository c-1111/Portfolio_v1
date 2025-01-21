<template>
  <div class="switch_holder annotation">
    <button 
      @click="changeLanguage('es')" 
      :id="selectedLanguage === 'es' ? 'button-es-selected' : 'button-es'"
    >
      ESP
    </button>
    <button 
      @click="changeLanguage('en')" 
      :id="selectedLanguage === 'en' ? 'button-en-selected' : 'button-en'"
    >
      ENG
    </button>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import Cookies from 'js-cookie';
import { onMounted, ref } from 'vue';

// Obtener la función y el valor del locale
const { locale } = useI18n();

// Estado para el idioma seleccionado
const selectedLanguage = ref('');

// Cambiar el idioma y almacenarlo en la cookie
const changeLanguage = (lang) => {
  locale.value = lang;
  selectedLanguage.value = lang;  // Actualizar el idioma seleccionado
  Cookies.set('language', lang, { expires: 365 }); // Establecer la cookie por 365 días
};

// Verificar si hay un idioma guardado en la cookie al montar el componente
onMounted(() => {
  const savedLang = Cookies.get('language');
  if (savedLang) {
    locale.value = savedLang; // Cambiar el idioma a lo guardado en la cookie
    selectedLanguage.value = savedLang; // Establecer el idioma por defecto
  }
});
</script>

<style scoped>
.switch_holder {
  position: fixed;
  top: 1rem;
  right: 2rem;
  display: flex;
  gap: 1rem;
}

button {
  cursor: pointer;
  background: #fafafa;
  transition: background-color 0.3s ease;
}

/* Estilo para el botón seleccionado */
#button-es-selected, #button-en-selected {
  background: #d4d4d4; /* Fondo gris oscuro para el idioma seleccionado */
  color: white; /* Texto blanco para el idioma seleccionado */
}

/* Estilo para el botón cuando no está seleccionado */
#button-es, #button-en {
  background: #fafafa;
}

/* Estilo para cuando el botón es hover */
button:hover {
  background: #ddd; /* Fondo gris claro en hover */
}

@media (max-width: 640px) {
  .switch_holder {
  position: fixed;
  top: 0.5rem;
  left: 2.5vw;
  display: flex;
  gap: 1rem;
  z-index: 40;
}
}
</style>
