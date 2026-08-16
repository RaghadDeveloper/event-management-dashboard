import apiClient from "../../../lib/axios/client";
import { API } from "../constant/api";

export const getBookingsApi = (filters = {}) =>
  apiClient.get(API.BOOKINGS.ALL, { params: filters });

export const getBookingDetailsApi = (id: string) =>
  apiClient.get(API.BOOKINGS.DETAILS.replace(":id", id));
