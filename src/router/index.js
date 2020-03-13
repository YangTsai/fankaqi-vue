import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/main'

Vue.use(Router)
// /**
//  * 重写路由的push方法
//  */
// const routerPush = Router.prototype.push
// Router.prototype.push = function push(location) {
//   return routerPush.call(this, location).catch(error => error)
// }

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      redirect: '/home',
      component: Main,
      children: [{
        path: '/home',
        component: resolve => require(['@/pages/home/home'], resolve)
      }, {
        path: '/echart',
        component: resolve => require(['@/pages/echart/echart'], resolve)
      }]
    }
  ]
})
