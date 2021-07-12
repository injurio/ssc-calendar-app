import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import modal from "vue-js-modal";

Vue.config.productionTip = false;
Vue.use(modal, { dialog: true, dynamic: true });

new Vue({
  vuetify,
  router,
  render: h => h(App)
  store
}).$mount('#app')
