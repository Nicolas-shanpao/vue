import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/Layout'

const _import = require('./_import_' + process.env.NODE_ENV)
// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// 在开发环境中不用懒加载，因为懒加载太多页面将会导致Webpack热更新太慢，所以只在生产环境中使用懒加载
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */

/** note: submenu only apppear when children.length>=1
 * 子菜单仅在children.length>=1时适用
 *   detail see  https://panjiachen.github.io/vue-element-admin-site/#/router-and-nav?id=sidebar
 **/

/**
 * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
 *                                如果“hidden:true”，则不会在边栏中显示（默认值为false）
 * alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
 *                                如果设置为真，则始终显示根菜单，无论其子路由的长度如何。
 *                                if not set alwaysShow, only more than one route under the children
 *                                如果未设置AlwaysShow，则子级下只能有一个以上的路由
 *                                it will becomes nested mode, otherwise not show the root menu
 *                                它将成为嵌套模式，否则不显示根菜单
 * redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
 *                                如果redirect:noredirect，则在面包屑中不会重新定向
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 *                                名称由<keep alive>使用（必须设置！！！！）
 * meta : {
    roles: ['admin','editor']     will control the page roles (you can set multiple roles)
                                  将控制页面角色（可以设置多个角色）
    title: 'title'                the name show in submenu and breadcrumb (recommend set)
                                  子菜单和面包屑中显示的名称（推荐集）
    icon: 'svg-name'              the icon show in the sidebar,
                                  图标显示在侧边栏中
    noCache: true                 if fasle ,the page will no be cached(default is false)
                                  如果fasle，则不会缓存页面（默认值为false）
  }
 **/
export const constantRouterMap = [
    {path: '/login', component: _import('login/login'), hidden: true},
    {path: '/register', component: _import('login/register'), hidden: true},
    {path: '/404', component: _import('errorPage/404'), hidden: true},
    {
        path: '/',
        component: Layout,
        redirect: 'home',
        children: [
            {
                path: '',
                component: _import('home/home'),
                name: 'home',
                meta: {title: 'home', icon: 'home', noCache: true}
            },
            {path: '401', component: _import('errorPage/401'), hidden: true}
        ]
    }
]

export default new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({y: 0}),
    routes: constantRouterMap
})

export const asyncRouterMap = [
    {
        path: '/',
        component: Layout,
        children: [
            {
                path: 'learn',
                component: _import('learn/learn'),
                name: 'learn',
                menu: 'learn',
                meta: {title: 'learn', icon: 'icon', noCache: true}
            },
            {
                path: 'notes',
                component: _import('notes/notes'),
                name: 'notes',
                menu: 'notes',
                meta: {title: 'notes', icon: 'icon', noCache: true}
            },
            {
                path: 'msg',
                component: _import('msg/msg'),
                name: 'msg',
                menu: 'msg',
                meta: {title: 'msg', icon: 'icon', noCache: true}
            },
            {
                path: 'person',
                component: _import('person/person'),
                name: 'person',
                menu: 'person',
                meta: {title: 'person', icon: 'icon', noCache: true}
            },
            {
                path: 'saoyisao',
                component: _import('saoyisao/saoyisao'),
                name: 'saoyisao',
                menu: 'saoyisao',
                meta: {title: 'saoyisao', icon: 'icon', noCache: true}
            }
        ]
    },
    {path: '*', redirect: '/404', hidden: true}
]
