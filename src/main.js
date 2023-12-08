import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

axios.defaults.baseURL = "http://localhost:3000";

Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

const token = localStorage.getItem("token");

if (token) {
    store.commit("Auth/setIsAuthenticated", true);
}

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
