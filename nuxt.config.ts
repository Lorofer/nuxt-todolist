// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/fonts'],
  fonts: {
    families: [
      {name: "Montserrat", provider: "google"},
    ]
  },
  css: ['~/assets/main.css'],
  runtimeConfig: {
    public: {
      API_URL: process.env.NUXT_API_URL,
    },
  },
})