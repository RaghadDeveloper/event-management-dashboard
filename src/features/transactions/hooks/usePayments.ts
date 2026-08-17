import { useQuery } from "@tanstack/react-query";
import { getPaymentsApi } from "../api";
import { useSearchParams } from "react-router";
import type { Filter } from "../types";

export const usePayments = () => {
  const [searchParams] = useSearchParams();

  const filters: Filter = {};

  const from_date = searchParams.get("from_date");
  const to_date = searchParams.get("to_date");

  if (from_date) filters.from_date = from_date;
  if (to_date) filters.to_date = to_date;

  return useQuery({
    queryKey: ["payments", filters],
    queryFn: async () => {
      const response = await getPaymentsApi(filters);
      return response.data.data;
    },
  });
};
