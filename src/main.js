import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import MyStore from './store'
import './index.css'


Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store(MyStore);

new Vue({
  render: h => h(App),
  store: store,
}).$mount('#app')
