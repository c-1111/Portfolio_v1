export default defineNuxtConfig({
  devtools: { enabled: true },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  css: ['~/assets/css/main.css'], // Asegúrate de tener la ruta correcta a tu archivo CSS

  modules: [
    '@nuxt/ui',
    '@vueuse/nuxt',
    '@nuxtjs/i18n', // Importa el módulo de i18n
  ],

  i18n: {
    lazy: true,
    langDir: 'languages',
    locales: [
      {
        code: 'en',
        iso: 'en',
        name: 'English',
        file: 'eng.json',
      },
      {
        code: 'es',
        iso: 'es',
        name: 'Español',
        file: 'esp.json',
      },
    ],
    defaultLocale: 'es',
    vueI18n: './i18n.options.ts',
    strategy: 'no_prefix', // Evitar que el idioma se añada a la URL
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'language',
      alwaysRedirect: false, // No redirigir automáticamente a la URL con el idioma
      fallbackLocale: 'en',
    },
    beforeLanguageSwitch(_, locale) {
      Cookies.set('language', locale, { expires: 365 }); // Guardar el idioma en la cookie
    },
  },

  plugins: [
    '~/plugins/i18n.js', // Asegúrate de que la ruta aquí esté correcta
  ],

  compatibilityDate: '2024-12-07',

  app: {
    head: {
      meta: [
        { name: 'color-scheme', content: 'light' }, // Forzar modo claro
      ],
      title: 'Carlos Martínez - Portfolio', // Título por defecto
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon1.ico' }, // Ruta al favicon
      ],
    },
  },
});
