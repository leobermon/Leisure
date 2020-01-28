import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../components/Index.vue'
import About from '../components/About.vue'
import Contact from '../components/Contact.vue'
import Faq from '../components/Faq.vue'


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
