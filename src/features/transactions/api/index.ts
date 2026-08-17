import apiClient from "../../../lib/axios/client";
import { API } from "../constants/api";

export const getPaymentsApi = (filters = {}) =>
  apiClient.get(API.TRANSACTIONS.PAYMENTS, { params: filters });

export const getPayoutsApi = (filters = {}) =>
  apiClient.get(API.TRANSACTIONS.PAYOUTS, { params: filters });
