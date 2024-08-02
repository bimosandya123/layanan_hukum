import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import Message from '../views/Message.vue'
import SearchBidang from '../views/SearchBidang.vue'
import ProfilePengacara from '../views/ProfilePengacara.vue'
import SearchPengacara from '../views/SearchPengacara.vue'
import ReviewPengacara from '../views/ReviewPengacara.vue'
import order from '../views/order.vue'
import Notif from '../views/Notif.vue'
// ========== ARTIKLE ==========
import TambahArtikle from '../views/author/TambahArtikle.vue'
import Draft from '../views/author/Draft.vue'
import LihatArtikle from '../views/author/LihatArtikle.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/message',
    name: 'Message',
    component: Message,
    props: true
  },
  {
    path: '/notif',
    name: 'Notif',
    component: Notif,
    props: true
  },
  {
    path: '/SearchBidang',
    name: 'SearchBidang',
    component: SearchBidang,
    props: true
  },
  {
    path: '/ProfilePengacara/:id',
    name: 'ProfilePengacara',
    component: ProfilePengacara,
    props: true
  },
  {
    path: '/order/:id',
    name: 'order',
    component: order,
    props: true
  },
  {
    path: '/ReviewPengacara/:id',
    name: 'ReviewPengacara',
    component: ReviewPengacara,
    props: true
  },
  {
    path: '/SearchPengacara',
    name: 'SearchPengacara',
    component: SearchPengacara,
    props: true
  },
  // ========== ARTIKLE ==========
  {
    path: '/TambahArtikle',
    name: 'TambahArtikle',
    component: TambahArtikle,
    props: true
  },
  {
    path: '/Draft',
    name: 'Draft',
    component: Draft,
    props: true
  },
  {
    path: '/LihatArtikle/:id',
    name: 'LihatArtikle',
    component: LihatArtikle,
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
