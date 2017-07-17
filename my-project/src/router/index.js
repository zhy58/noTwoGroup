import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
// import about from '@/page/about'
import news from '@/page/news'
import Mint from 'mint-ui'

Vue.use(Mint)
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/about',
      component: require('../page/about.vue')
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: about
    // },
    {
      path: '/news',
      name: 'news',
      component: news
    }
  ]
})
