import Vue from 'vue'
import VueRouter from 'vue-router'
import Forside from '../views/Forside.vue'
import Priser from '../views/Priser.vue'
import Åbningstider from '../views/Åbningstider.vue'
import FindVej from '../views/FindVej.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'forside',
    component: Forside
  },
  {
    path: '/priser',
    name: 'priser',
    component: Priser
  },
  {
    path: '/åbningstider',
    name: 'åbningstider',
    component: Åbningstider
  },
  {
    path: '/findvej',
    name: 'findvej',
    component: FindVej
  }
]

const router = new VueRouter({
  routes
})

export default router
