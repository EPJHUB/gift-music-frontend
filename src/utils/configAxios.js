import axios from "axios";

const axiosMusic = axios.create({
    baseURL: "https://gift-music-backend-production.up.railway.app",
})

export {
    axiosMusic
};