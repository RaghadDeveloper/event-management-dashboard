import { useQuery } from "@tanstack/react-query";
import { getBookingComplaintDetailsApi } from "../api";

export const useComplaintDetails = (complaintId: string) => {
  return useQuery({
    queryKey: ["complaint-details", String(complaintId)],
    queryFn: async () => {
      const response = await getBookingComplaintDetailsApi(complaintId);
      return response.data.data;
    },
  });
};
