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
import Goods from './components/Goods';
import GoodsInfo from './components/GoodsInfo';
import GoodsGraphicIntroduction from './components/GoodsGraphicIntroduction';
import GoodsGoodsComments from './components/GoodsGoodsComments';

Vue.use(Router);

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
        {path: '/home/goods', name: 'Goods', component: Goods,},
        {path: '/home/goods-graphic-introduction/:id', name: 'GoodsGraphicIntroduction', component: GoodsGraphicIntroduction,},
        {path: '/home/goods-goods-comments/:id', name: 'GoodsGoodsComments', component: GoodsGoodsComments,},
        {path: '/home/goods-info/:id', name: 'GoodsInfo', component: GoodsInfo,},
        {path: '/search', name: 'Search', component: Search},
        {path: '/shopcar', name: 'Shopcar', component: Shopcar},
        {path: '/member', name: 'Member', component: Member}
    ],
    linkActiveClass: 'mui-active'
})
