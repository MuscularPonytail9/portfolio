import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import '@/scss/main.scss'

new Vue({
  vuetify,
  render: h => h(App),
  router,
}).$mount('#app')

// const Vue = require('vue')
// const VueScrollTo = require('vue-scrollto')
// Vue.use(VueScrollTo)
