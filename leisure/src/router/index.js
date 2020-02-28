import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Galery from '../views/Galery.vue'
import Faq from '../views/Faq.vue'
import Transportation from '../views/Transportation.vue'
import Tour from '../views/Tour.vue'

import notFound from '../views/404.vue'


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
