import Vue from 'vue'
// 引入fastclick包
import FastClick from 'fastclick'
// 引入全局swiper组件
import VueAwesomeSwiper from 'vue-awesome-swiper'



import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'
import 'swiper/dist/css/swiper.css'
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
FastClick.attach(document.body);//使用fastclick,解决300ms延时问题
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
