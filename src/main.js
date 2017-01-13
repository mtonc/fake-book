// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Newsfeed from './components/Newsfeed'
import User from './components/User'
import '../semantic/dist/semantic.css'
import '../semantic/dist/semantic.js'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'


Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [
  { path: '/', component: Newsfeed  },
  { path: '/user/:id', name: 'user', component: User  }
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: {
    App
  }
})
