// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  modules: ["@nuxt/content", "@nuxtjs/i18n", "@nuxt/ui", "@nuxtjs/seo"],
  content: {
    documentDriven: true,
  },
  i18n: {
    defaultLocale: "de",
    locales: [
      { code: "en", iso: "en-US", file: "en-US.json" },
      { code: "de", iso: "de-DE", file: "de-DE.json", isCatchallLocale: true },
    ],
    langDir: "locales/",
  },
  site: {
    url: "http://localhost:3000",
    name: "Bixelspace",
    description: "Welcome to BixelSpace!",
  },
  sitemap: {
    cacheMaxAgeSeconds: 3600,
  },
  schemaOrg: {
    identity: "Person",
  },
  $production: {
    app: {
      head: {
        link: [
          {
            rel: "me",
            href: "https://bumscode.com/@sakurasubnet",
          },
        ],
        script: [
          {
            defer: "",
            "data-domain": "bixelspace.de",
            src: "https://tracking.bixelspace.de/js/script.js",
            tagPosition: "bodyClose",
          },
        ],
      },
    },
    site: {
      url: "https://bixelspace.de",
      name: "Bixelspace",
      description: "Welcome to BixelSpace!",
      trailingSlash: true,
    },
  },
});
