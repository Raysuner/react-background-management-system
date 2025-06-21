import axios from 'axios';
import type { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse } from 'axios';

// 创建axios实例
const service: AxiosInstance = axios.create({
  baseURL: '/api', // api的base_url
  timeout: 5000, // 请求超时时间
  withCredentials: true,
});

// 请求拦截器
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 在发送请求之前做些什么
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
service.interceptors.response.use(
  (response: AxiosResponse) => {
    // 对响应数据做点什么
    const res = response.data;
    if (res.code !== 200) {
      console.error('接口请求失败:', res.message);
      return Promise.reject(new Error(res.message || '接口请求失败'));
    }
    return res;
  },
  (error) => {
    // 对响应错误做点什么
    console.error('响应错误:', error);
    return Promise.reject(error);
  },
);

export default service;
