import axios from 'axios';
import type { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse } from 'axios';
import { showLoading, hideLoading } from './loading';

// 创建axios实例
const requestInstance: AxiosInstance = axios.create({
  baseURL: 'http://localhost:5173/api', // api的base_url
  timeout: 2000, // 请求超时时间
  withCredentials: true,
});

// 请求拦截器
requestInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 在发送请求之前做些什么
    // showLoading();
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.set('Authorization', `Bearer ${token}`);
    }
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    console.error('请求错误:', error);
    return Promise.reject(error);
  },
);

// 响应拦截器
requestInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    // 对响应数据做点什么
    hideLoading();
    const res = response.data;
    if (res.code !== 200) {
      console.error('接口请求失败:', res.message);
      return Promise.reject(new Error(res.message || '接口请求失败'));
    }
    return res;
  },
  (error) => {
    // 对响应错误做点什么
    hideLoading();
    console.error('响应错误:', error);
    return Promise.reject(error);
  },
);

export default requestInstance;
