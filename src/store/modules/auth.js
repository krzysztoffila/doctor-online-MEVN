import { axiosApi } from '@/axios/axios';

export default {
    namespaced: true,
    state: { isAuthenticated: false, },
    mutations: {
        setIsAuthenticated(state, value) {
            state.isAuthenticated = value;
        },
    },
    actions: {
        async logout({ commit }) {
            await axiosApi.post("/auth/logout");
            commit('setIsAuthenticated', false);
        },
    },
};
