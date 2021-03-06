require('dotenv').config()
// console.log(process.env.PROD)
export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  mode: 'spa',
  target: 'static',
  ssr: false,
  loading: {
    color: '#ff3b40',
    height: '15px'
  },
  server: {
    port: process.env.PORT
  },
  // loading: '~/components/LoadingBar.vue',
  body: true,
  // Global page headers: https://go.nuxtjs.dev/config-head

   generate: {
    cache: {
      ignore: [
        // When something changed in the docs folder, do not re-build via webpack
        'docs'
      ]
    }
  },
  head: {
    htmlAttrs: {
      lang: 'en',
      amp: true
    },
    // meta: [
    //   { charset: 'utf-8' },
    //   { name: "viewport", content: "width=device-width, initial-scale=1" },
    //   { name: "apple-mobile-web-app-capable", content: "yes"},
    //   { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent"},
    //   { name: 'apple-mobile-web-app-title', content:"Evoush::Official"},
    //   { hid: 'description', name: 'description', content: 'Your eternal future'},
    //   // { name: "format-detection", content:"telephone=no"}
    //   {
    //     hid: 'description',
    //     name: 'description',
    //     content:
    //       'Your Eternal Future'
    //   },

    //   // Twitter
    //   // Test on: https://cards-dev.twitter.com/validator
    //   {
    //     hid: 'twitter:card',
    //     name: 'twitter:card',
    //     content: 'summary_large_image'
    //   },
    //   { hid: 'twitter:site', name: 'twitter:site', content: '@evoushofficial' },
    //   {
    //     hid: 'twitter:url',
    //     name: 'twitter:url',
    //     content: 'https://twitter.com/evoushofficial?lang=en'
    //   },
    //   {
    //     hid: 'twitter:title',
    //     name: 'twitter:title',
    //     content: 'Evoush Official'
    //   },
    //   {
    //     hid: 'twitter:description',
    //     name: 'twitter:description',
    //     content:
    //       'Your Eternal Future'
    //   },
    //   {
    //     hid: 'twitter:image',
    //     name: 'twitter:image',
    //     content: 'https://raw.githubusercontent.com/codesyariah122/bahan-evoush/main/images/banner/about/3.jpg'
    //   },

    //   // Open Graph
    //   // Test on: https://developers.facebook.com/tools/debug/
    //   { hid: 'og:site_name', property: 'og:site_name', content: 'Evoush::Official' },
    //   { hid: 'og:type', property: 'og:type', content: 'website' },
    //   {
    //     hid: 'og:url',
    //     property: 'og:url',
    //     content: 'https://evoush.com'
    //   },
    //   {
    //     hid: 'og:title',
    //     property: 'og:title',
    //     content: 'Evoush Official'
    //   },
    //   {
    //     hid: 'og:description',
    //     property: 'og:description',
    //     content:
    //       'Your Eternal Future'
    //   },
    //   {
    //     hid: 'og:image',
    //     property: 'og:image',
    //     content: 'https://raw.githubusercontent.com/evoush-products/bahan_evoush/main/assets/img/LOGO231.png'
    //   },
    //   {
    //     hid: 'og:image:secure_url',
    //     property: 'og:image:secure_url',
    //     content: 'https://raw.githubusercontent.com/evoush-products/bahan_evoush/main/assets/img/LOGO231.png'
    //   },
    //   {
    //     hid: 'og:image:alt',
    //     property: 'og:image:alt',
    //     content: 'Evoush::Success'
    //   }

    // ],
    link: [
      {
        hid: "canonical",
        rel: "canonical",
        href: "https://evoush.com",
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: '/assets/css/global.css'},
      { rel: 'stylesheet', type: 'text/css', href: '/assets/vendor/bootstrap/css/bootstrap.min.css'},
      { rel: 'stylesheet', type: 'text/css', href: '/assets/vendor/icofont/icofont.min.css'},
      { rel: 'stylesheet', type: 'text/css', href: '/assets/vendor/boxicons/css/boxicons.min.css'},
      { rel: 'stylesheet', type: 'text/css', href: '/assets/vendor/venobox/venobox.css'},
      { rel: 'stylesheet', type: 'text/css', href: '/assets/vendor/owl.carousel/assets/owl.carousel.min.css'},
      { rel: 'stylesheet', type: 'text/css', href: '/assets/vendor/aos/aos.css'},
      { rel: 'stylesheet', type: 'text/css', href: '/assets/css/style.css'},
      // { rel: 'manifest', href: '/manifest.json'}
    ],


    script: [

    // {
    //   src: 'https://connect.facebook.net/id_ID/sdk.js#xfbml=1&version=v12.0&appId=787376388459905&autoLogAppEvents=1',
    //   async: true,
    //   defer: true,
    //   crossorigin: "anonymous",
    //   body: true
    // },
    // {
    //   src: 'https://apps.elfsight.com/p/platform.js',
    //   defer: 'true'
    // },
    {
      src:'https://widget.tochat.be/bundle.js?key=c6cf5ff0-f90b-4621-a675-e7d8a402a9fe',
      defer: true
    },
    // {
    //   src: 'https://cdn.popt.in/pixel.js?id=146a60e91cb08',
    //   async: 'true',
    //   id: 'pixel-script-poptin'
    // },
    {
        src: 'https://cdn.ampproject.org/v0/amp-ad-0.1.js',
        async: 'true',
        'custom-element': 'amp-ad'
    },
    // {
    //   src: 'https://platform-api.sharethis.com/js/sharethis.js#property=61606506ea6eca00151d8ce7&product=inline-reaction-buttons',
    //   async: 'true',
    //   type: 'text/javascript'
    // },
    // {
    //   src: 'https://cdn.onesignal.com/sdks/OneSignalSDK.js',
    //   async: '',
    // },
    // {
    //   src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
    //   async: true,
    //   data-ad-client: 'ca-pub-8390872078103831'
    // },
    // {
    //   src: 'https://cdn.onesignal.com/sdks/OneSignalSDK.js',
    //   async: null
    // },
    // {
    //   src: 'https://www.openstreetmap.org/assets/leaflet-src.js.map',
    //   type: 'text/html'
    // },

    // {
    //   src: 'https://cdn.tiny.cloud/1/36xbwrnfekuspwhfv02z1kuwy3sz4nbehpqkb3x7bh8tek86/tinymce/5/tinymce.min.js',
    //   type: 'text/javascript',
    //   referrerpolicy: 'origin'
    // },
    {
      src: 'https://cdn.jsdelivr.net/npm/chart.js@2.8.0',
      type: 'text/javascript'
    },
    // {
    //   src: '//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-609818ffd946e881',
    //   type: 'text/javascript'
    // },
    {
      src: '/assets/vendor/jquery/jquery.min.js',
      type: 'text/javascript'
    },
    {
      src: '/assets/vendor/bootstrap/js/bootstrap.bundle.min.js',
      type: 'text/javascript'
    },
    {
      src: '/assets/vendor/jquery.easing/jquery.easing.min.js',
      type: 'text/javascript'
    },
    // {
    //   src: '/assets/vendor/php-email-form/validate.js',
    //   type: 'text/javascript'
    // },
    {
      src: '/assets/vendor/waypoints/jquery.waypoints.min.js',
      type: 'text/javascript'
    },
    {
      src: '/assets/vendor/counterup/counterup.min.js',
      type: 'text/javascript'
    },
    {
      src: '/assets/vendor/isotope-layout/isotope.pkgd.min.js',
      type: 'text/javascript'
    },
    {
      src: '/assets/vendor/venobox/venobox.min.js',
      type: 'text/javascript'
    },
    {
      src: '/assets/vendor/owl.carousel/owl.carousel.min.js',
      type: 'text/javascript'
    },
    {
      src: '/assets/vendor/typed.js/typed.min.js',
      type: 'text/javascript'
    },
    {
      src: '/assets/vendor/aos/aos.js',
      type: 'text/javascript'
    },
    {
      src: '/assets/js/main.js',
      type: 'text/javascript'
    }
    ]
  },


   pwa: {
      meta: {
        title: 'Evoush::Official',
        author: 'Evoush',
        icon: true
      },
      manifest: {
        name: 'Evoush::Official',
        short_name: 'Evoush',
        start_url: '/',
        lang: 'en',
        display: 'standalone',
        theme_color: '#a2466c',
        background_color: '#f7f0eb',
        icons: [
          {
            "src":"/icon.png",
            "size":"256x256",
            "type":"image/png"
          },
          {
            "src":"/icon_192.png",
            "size":"192x192",
            "type": "image/png"
          },
          {
           "src":"/icon_180.png",
           "size":"180x180",
           "type": "image/png"
          },
          {
           "src":"/icon_152.png",
           "size":"152x152",
           "type": "image/png"
          },
          {
           "src":"/icon_144.png",
           "size":"144x144",
           "type": "image/png"
          },
          {
           "src":"/icon_128.png",
           "size":"128x128",
           "type": "image/png"
          },
          {
           "src":"/icon_64.png",
           "size":"64x64",
           "type": "image/png"
          },
          {
           "src":"/icon_48.png",
           "size":"48x48",
           "type": "image/png"
          }
        ]
      },
    },

   workbox: {
    workboxOptions: {
      skipWaiting: true
    },
    // offline: true,
    // offlineStrategy: 'NetworkFirst',
    // offlinePage: null,
    // offlineAssets: [],
    runtimeCaching: [
      {
        urlPattern: '/assets/vendor/bootstrap/css/.*',
        handler: 'cacheFirst',
        method: 'GET',
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
      },
      {
        urlPattern: '/assets/vendor/icofont/.*',
        handler: 'cacheFirst',
        method: 'GET',
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
      },
      {
        urlPattern: '/assets/vendor/boxicons/css/.*',
        method: 'GET',
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
      },
      {
        urlPattern: '/assets/vendor/venobox/.*',
        method: 'GET',
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
      },
      {
        urlPattern: '/assets/vendor/owl.carousel/assets/.*',
        method: 'GET',
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
      },
      {
        urlPattern: '/assets/vendor/aos/.*',
        method: 'GET',
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
      },
      {
        urlPattern: '/assets/css/.*',
        method: 'GET',
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
      },
      {
        urlPattern: '/assets/vendor/jquery/jquery.min.js',
        handler: 'cacheFirst',
        method: 'GET',
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
      },
      {
        urlPattern: '/assets/vendor/jquery.easing/jquery.easing.min.js',
        handler: 'cacheFirst',
        method: 'GET',
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
      },
    ]
  },
  router:{
    routes: [
      {
        name: 'event',
        path: '/event',
        component: 'pages/event/index.vue'
      }
    ]
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // {src: '~/plugins/updated', mode: 'client'},
    {src: '~/plugins/commerce'},
    {src: '~/plugins/nuxt-leaflet', mode: 'client', ssr: false},
    {src: '~/plugins/vue-tel-input', mode: 'client', ssr: false},
    {src: '~/plugins/vue-toastification', mode: 'client', ssr: false},
    {src: '~/plugins/pwa-update', mode: 'client', ssr: false},
    {src: '~/plugins/plugins_vue-chartjs', ssr: false},
    {src: '~/plugins/chart-line.js', ssr:false},
    {src: '~/plugins/vue-social-sharing'},
    {src: '~/plugins/bootstrap-vue'},
    {src: '~/plugins/disqus'},
    {src: '~/plugins/vue-tiny-mce', mode: 'client', ssr: false},
    // { src: '~/plugins/tawk'},
    // { src: "~/plugins/crisp.js", mode: "client" },
    { src: '~/plugins/vue-geolocation' },
    // { src: '~/plugins/vue-googlemaps'},
    { src: '~/plugins/vue-wysiwyg'},
    { src: '~/plugins/sweetalert2', ssr: false},
    { src: '~/plugins/axios', ssr: false},
    { src: '~/plugins/vue-mobile-detect'}
    // { src: '~/plugins/VuexPersist', ssr: false}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  '@nuxtjs/color-mode',
  '@nuxtjs/svg'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    // 'nuxt-vuex-localstorage',
    ['nuxt-gmaps', {
      key: 'AIzaSyBf-xwTi-Hagcxhz2T3bq1mPjUBhWXCvAU'
    }],
    '@nuxtjs/robots',
    '@nuxt/content',
    '@nuxtjs/axios',
    '@nuxtjs/onesignal',
    '@nuxtjs/pwa',
    ['@nuxtjs/google-tag-manager', { id: 'GTM-MGR7PP9' }],
    ['@nuxtjs/google-adsense',
      {id: 'ca-pub-8390872078103831'}
    ],
  ],

