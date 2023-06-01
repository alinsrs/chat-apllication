import Vue from 'vue'
import VueRouter from 'vue-router'
import chatPage from "@/views/chatPage.vue";
import loginPage from "@/views/loginPage.vue";

Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      name: 'register',
      component: loginPage
    },
    {
    path: '/chat-room',
    name: 'chat',
    component: chatPage
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
