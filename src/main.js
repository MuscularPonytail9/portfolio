import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import '@/scss/main.scss'

Vue.config.productionTip = false

VueScrollTo.setDefaults({
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})

new Vue({
  vuetify,
  render: h => h(App),
  router,
  VueScrollTo
}).$mount('#app')
