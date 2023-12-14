import $api from "../utils/api"

const state = {
    userList: []
}

const getters = {
   
}

const mutations = {
    update: (state, payload) => {
        state.userList = payload
    }
}


const actions = {
    getList: async ({ state, commit, dispatch, getters }, payload) => {
        const { data } = await $api.getUserList()
        data?.status && commit("update", data?.list)
    }
};
  
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}