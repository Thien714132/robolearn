/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosRequestConfig } from 'axios';
import { AccessTokenInterceptor, LogInterceptor } from './Interceptors';

const getInstance = () => {
  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 30000,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  instance.interceptors.request.use(
    AccessTokenInterceptor.addAccessToken,
    AccessTokenInterceptor.onRejected,
  );
  instance.interceptors.request.use(
    LogInterceptor.requestLog,
    LogInterceptor.requestError,
  );
  instance.interceptors.response.use(
    LogInterceptor.responseLog,
    LogInterceptor.responseError,
  );
  return instance;
};
const networkInstance = { instance: getInstance() };

const post = async (
  urlApi: string,
  params: any = null,
  config?: AxiosRequestConfig,
) => {
  return networkInstance.instance.post(urlApi, params, config);
};
const patch = async (
  urlApi: string,
  params: any = null,
  config?: AxiosRequestConfig,
) => {
  return networkInstance.instance.patch(urlApi, params, config);
};
const postFormData = async (urlApi: string, params: any) => {
  return networkInstance.instance.post(urlApi, params, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
const deleteMethod = async (urlApi: string, data: any = null) => {
  return networkInstance.instance.delete(urlApi, { data: data });
};

const get = async (
  urlApi: string,
  data: any = null,
  config?: AxiosRequestConfig,
) => {
  return networkInstance.instance.get(urlApi, { params: data, ...config });
};

export const NetWork = {
  get,
  post,
  postFormData,
  patch,
  deleteMethod,
};
