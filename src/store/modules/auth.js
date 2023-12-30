import {
    axiosApi
} from '@/axios/axios';

export default {
    namespaced: true,
    state: {
        isAuthenticated: false,
    },
    mutations: {
        setIsAuthenticated(state, value) {
            state.isAuthenticated = value;
        },
    },
    actions: {
        async logout({
            commit
        }) {
            try {
                await axiosApi.post("/auth/logout");
                commit('setIsAuthenticated', false);
            } catch (error) {
                console.error(error);
            }
        },
    },
};
