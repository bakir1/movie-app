import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Shows from '../views/Shows.vue'
import MovieDetail from '../views/MovieDetail.vue'
//route ili putanje za trazene stranice
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/shows',
    name: 'Shows',
    component: Shows
  },
  {
    path: '/movie',
    name: 'Movie Detail',
    component: MovieDetail
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
