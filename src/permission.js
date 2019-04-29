import router from '@/router'
import store from '@/store/store'
// import {Message} from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'// progress bar style
import {getToken} from '@/utils/cookies' // getToken from cookie

NProgress.configure({showSpinner: false})// NProgress Configuration

// permission judge function
function hasPermission (menuList, permissionRoles) {
    console.log(menuList)
    console.log(permissionRoles)
    if (menuList.indexOf('adminsystem') >= 0) return true // adminsystem permission passed directly
    if (!permissionRoles) return true
    return menuList.some(permissionRoles)
}

const whiteList = ['/login', '/authredirect', '/regist']// no redirect whitelist

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title
    } else {
        document.title = '基于BIM的设计施工精益管理平台'
    }
    NProgress.start() // start progress bar
    if (getToken()) { // determine if there has token
        // has token
        if (to.path === '/login') {
            next({path: '/'})
            NProgress.done()
            // if current page is dashboard will not trigger	afterEach hook, so manually handle it
        } else {
            next()
            if (store.getters.menuList.length === 0) { // 判断当前用户是否已拉取完user_info信息
                store.dispatch('GetUserInfo').then(res => { // 拉取user_info
                    console.log(res)
                    // const roles = res // note: roles must be a array! such as: ['editor','develop']
                    store.dispatch('GenerateRoutes', res.content).then(() => { // 根据roles权限生成可访问的路由表
                        console.log(store.getters.addRouters)
                        router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
                        next({...to, replace: true}) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
                    })
                }).catch((err) => {
                    console.log(err)
                })
            } else {
                // 没有动态改变权限的需求可直接next() 删除下方权限判断 ↓
                if (hasPermission(store.getters.menuList, to.menu)) {
                    next()//
                } else {
                    next({
                        path: '/401',
                        replace: true,
                        query: {
                            noGoBack: true
                        }
                    })
                }
                // 可删 ↑
            }
        }
    } else {
        // has no token
        if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
            next()
        } else {
            next('/login') // 否则全部重定向到登录页
            NProgress.done() // if current page is login will not trigger afterEach hook, so manually handle it
        }
    }
})

router.afterEach(() => {
    NProgress.done() // finish progress bar
})
