import axios from "axios";
import { getStorageValue } from "./storage";
import { showLoading, hideLoading } from "./loading";

const axiosInstance = axios.create({
  baseURL: "/api",
  timeout: 5000
});

axiosInstance.interceptors.request.use(
  (config) => {
    showLoading();
    const token = getStorageValue("token");
    if (token) {
      config.headers.setAuthorization(token);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    hideLoading();
    return response;
  },
  (error) => {
    console.error(error);
    hideLoading();
  }
);

const request = axiosInstance;
export default request;
