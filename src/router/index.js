import Vue from 'vue'
import Router from 'vue-router'
import SignIn from '@/pages/SignIn'
import SignUp from '@/pages/SignUp'
import Main from '@/pages/Main'
import Search from '@/pages/Search'
import Item from '@/pages/Item'
import registItem from '@/pages/registItem'
import userRentaled from '@/pages/userRentaled'
import Dashboard from '@/pages/Dashboard'
import NotFound from '@/pages/NotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/auth/signin',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/auth/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/item/:it_id',
      name: 'Item',
      component: Item
    },
    {
      path: '/regist/item',
      name: 'registItem',
      component: registItem
    },
    {
      path: '/user/rentaled',
      name: 'userRentaled ',
      component: userRentaled
    },
    {
      path: '/user',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
