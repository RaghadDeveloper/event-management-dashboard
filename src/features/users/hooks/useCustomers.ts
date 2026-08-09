import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";

import { getCustomersApi } from "../api";
import type { CustomersFilters } from "../types";
import { PAGE_SIZE } from "../../../utils/constants";
import { queryClient } from "../../../services/query/client";
// import { useGovernorates } from "../../Locations/hooks/useGovernorates";
// import type { Governorate } from "../../../types";

export const useCustomers = () => {
  const [searchParams] = useSearchParams();

  // const { data: governorates = [] } = useGovernorates();

  const filters: CustomersFilters = {};

  const status = searchParams.get("status");
  const search = searchParams.get("search");
  const governorate = searchParams.get("governorate");
  const page = searchParams.get("page") ?? "1";

  if (status && status !== "all") filters.is_banned = status === "banned";

  if (search) filters.search = search;

  if (page) filters.page = page;

  if (governorate && governorate !== "all")
    filters.governorate_id = governorate;

  // if (governorateName) {
  //   const selectedGovernorate = governorates.find(
  //     (governorate: Governorate) => governorate.name === governorateName,
  //   );

  //   if (selectedGovernorate) {
  //     filters.governorate_id = String(selectedGovernorate.id);
  //   }
  // }

  const { data, isPending } = useQuery({
    queryKey: ["customers", filters],
    queryFn: async () => {
      const response = await getCustomersApi(filters);
      return response.data.data;
    },
  });
  const pageCount = Math.ceil(data?.pagination?.total_items / PAGE_SIZE);

  if (Number(page) < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["customers", { ...filters, page: String(Number(page) + 1) }],
      queryFn: async () => {
        const response = await getCustomersApi({
          ...filters,
          page: String(Number(page) + 1),
        });
        return response.data.data;
      },
    });

  if (Number(page) > 1)
    queryClient.prefetchQuery({
      queryKey: ["customers", { ...filters, page: String(Number(page) - 1) }],
      queryFn: async () => {
        const response = await getCustomersApi({
          ...filters,
          page: String(Number(page) - 1),
        });
        return response.data.data;
      },
    });

  return { data, isPending };
};
