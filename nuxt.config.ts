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
  modules: [
    "@vueuse/nuxt",
    [
      "@pinia/nuxt",
      {
        autoImport: ["defineStore", "acceptHMRUpdate"],
      },
    ],
    "pinceau/nuxt",
  ],
  typescript: {
    strict: true,
    tsConfig: {
      compilerOptions: {
        types: ["vitest", "vite/client", "vitest/globals"],
      },
    },
  },
});
