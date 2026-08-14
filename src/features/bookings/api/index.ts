import apiClient from "../../../lib/axios/client";
import { API } from "../constant/api";

export const getBookingsApi = (filters = {}) =>
  apiClient.get(API.BOOKINGS.ALL, { params: filters });
