import axios, { type AxiosInstance } from 'axios';
import { BASE_URL } from "./apiEndpoint.ts";

export const axiosConfig: AxiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    }
});

// list of endpoints that do not require autherization header
const excludedEndpoints: string[] = ["/login", "/register", "/status", "/activate", "/health"];

// request interceptor
axiosConfig.interceptors.request.use((config) => {
    const shouldSkipToken = excludedEndpoints.some((endpoint) => {
        config.url?.includes(endpoint)
    });

    if(!shouldSkipToken) {
        const accessToken = localStorage.getItem("token");
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }   
    }

    return config;
}, (error) => {
    return Promise.reject(error)
});

// response interceptor
axiosConfig.interceptors.response.use((response) => {
    return response;
}, (error) => { 
    if(error.response) {
        if(error.response.status === 401) {
            // redirect back to login
            window.location.href = "/login";
        } else if (error.response.status === 500) {
            // if internal server error 
            console.error("Server error! Please try again later.");
        }
    } else if(error.code === "ECONNABORTED") {
        // if time out
        console.error("Request timeout! Please try again later.");
    }
    return Promise.reject(error);
});