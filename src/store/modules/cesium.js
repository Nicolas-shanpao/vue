const cesium = {
    state: {
        viewer:''
    },
    mutations: {
        SET_VIEWER: (state, opt) => {
            state.viewer = opt
        }
    },
    actions: {
        toggleSideBar ({commit}) {
            commit('TOGGLE_SIDEBAR')
        },
    }
}

export default cesium
