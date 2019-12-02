export default {
  namespaced: true,
  state: {
    signShow: false
  },
  getters: {
    getSignShow: state => state.signShow
  },
  mutations: {
    SET_SIGNSHOW(state, show) {
      state.signShow = show
    }
  }
}