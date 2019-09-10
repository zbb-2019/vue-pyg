import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

//按需导入mint-ui
import {Header} from 'mint-ui';

Vue.component(Header.name, Header);

//导入mui
import './lib/mui/css/mui.min.css';

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
