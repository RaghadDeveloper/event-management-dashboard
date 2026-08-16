import apiClient from "../../../lib/axios/client";
import { API } from "../constant/api";

export const getBookingsComplaintsApi = () =>
  apiClient.get(API.BOOKINGS_COMPLAINTS.ALL);

export const getBookingComplaintDetailsApi = (id: string) =>
  apiClient.get(API.BOOKINGS_COMPLAINTS.DETAILS.replace(":id", id));
