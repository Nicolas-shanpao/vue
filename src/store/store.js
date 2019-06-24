import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import tools from './modules/tools'
import tagsView from './modules/tagsView'
// import permission from './modules/permission'
import cesium from './modules/cesium'
import getters from './getters'

Vue.use(Vuex)
//  数据附着在state
const state = {
    headShow: true,
    linkList: []
}

const store = new Vuex.Store({
    state,
    getters,
    modules: {
        user,
        tools,
        tagsView,
        // permission,
        cesium,
    }
})
if (module.hot) {
    module.hot.accept([
        './getters',
        './modules/user',
        './modules/tools',
        './modules/tagsView',
        // './modules/permission',
        './modules/cesium',
    ], () => {
        store.hotUpdate({
            getters: require('./getters').default,
            modules: {
                user: require('./modules/user').default,
                tools: require('./modules/tools').default,
                tagsView: require('./modules/tagsView').default,
                // permission: require('./modules/permission').default,
                cesium: require('./modules/cesium').default
            }
        })
    })
}

export default store
