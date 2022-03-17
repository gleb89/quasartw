import { api } from 'boot/axios'

const state = () => {
  return {
    shops: [],
  }
}

const mutations = {
  setshops(state, shops) {
    state.shops = shops

  },
}

const actions = {
  async fetchPosts ({ commit }) {
    return await api.get('/status/').then(({ data }) => {
      console.log(data);
      commit('setshops', data)
    })
  }
}

const getters = {
  shops: s => s.shops,
}
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
