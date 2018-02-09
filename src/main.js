// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

// use socketio
import VueSocketio from 'vue-socket.io';
Vue.use( VueSocketio, 'http://socketserver.com:1923' ); 

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Element from 'element-ui';

Vue.use(Element, { size: 'small' });
Vue.use( ElementUI );

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
