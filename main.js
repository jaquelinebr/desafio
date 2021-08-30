import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App),

  mounted() {
    this.axios.get('https://api-homolog.hauseful.com/v1/realties')
    .then(response =>(this.info = response))
  }
}).$mount('#app')
