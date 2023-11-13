export default {
  namespaced: true,
  state: {
    toasts: []
  },
  mutations: {
    addToast(state, toast) {
      state.toasts.push(toast)
    }
  }
}
