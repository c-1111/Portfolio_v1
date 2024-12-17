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
});