import getCookie from "@/helpers/get-cookie";
import setCookie from "@/helpers/set-cookie.js";
import router from "@/router";
import { axiosApi } from "@/axios/axios";
export default {
    namespaced: true,
    state: {
        token: null,
        user: {},
        password: "",
    },
    getters: {
        isLogged(state) {
            return (
                state.user &&
                Object.keys(state.user).length > 0 &&
                state.token !== null
            );
        },
    },
    mutations: {
        setUser(state, user) {
            console.log("Ustawiono użytkownika:", user);
            state.user = user;
        },

        setToken(state, token) {
            console.log("Ustawiono token:", token);
            state.token = token;
        },

        clearUser(state) {
            state.user = {};
            state.token = null;
        },
        updateUser(state, user) {
            state.user = user;
        },
    },
    actions: {
        async fetchUser({ commit }) {
            try {
                const response = await axiosApi.get("/auth/user");
                const user = response.data;
                commit("updateUser", user);
            } catch (error) {
                console.error("Błąd pobierania danych użytkownika:", error);
            }
        },
        register({ commit, state }, registerData) {
            if (registerData && registerData.token) {
                commit("setToken", registerData.token);
                commit("setUser", registerData.user);
                setCookie("token", state.token, 1000000);
                setCookie("user", JSON.stringify(state.user), 1000000);
            } else {
                console.error(
                    "Nieprawidłowa struktura registerData:",
                    registerData
                );
            }
        },
        async loginUser({ commit, dispatch }, loginData) {
            try {
                const response = await axiosApi.post("/auth/login", loginData);
                const token = response.data?.token;

                console.log("Token po zalogowaniu:", token);

                commit("setToken", token);
                const user = response.data?.user || {};
                commit("setUser", user);

                setCookie("token", token, 1000000);

                // Pobierz aktualne dane użytkownika
                dispatch("fetchUser");

                return response.data;
            } catch (error) {
                console.error("Błąd logowania:", error);
                throw error;
            }
        },
        clearUser({ commit }) {
            commit("clearUser");
        },
        async logout({ commit }) {
            commit("clearUser");
            setCookie("token", "", -1);
            setCookie("user", "", -1);
            commit(
                "Toast/addToast",
                {
                    message: "Wylogowano!",
                },
                {
                    root: true,
                }
            );
            router.push("/login");
        },
    },
};
