import { useQuery } from "@tanstack/react-query";
import { getBookingsChartApi } from "../api";

export const useBookingsChart = () => {
  return useQuery({
    queryKey: ["bookings-chart"],
    queryFn: async () => {
      const response = await getBookingsChartApi();
      return response.data.data;
    },
  });
};
