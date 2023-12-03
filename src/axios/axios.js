import axios from "axios";
import getCookie from "@/helpers/get-cookie";

const axiosOptions = {
    baseURL: "http://localhost:3000",
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "application/json",
    },
};

// // Pobierz token z ciasteczka
// const tokenJWT = getCookie("token");

// // Dodaj token do nagłówków, jeśli istnieje
// if (tokenJWT) {
//     axiosOptions.headers.Authorization = `Bearer ${tokenJWT}`;
// }

export const axiosApi = axios.create(axiosOptions);
