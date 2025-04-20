// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },

  app: {
    head: {
      title: 'Bunny Page',
      htmlAttrs: {
        lang: 'en'
      },
      link: [
        { rel: 'icon', type: 'image/gif', href: '/dumpy.gif'}
      ]
    }
  },

  experimental: {
    cookieStore: true
  },

  modules: ['@pinia/nuxt']
})