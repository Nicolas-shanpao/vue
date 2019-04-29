const tools = {
    state: {
        isShow: false
    },

    mutations: {
        showBar (state) {
            state.isShow = true
        },
        hideBar (state) {
            state.isShow = false
        }
    },

    actions: {
        showSideBar ({commit}) {
            commit('showBar')
        },
        hideSideBar ({commit}) {
            commit('hideBar')
        }
    }
}

export default tools
