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

const tokenJWT = getCookie('token');

if (tokenJWT) {
    axiosOptions.headers.Authorization = `Bearer ${tokenJWT}`;
}

export const axiosApi = axios.create(axiosOptions)
