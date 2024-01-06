// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  modules: [
    '@nuxt/content',
    '@nuxtjs/i18n',
    '@nuxt/ui',
  ],
  $production: {
    app: {
      head: {
        link: [
          {
            rel: 'me',
            href: 'https://bumscode.com/@sakurasubnet',
          }
        ],
        script: [
          {
            defer: '',
            'data-domain': 'bixelspace.de',
            src: 'https://tracking.bixelspace.de/js/script.js',
            tagPosition: 'bodyClose'
          }
        ],
      }
    },
  }
})
