import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/produtos/:marca',
    name: 'Produtos',
    // Carrega somente quando o component ou view for acessada
    component: () => import(/* webpackChunkName: "about" */ '../views/Produtos.vue')
  }
]
// mode: 'history' =  Remove tralha(#) da url
const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
