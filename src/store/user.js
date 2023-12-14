import $api from "../utils/api"

const state = {
    token: null,
    username: null
}

const getters = {
   
}

const mutations = {
    updateToken: (state, payload) => {
        state.token = payload
    },
    updateUsername: (state, payload) => {
        state.username = payload
    },
    clearAll: (state) => {
        state.token = null
        state.username = null
        window.localStorage.removeItem("token")
    }
}


const actions = {
    login: async ({ state, commit, dispatch, getters }, payload) => {
        let { data } = await $api.login()
        if (data?.status) {
            // crypt token
            const token = window.btoa(data.token)
            // refresh state
            commit("updateToken", token)
            commit("updateUsername", data.username)
            // save token
            window.localStorage.setItem("token", token)
        }
        return data?.status
    },
    signout: async ({ state, commit, dispatch, getters }, payload) => {
        let { data } = await $api.signout()
        data?.status && commit("clearAll")
        return data?.status
    }
}
  
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}