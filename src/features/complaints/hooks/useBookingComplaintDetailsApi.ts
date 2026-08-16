import { useQuery } from "@tanstack/react-query";
import { getBookingComplaintDetailsApi } from "../api";

export const useBookingDetails = (complaintId: string) => {
  return useQuery({
    queryKey: ["booking-complaint-details", complaintId],
    queryFn: async () => {
      const response = await getBookingComplaintDetailsApi(complaintId);
      return response.data.data;
    },
  });
};
