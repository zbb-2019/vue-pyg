import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/home';
import Search from './components/search';
import Shopcar from './components/shopcar';
import Member from './components/member';

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/search',
            name: 'search',
            component: Search
        },
        {
            path: '/shopcar',
            name: 'shopcar',
            component: Shopcar
        },
        {
            path: '/member',
            name: 'member',
            component: Member
        }
    ],
    linkActiveClass: 'mui-active'
})
