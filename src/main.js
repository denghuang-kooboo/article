// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'utilities/axios'
import sessionStorage from 'utilities/local-storage'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import components from './register'
import store from 'store'
import { sync } from 'vuex-router-sync'

Vue.config.productionTip = false
Vue.use(iView)
components.map((item) => {
  Vue.use(item)
})

sync(store, router)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  ...App
})

Vue.use(sessionStorage, {
  namespace: 'Article.'
})
