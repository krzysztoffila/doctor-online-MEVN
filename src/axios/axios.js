import axios from 'axios';
import Cookies from 'js-cookie';
import store from '@/store';

const axiosOptions = {
    withCredentials: true,
    baseURL: 'http://localhost:3000',
    headers: {
        'Access-Control-Allow-Origin': 'http://localhost:8080',
        'Content-type': 'application/json',
    },
};

const axiosApi = axios.create(axiosOptions);

axiosApi.interceptors.request.use(async (config) => {
    const tokenJWT = Cookies.get('token') || localStorage.getItem('token');
    if (tokenJWT) {
        config.headers.Authorization = `Bearer ${tokenJWT}`;
        store.dispatch('Auth/setIsAuthenticated', true);
    }
    return config;
});

export {
    axiosApi
};
