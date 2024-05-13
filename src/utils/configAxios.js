import axios from "axios";

const axiosMusic = axios.create({
    baseURL: "https://gift-music-backend-production.up.railway.app",
})

axiosMusic.interceptors.request.use((config) => {
    config.headers = {
        ...config.headers,
        Authorization: `JWT ${JSON.parse(localStorage.getItem("user-gm"))?.token}`
    };
    return config
});

export {
    axiosMusic
};