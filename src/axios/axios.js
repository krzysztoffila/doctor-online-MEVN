import axios from 'axios';
import Cookies from 'js-cookie';

const axiosOptions = {
    baseURL: 'http://localhost:3000',
    headers: {
        'Access-Control-Allow-Origin': 'http://localhost:8080',
        'Content-type': 'application/json',
    },
    withCredentials: true,
};

const axiosApi = axios.create(axiosOptions);

axiosApi.interceptors.request.use((config) => {
    const tokenJWT = Cookies.get('token');
    if (tokenJWT) {
        config.headers.Authorization = `Bearer ${tokenJWT}`;
    }
    return config;
});

export {
    axiosApi
};
