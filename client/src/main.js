// === DEFAULT / CUSTOM STYLE ===
// WARNING! always comment out ONE of the two require() calls below.
// 1. use next line to activate CUSTOM STYLE (./src/themes)
// require(`./themes/app.${__THEME}.styl`)
// 2. or, use next line to activate DEFAULT QUASAR STYLE
require(`quasar/dist/quasar.${__THEME}.css`)
// ==============================

// Uncomment the following lines if you need IE11/Edge support
// require(`quasar/dist/quasar.ie`)
// require(`quasar/dist/quasar.ie.${__THEME}.css`)

import Vue from 'vue'
import Quasar from 'quasar'
import router from './router'
import firebase from 'firebase'
import Vuefire from 'vuefire'

Vue.config.productionTip = false

const app = firebase.initializeApp({
  apiKey: 'AIzaSyBZnJm1nne_OU9f7EEZY62VBBpuYlBbLys',
  authDomain: 'wired-cogency-189606.firebaseapp.com',
  databaseURL: 'https://wired-cogency-189606.firebaseio.com',
  projectId: 'wired-cogency-189606',
  storageBucket: 'wired-cogency-189606.appspot.com',
  messagingSenderId: '590843646533'
})

let db = app.database()
Vue.prototype.$base = db

Vue.use(Vuefire)
Vue.use(Quasar) // Install Quasar Framework

if (__THEME === 'mat') {
  require('quasar-extras/roboto-font')
}
import 'quasar-extras/material-icons'
// import 'quasar-extras/ionicons'
// import 'quasar-extras/fontawesome'
// import 'quasar-extras/animate'

Quasar.start(() => {
  /* eslint-disable no-new */
  new Vue({
    el: '#q-app',
    router,
    render: h => h(require('./App').default)
  })
})
