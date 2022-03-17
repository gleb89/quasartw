import { api } from 'boot/axios'

export const doLogin = async ({ commit, dispatch }, payload) => {
  await api.post('/users/token/', payload).then(response => {

    const token = response.data
    console.log(token);
    commit('setToken', token)
    api.defaults.headers.common.Authorization = 'Bearer ' + token.access
    dispatch('getMe', token)
  })
}

export const signOut = ({ commit }) => {
  api.defaults.headers.common.Authorization = ''
  commit('removeToken')
}

export const getMe = async ({ commit }, token) => {
  await api.get('/users/data/').then(response => {

    commit('setMe', response.data)
  })
}

export const init = async ({ commit, dispatch }) => {
  const token = localStorage.getItem('token')
  if (token) {
    await commit('setToken', JSON.parse(token))
    api.defaults.headers.common.Authorization = 'Bearer' + JSON.parse(token).access
    dispatch('getMe', JSON.parse(token))
  } else {
    commit('removeToken')
  }
}
