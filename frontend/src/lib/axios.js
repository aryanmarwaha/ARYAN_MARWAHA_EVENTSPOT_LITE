import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: import.meta.mode === "development" ? "http://localhost:5001/api" : "/api",
})