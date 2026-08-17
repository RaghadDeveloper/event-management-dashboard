import { useQuery } from "@tanstack/react-query";
import { getPayoutsApi } from "../api";
import type { Filter } from "../types";
import { useSearchParams } from "react-router";

export const usePayouts = () => {
  const [searchParams] = useSearchParams();

  const filters: Filter = {};

  const from_date = searchParams.get("from_date");
  const to_date = searchParams.get("to_date");

  if (from_date) filters.from_date = from_date;
  if (to_date) filters.to_date = to_date;

  return useQuery({
    queryKey: ["payouts", filters],
    queryFn: async () => {
      const response = await getPayoutsApi(filters);
      return response.data.data;
    },
  });
};
