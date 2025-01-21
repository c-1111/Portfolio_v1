import { defineNuxtPlugin } from '#app';
import Cookies from 'js-cookie';

export default defineNuxtPlugin((nuxtApp) => {
  // Obtener el idioma guardado en la cookie o usar 'en' como valor por defecto
  const savedLang = Cookies.get('language') || 'es';

  // Utilizar el hook onNuxtReady para asegurarse de que i18n esté completamente cargado
  nuxtApp.hook('app:mounted', () => {
    const i18n = nuxtApp.i18n;

    // Asegurarse de que i18n esté listo antes de cambiar el idioma
    if (i18n) {
      i18n.setLocale(savedLang); // Establecer el idioma desde la cookie
    } else {
      console.error('i18n no está disponible en el hook de mounted');
    }
  });
});
