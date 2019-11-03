import Vue from 'vue'
import Home from './views/Home.vue'

import Power from './views/Reg.vue'
import Case from './views/Works.vue'
import Contact from './views/Contact.vue'
import ChingCourt from './views/User.vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home',
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/Case/:id?',
      name: 'Case',
      component: Case,
      meta: {
        title: "作品案列",
        keepAlive: true
      }
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
      meta: {
        title: "联系我们",
        keepAlive: true
      }

    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        title: "上海庆苑",
        keepAlive: true
      }
    },

    {
      path: '/ChingCourt/:id?',
      name: 'ChingCourt',
      component: ChingCourt,
      meta: {
        title: "关于庆苑",
        keepAlive: true
      }
    },
    {
      path: '/Power/:id?',
      name: 'Power',
      component: Power,
      meta: {
        title: "集团力量",
        keepAlive: true
      }
    }
  ],
  scrollBehavior(to, from, savedPosition) { return { x: 0, y: 0 } }
})
