import { useQuery } from "@tanstack/react-query";
import { getProvidersCountApi } from "../api";

export const useProviderCounts = () => {
  return useQuery({
    queryKey: ["provider-counts"],
    queryFn: async () => {
      const response = await getProvidersCountApi();
      return response.data;
    },
  });
};
