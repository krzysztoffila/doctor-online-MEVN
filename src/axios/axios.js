import axios from 'axios';
import getCookie from '@/helpers/get-cookie';

const axiosOptions = {
    baseURL: 'http://localhost:3000',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'application/json',
    },
    withCredentials: true,
};

const axiosApi = axios.create(axiosOptions);

axiosApi.interceptors.request.use((config) => {
    const tokenJWT = getCookie('token');
    if (tokenJWT) {
        config.headers.Authorization = `Bearer ${tokenJWT}`;
    }
    return config;
});

export {
    axiosApi
};
