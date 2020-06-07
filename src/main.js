import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en' // lang i18n
import 'element-ui/lib/theme-chalk/index.css';
import request from '@/utils/request'
import VCharts from 'v-charts'
import '@/styles/index.scss'
import '@/icons' // icon
import '@/permission' // permission control
import 'normalize.css/normalize.css'
Vue.config.productionTip = false
Vue.prototype.req = request
Vue.use(VCharts)
Vue.use(ElementUI, { locale })

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')