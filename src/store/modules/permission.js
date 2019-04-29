import { asyncRouterMap, constantRouterMap } from '@/router'

/**
 * 判断用户是否拥有此菜单
 * @param menus
 * @param route
 */
function hasPermission (menus, route) {
    if (route.menu) {
        /*
        * 如果这个路由有menu属性,就需要判断用户是否拥有此menu权限
        */
        return menus.indexOf(route.menu) > -1
    } else {
        return true
    }
}

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param asyncRouterMap
 * @param menuList
 */
function filterAsyncRouter (asyncRouterMap, menuList) {
    console.log(asyncRouterMap)
    const accessedRouters = asyncRouterMap.filter(route => {
        // filter,js语法里数组的过滤筛选方法
        if (hasPermission(menuList, route)) {
            if (route.children && route.children.length) {
                // 如果这个路由下面还有下一级的话,就递归调用
                route.children = filterAsyncRouter(route.children, menuList)
                // 如果过滤一圈后,没有子元素了,这个父级菜单就也不显示了
                return (route.children && route.children.length)
            }
            return true
        }
        return false
    })
    return accessedRouters
}

const permission = {
    state: {
        routers: constantRouterMap,
        addRouters: []
    },
    mutations: {
        SET_MENULIST: (state, routers) => {
            console.log(routers)
            state.addRouters = routers
            state.routers = constantRouterMap.concat(routers)
            console.log(state.routers)
        }
    },
    actions: {
        GenerateRoutes ({commit}, data) {
            return new Promise(resolve => {
                const menuList = data.menuList
                const id = data.userid
                let accessedRouters
                if (id === 0) {
                    accessedRouters = asyncRouterMap
                } else {
                    accessedRouters = filterAsyncRouter(asyncRouterMap, menuList)
                }
                commit('SET_MENULIST', accessedRouters)
                resolve()
            }
            )
        }
    }
}

export default permission
