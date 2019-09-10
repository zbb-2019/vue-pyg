import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
//按需导入mint-ui
// import {Header, Swipe, SwipeItem} from 'mint-ui';
//导入mui
import './lib/mui/css/mui.min.css';
import './lib/mui/css/icons-extra.css';
//导入vue-resource
import VueResource from 'vue-resource';

Vue.use(MintUI);
Vue.use(VueResource);

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
