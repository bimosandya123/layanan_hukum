import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import Message from '../views/Message.vue'
import SearchBidang from '../views/SearchBidang.vue'
import ProfilePengacara from '../views/ProfilePengacara.vue'
import SearchPengacara from '../views/SearchPengacara.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/message',
    name: 'Message',
    component: Message
  },
  {
    path: '/SearchBidang',
    name: 'SearchBidang',
    component: SearchBidang
  },
  {
    path: '/ProfilePengacara/:id',
    name: 'ProfilePengacara',
    component: ProfilePengacara,
    props: true
  },
  {
    path: '/SearchPengacara',
    name: 'SearchPengacara',
    component: SearchPengacara,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
