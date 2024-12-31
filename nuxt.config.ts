import resolveModalsRoutes from "./module-utils/resolveModalsRoutes";
import pushRecursively from "./module-utils/pushRecursively";

export default defineNuxtConfig({
  devtools: { enabled: true },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  css: ['~/assets/css/main.css'],

  // compatibilityDate: "2024-11-28",
  modules: ["@nuxt/ui", "@vueuse/nuxt"],

  compatibilityDate: "2024-12-07",

  app: {
    head: {
      meta: [
        { name: 'color-scheme', content: 'light' } // Forzar modo claro
      ],
      title: 'Carlos Martínez - Portfolio', // Título por defecto
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon1.ico' } // Ruta al favicon
      ],
      // script: [
      //   {
      //     type: 'application/json',
      //     children: '<!-- ¡Hola! Este es un mensaje para quienes inspeccionan el código. -->'
      //   }
      // ]
    }
  }
});