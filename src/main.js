// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vum from './vum'
import axios from 'axios'
// import 'jquery-weui/dist/lib/weui.min.css'
// import 'jquery-weui/dist/css/jquery-weui.min.css'
import AwesomePicker from 'vue-awesome-picker'

// 设置axios为form-data
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.transformRequest = [function (data) {
  let ret = ''
  for (let it in data) {
    ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
  }
  return ret
}]
Vue.prototype.$axios = axios

Vue.use(AwesomePicker)

Vue.config.productionTip = false
Vue.use(Vum)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
