import apiClient from "../../../lib/axios/client";
import { API } from "../constant/api";
import type { ResolveComplaintData } from "../types";

export const getBookingsComplaintsApi = () =>
  apiClient.get(API.BOOKINGS_COMPLAINTS.ALL);

export const getBookingComplaintDetailsApi = (id: string) =>
  apiClient.get(API.BOOKINGS_COMPLAINTS.DETAILS.replace(":id", id));

export const resolveComplaintApi = ({
  id,
  data,
}: {
  id: string;
  data: ResolveComplaintData;
}) => apiClient.post(API.BOOKINGS_COMPLAINTS.RESOLVE.replace(":id", id), data);

export const refundCustomerApi = ({
  payment_id,
  amount,
}: {
  payment_id: string;
  amount: number;
}) => apiClient.post(API.BOOKINGS_COMPLAINTS.REFUND, { payment_id, amount });
