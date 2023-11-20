import getCookie from '@/helpers/get-cookie';
import setCookie from '@/helpers/set-cookie.js'
import router from '@/router';
export default {
  namespaced: true,
  state: {
    token: null,
    user: {},
    password: "",
  },
  getters: {
    isLogged(state) {
      return Object.keys(state.user).length > 0 && state.token !== null;
    },
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setUser(state, user) {
      state.user = user;
    },
    setPassword(state, password) {
      state.password = password;
    }
  },
  actions: {
    register({
      commit,
      state
    }, registerData) {
      if (registerData && registerData.token) {
        commit("setToken", registerData.token);
        commit("setUser", registerData.user);
        setCookie("token", state.token, 1000000);
        setCookie("user", JSON.stringify(state.user), 1000000);
      } else {
        console.error("Nieprawidłowa struktura registerData:", registerData);
      }
    },
  }
}
