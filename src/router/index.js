import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const router = new Router({
    // mode:'history',
    routes: [
        {
            path: '/',
            name: 'layout',
            component: () => import('@/views/layout/layout.vue')
        },
        {
            path: '/cesium',
            component: () => import('@/views/cesium/cesium.vue'),
            children: [
                {
                    path: '',
                    name: 'fengxian',
                    component: () => import('@/views/cesium/point/fengxian.vue')
                },
            ]
        },
    ]
})
export default router
