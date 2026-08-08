import apiClient from "../../../lib/axios/client";
import { API } from "../constants/api";

export const getCustomersApi = (filters = {}) =>
  apiClient.get(API.USERS.CUSTOMERS, { params: filters });
