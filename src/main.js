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
import moment from 'moment';
import VuePreview from 'vue-preview'
Vue.use(MintUI);
Vue.use(VueResource);


// defalut install
Vue.use(VuePreview)

// with parameters install
// Vue.use(preview, {
//     mainClass: 'pswp--minimal--dark',
//     barsSize: {top: 0, bottom: 0},
//     captionEl: false,
//     fullscreenEl: false,
//     shareEl: false,
//     bgOpacity: 0.85,
//     tapToClose: true,
//     tapToToggleControls: false
// })

Vue.http.options.root = 'http://127.0.0.1:7001/';

//定义全局时间过滤器-格式化时间
Vue.filter('dateFromat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
    return moment(dataStr).format(pattern)
});

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
