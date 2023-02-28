import axios, { AxiosRequestHeaders } from 'axios';

export const BASE_API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;

const axiosService = axios.create({
  baseURL: BASE_API_URL,
});

axiosService.interceptors.request.use(
  (config) => {
    config.headers = {
      'Content-Type': 'application/json',
      ...config.headers,
    } as AxiosRequestHeaders;

    config.data = {
      ...config.data,
    };

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosService.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return {
      error,
    };
  }
);

/**
 * get
 * @param {*} url
 * @param {*} params
 */
export const get = (url: string, params?: object | unknown) => {
  return axiosService({
    url: url,
    method: 'get',
    params,
  });
};
/**
 * post
 * @param {*} url
 * @param {*} data
 */
export const post = (url: string, data: object | unknown) => {
  return axiosService({
    url: url,
    method: 'post',
    data,
  });
};

export const fetchAPI = {
  get,
  post,
};
