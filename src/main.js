import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'lib-flexible/flexible'
import '@/assets/css/global.css'
import Clipboard from 'clipboard'
import VueClipboard from 'vue-clipboard2'
import './assets/font/font.css'
// import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
// import VueAwesomeSwiper from 'vue-awesome-swiper'
// Vue.use(VueAwesomeSwiper)

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);



Vue.config.productionTip = false


import {
  Divider,
  Checkbox,
  CheckboxGroup,
  Icon,
  Card,
  Button,
  Toast,
  Dialog,
  Tab, 
  Tabs,
  Collapse,
   CollapseItem,
   Image
} from 'vant';
import 'amfe-flexible'
import VConsole from 'vconsole'

Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Icon);
Vue.use(Card);
Vue.use(Toast);
Vue.use(Button)
Vue.use(Dialog)
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Image)
Vue.use(VueClipboard)
Vue.use(Divider);
// Vue.use(Swiper, SwiperSlide)
// new Vconsole();

// Vue.use(Clipboard)
Vue.prototype.Clipboard = Clipboard;
Vue.prototype.$dialog = Dialog


// 注册一个全局自定义指令 `v-focus 要定义在主JS创建Vue对象之前`
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')