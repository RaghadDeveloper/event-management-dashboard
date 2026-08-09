import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";

import { getProvidersApi } from "../api";
import type { ProvidersFilters } from "../types";
import { PAGE_SIZE } from "../../../utils/constants";
import { queryClient } from "../../../services/query/client";

export const useProviders = () => {
  const [searchParams] = useSearchParams();

  const filters: ProvidersFilters = {};

  const status = searchParams.get("status");
  const search = searchParams.get("search");
  const approvalStatus = searchParams.get("approval_status");
  const governorate = searchParams.get("governorate");
  const page = searchParams.get("page") ?? "1";

  if (status && status !== "all") filters.is_banned = status === "banned";

  if (approvalStatus && approvalStatus !== "all")
    filters.approval_status = approvalStatus;

  if (search) filters.search = search;

  if (page) filters.page = page;

  if (governorate && governorate !== "all")
    filters.governorate_id = governorate;

  const { data, isPending } = useQuery({
    queryKey: ["providers", filters],
    queryFn: async () => {
      const response = await getProvidersApi(filters);
      return response.data.data;
    },
  });
  const pageCount = Math.ceil(data?.pagination?.total_items / PAGE_SIZE);

  if (Number(page) < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["providers", { ...filters, page: String(Number(page) + 1) }],
      queryFn: async () => {
        const response = await getProvidersApi({
          ...filters,
          page: String(Number(page) + 1),
        });
        return response.data.data;
      },
    });

  if (Number(page) > 1)
    queryClient.prefetchQuery({
      queryKey: ["providers", { ...filters, page: String(Number(page) - 1) }],
      queryFn: async () => {
        const response = await getProvidersApi({
          ...filters,
          page: String(Number(page) - 1),
        });
        return response.data.data;
      },
    });

  return { data, isPending };
};
