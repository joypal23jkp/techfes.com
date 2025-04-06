export default defineNuxtConfig({
  srcDir: "src/",

  app: {
    head: {
      title: "TechFes",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "" },
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
        },
      ],
    },
  },

  dir: {
    public: 'public'
  },

  css: [
    '~/assets/css/main.css',
    '~/assets/css/svg-animations.css',
    'swiper/css'
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  components: {
    dirs: [
      {
        path: "~/components/",
        global: true,
      },
      "~/components",
    ],
  },

  image: {
    provider: 'ipx'
  },

  modules: ["@vueuse/nuxt", "nuxt-swiper", [
    "@pinia/nuxt",
    {
      autoImport: ["defineStore", "acceptHMRUpdate"],
    },
  ], "pinceau/nuxt", "@nuxt/image", '@hypernym/nuxt-gsap'],

  gsap: {
    composables: true,
    extraPlugins: {
      text: true
    }
  },

  typescript: {
    strict: true,
    tsConfig: {
      compilerOptions: {
        types: ["vitest", "vite/client", "vitest/globals"],
      },
    },
  },

  $development: {
    devtools: {
      enabled: true
    }
  },

  $production: {
    routeRules: {
      '/**': { isr: true }
    }
  },

  compatibilityDate: "2024-11-27"
});