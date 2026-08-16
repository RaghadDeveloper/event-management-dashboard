import { useQuery } from "@tanstack/react-query";
import { getBookingsApi } from "../api";
import { useSearchParams } from "react-router";
import type { BookingsFilter } from "../types";

export const useBookings = () => {
  const [searchParams] = useSearchParams();

  const filters: BookingsFilter = {};

  const status = searchParams.get("status");

  if (status && status !== "all") filters.status = status;

  return useQuery({
    queryKey: ["bookings", filters],
    queryFn: async () => {
      const response = await getBookingsApi(filters);
      return response.data.data;
    },
  });
};
