import apiClient from "../../../lib/axios/client";
import { API } from "../constants/api";

export const getCustomersApi = (filters = {}) =>
  apiClient.get(API.USERS.CUSTOMERS, { params: filters });

export const getProvidersApi = (filters = {}) =>
  apiClient.get(API.USERS.PROVIDERS, { params: filters });

export const banUserApi = (userId: string) =>
  apiClient.post(API.USERS.BAN.replace(":id", userId));

export const unbanUserApi = (userId: string) =>
  apiClient.post(API.USERS.UNBAN.replace(":id", userId));
