import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import DynamicComponents from '@/components/dynamicComponents'
import EchartsMap from '@/components/echartMap'
import NextTick from '@/components/nextTick'
import VuexTest from '@/components/vuex'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'app',
      component: Home,
      redirect: '/nextTick',
      children: [
        {
          path: '/echartsMap',
          name: 'EchartsMap',
          component: EchartsMap
        },
        {
          path: '/nextTick',
          name: 'NextTick',
          component: NextTick
        },
        {
          path: '/dynamicComponents',
          name: 'DynamicComponents',
          component: DynamicComponents
        },
        {
          path: '/vuexTest',
          name: 'VuexTest',
          component: VuexTest
        }
      ]
    },
  ]
})
export default router