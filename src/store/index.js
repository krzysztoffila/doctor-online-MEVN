import Vue from 'vue'
import Vuex from 'vuex'
import Toast from '@/store/modules/toast-module'
import AuthUser from '@/store/modules/auth-module'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Toast,
    AuthUser
  }
})
