import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import Radio from '../views/Radio.vue'
import child from '../views/child.vue'
import parent from '../views/parent.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/receiver',
    name: 'receiver',
    component:() =>
      import(/* webpackChunkName: "about" */ '../views/Receiver.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/radio',
    name: 'radio',
    component: Radio
  },
  {
    path: '/child',
    name: 'child',
    component: child
  },
  {
    path: '/parent',
    name: 'parent',
    component: parent
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
