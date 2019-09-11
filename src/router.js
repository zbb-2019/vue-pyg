import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home';
import Search from './components/Search';
import Shopcar from './components/Shopcar';
import Member from './components/Member';
import NewsList from './components/NewsList';
import NewsInfo from './components/NewsInfo';

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'Home',
            component: Home,
        },
        {
            path: '/home/news-list',
            name: 'NewsList',
            component: NewsList,
        },
        {
            path: '/home/news-info/:id',
            name: 'NewsInfo',
            component: NewsInfo,
        },
        {
            path: '/search',
            name: 'Search',
            component: Search
        },
        {
            path: '/shopcar',
            name: 'Shopcar',
            component: Shopcar
        },
        {
            path: '/member',
            name: 'Member',
            component: Member
        }
    ],
    linkActiveClass: 'mui-active'
})
