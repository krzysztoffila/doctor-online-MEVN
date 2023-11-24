import Vue from "vue";
import Vuex from "vuex";
import Toast from "@/store/modules/toast-module";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Toast,
  },
});
