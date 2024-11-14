import axios, { InternalAxiosRequestConfig } from "axios";
import { getEnvVariables } from "../helpers";

const { VITE_API_URL } = getEnvVariables();

const clashesApi = axios.create({
  baseURL: VITE_API_URL,
});

clashesApi.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = token;
  }

  return config;
});

export default clashesApi;
