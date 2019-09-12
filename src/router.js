import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home';
import Search from './components/Search';
import Shopcar from './components/Shopcar';
import Member from './components/Member';
import NewsList from './components/NewsList';
import NewsInfo from './components/NewsInfo';
import SharePicture from './components/SharePicture';
import SharePictureInfo from './components/SharePictureInfo';

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {path: '/', redirect: '/home'},
        {path: '/home', name: 'Home', component: Home,},
        {path: '/home/news-list', name: 'NewsList', component: NewsList,},
        {path: '/home/news-info/:id', name: 'NewsInfo', component: NewsInfo,},
        {path: '/home/share-picture', name: 'SharePicture', component: SharePicture,},
        {path: '/home/share-picture-info/:id', name: 'SharePictureInfo', component: SharePictureInfo,},
        {path: '/search', name: 'Search', component: Search},
        {path: '/shopcar', name: 'Shopcar', component: Shopcar},
        {path: '/member', name: 'Member', component: Member}
    ],
    linkActiveClass: 'mui-active'
})
