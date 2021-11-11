import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import summercup from '../views/summercup2021.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/summercup2021',
    name: 'summercup2021',
    component: summercup
  }
]

const router = new VueRouter({
  routes
})

export default router
