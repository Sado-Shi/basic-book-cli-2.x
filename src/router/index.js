import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Pokemon from '../views/Pokemon.vue'
import PokemonList from '@/views/PokemonList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/pokemon',
    name: 'pokemon',
    component: PokemonList,
  },

  {
    path: '/pokemon/:id(\\d+)',
    component: Pokemon,
    props: route => ({ id: Number(route.params.id)})
  }
]

const router = new VueRouter({
  routes
})

export default router
