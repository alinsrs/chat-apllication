import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueSocketIO from 'vue-socket.io';
import SocketIO from 'socket.io-client';

const socketInstance = SocketIO('http://localhost:3000');

Vue.use(
    new VueSocketIO({
      debug: true,
      connection: socketInstance,
    }),
);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')
