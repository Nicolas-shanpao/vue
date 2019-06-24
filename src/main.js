import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store/store'
import Cesium from 'cesium/Cesium'
// noinspection ES6UnusedImports
import widget from 'cesium/Widgets/widgets.css'
import '@/plugins/element.js'
import '@/style/css/main.css'
import request from '@/api/request'
// import hasPermission from '@/utils/hasPermission'
import VueI18n from 'vue-i18n'
import messages from '@/js/lang'
// 全局注册筛选器
import * as filters from '@/filters' // 全局引入过滤器

// import './permission' // permission control

// Vue.prototype.hasPerm = hasPermission
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

Vue.use(Cesium, {
    // cesiumPath 是指引用的Cesium.js路径，如
    // 项目本地的Cesium Build包，vue项目需要将Cesium Build包放static目录：
    // cesiumPath: /static/Cesium/Cesium.js
    // 个人在线Cesium Build包：
    // cesiumPath: 'https://zouyaoji.top/vue-cesium/statics/Cesium/Cesium.js'
    // 个人在线SuperMap Cesium Build包（在官方基础上二次开发出来的）：
    // cesiumPath: 'https://zouyaoji.top/vue-cesium/statics/SuperMapCesium/Cesium.js'
    // 官方在线Cesium Build包，有CDN加速，推荐用这个：
    cesiumPath: 'https://unpkg.com/cesium/Build/Cesium/Cesium.js',
    // 指定Cesium.Ion.defaultAccessToken，使用Cesium ion的数据源需要到https://cesium.com/ion/申请一个账户，获取Access Token。不指定的话可能导致Cesium在线影像加载不了
    accessToken: ''
})

Vue.prototype.request = request
Vue.config.productionTip = false

new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app')
