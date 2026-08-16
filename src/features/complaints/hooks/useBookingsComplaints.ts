import { useQuery } from "@tanstack/react-query";
import { getBookingsComplaintsApi } from "../api";

export const useBookingsComplaints = () => {
  return useQuery({
    queryKey: ["bookings-complaints"],
    queryFn: async () => {
      const response = await getBookingsComplaintsApi();
      return response.data.data;
    },
  });
};
