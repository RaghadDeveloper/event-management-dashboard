import type { AxiosInstance, InternalAxiosRequestConfig } from "axios";
import { getAccessToken } from "./auth";

export const setupInterceptors = (client: AxiosInstance) => {
  client.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = getAccessToken();

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    },

    (error) => Promise.reject(error),
  );

  client.interceptors.response.use(
    (response) => response,

    (error) => {
      return Promise.reject(error);
    },
  );
};
