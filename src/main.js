// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Hello from './components/Hello'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter ({
  routes: [
    {path: '/', component: Hello},
    {path: '*', redirect: '/' }
  ],
  mode: 'history'
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
   template: '<App/>',
   components: { App }
})
