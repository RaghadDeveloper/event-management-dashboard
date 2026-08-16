import { useQuery } from "@tanstack/react-query";
import { getBookingDetailsApi } from "../api";

export const useBookingDetails = (bookingId: string) => {
  return useQuery({
    queryKey: ["booking-details", bookingId],
    queryFn: async () => {
      const response = await getBookingDetailsApi(bookingId);
      return response.data.data;
    },
  });
};
