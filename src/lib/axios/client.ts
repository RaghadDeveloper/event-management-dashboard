import axios from "axios";
import { setupInterceptors } from "./interceptors";
import { env } from "../../config/env";

const apiClient = axios.create({
  baseURL: env.API_URL,

  timeout: 10000,

  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

setupInterceptors(apiClient);

export default apiClient;
