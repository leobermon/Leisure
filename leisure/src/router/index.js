import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../components/Index.vue'
import About from '../components/About.vue'
import Contact from '../components/Contact.vue'
import Galery from '../components/Galery.vue'
import Faq from '../components/Faq.vue'
import Transportation from '../components/Transportation.vue'
import Details from '../components/Details.vue'
import Tour from '../components/Tour.vue'

import notFound from '../components/404.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/About',
    name: 'about',
    component: About
  },
  {
    path: '/Faq',
    name: 'faq',
    component: Faq
  },
  {
    path: '/Contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/Galery',
    name: 'galery',
    component: Galery
  },
  {
    path: '/Transportation/:id',
    name: 'transportation',
    component: Transportation,
    props: true
  },
  {
    path: '/Tour/:id',
    name: 'tour',
    component: Tour,
    props: true
  },
  {
    path: '/Details/:idOrigin/:idDestination/:nPeople/:nDate',
    name: 'details',
    component: Details,
    props: true
  },
  {
    path: '*',
    component: notFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
  }
})

export default router
