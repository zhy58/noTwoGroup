import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/about',
      component: require('../page/about.vue')
    },
    {
      path: '/xx',
      component: require('../page/xx.vue')
    }
  ]
})
