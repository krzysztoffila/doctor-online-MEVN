export default {
    namespaced: true,
    state: { isAuthenticated: false, },
    mutations: {
        setIsAuthenticated(state, value) {
            state.isAuthenticated = value;
        },
    },
    actions: {},
};
