import axios from "axios";
import { setupInterceptors } from "./interceptors";
import { env } from "../../config/env";
import i18n from "../i18n";

const apiClient = axios.create({
  baseURL: env.API_URL,

  timeout: 10000,

  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "true",
  },
});

apiClient.interceptors.request.use((config) => {
  config.headers.set("Accept-Language", i18n.resolvedLanguage || "en");

  return config;
});

setupInterceptors(apiClient);

export default apiClient;
