import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store/store'
import '@/plugins/element.js'
import '@/style/css/main.css'
import request from '@/api/request'
import hasPermission from '@/utils/hasPermission'
import VueI18n from 'vue-i18n'
import messages from '@/js/lang'
// 全局注册筛选器
import * as filters from '@/filters' // 全局引入过滤器

import './permission' // permission control

Vue.prototype.hasPerm = hasPermission
// 全局注册每个过滤器
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})

Vue.use(VueI18n)
const i18n = new VueI18n({
    locale: localStorage.getItem('locale') || 'cn', // 语言标识
    messages: {
        'cn': messages.cn.message,
        'en': messages.en.message
    }
})

Vue.prototype.request = request
Vue.config.productionTip = false

new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app')