robots: {
  UserAgent: '*',
  Disallow: '/'
},

googleAnalytics: {
    id: 'G-C870SRQM92'
},

  oneSignal: {
    init: {
      appId: '15dc915b-fe30-4b1b-b635-63ab40fc8361',
      allowLocalhostAsSecureOrigin: true,
      // welcomeNotification: {
      //   disable: false
      // },
      // promptOptions: {
      //   slidedown: {
      //     prompts: [
      //       {
      //         type: "push", // current types are "push" & "category"
      //         autoPrompt: true,
      //         text: {
      //           /* limited to 90 characters */
      //           actionMessage: "We'd like to show you notifications for the latest news and updates.",
      //           /* acceptButton limited to 15 characters */
      //           acceptButton: "Allow",
      //           /* cancelButton limited to 15 characters */
      //           cancelButton: "Cancel"
      //         },
      //         delay: {
      //           pageViews: 1,
      //           timeDelay: 10
      //         }
      //       }
      //     ]
      //   }
      // }
    }
  },

  // markdown content
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css'
      }
    },
    nestedProperties: ['author.name']
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // baseURL: 'https://app.evoush.com/api'
    baseUrl: 'https://app.evoush.com/api',
    proxy: false
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  performance: {
    hints: false
  },
  vue: {
    config: {
      productionTip: false,
      devtools: true
    }
  }
}
