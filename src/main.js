// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
// reqsuire('../node_modules/jquery/dist/jquery.js')
import '../semantic/dist/semantic.css'
// import '../semantic/dist/semantic.js'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: App },
  // { path: '/user/:id', component: User }

]
new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  }
})
