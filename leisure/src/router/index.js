import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Faq from '../views/Faq.vue'


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
    path: '*',
    component: notFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
