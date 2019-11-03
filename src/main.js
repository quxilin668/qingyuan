import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import BaiduMap from "vue-baidu-map"
import './assets/main.css'
Vue.use(BaiduMap, {
  ak: "kLAlRyA5P8QhrEkgiuncXHTyFt79Fbm3"
})
// 设备分辨
import '../server.js' ;


import VueWechatTitle from 'vue-wechat-title'
Vue.use(VueWechatTitle)

Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
