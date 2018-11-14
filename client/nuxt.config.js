require('dotenv').config()

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'BlendarStore',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A cool store' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: ['~/assets/style/app.styl'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['@/plugins/vuetify'],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@nuxtjs/proxy'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    proxy: true,
    prefix: '/api',
    withCredentials: true
  },
  proxy: {
    '/api/': {
      target: process.env.API_URL,
      pathRewrite: { '^/api/': '' }
    }
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {}
  }
}
