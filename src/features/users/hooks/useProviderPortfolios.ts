import { useQuery } from "@tanstack/react-query";
import { getProviderPortfoliosApi } from "../api";

export const useProviderPortfolios = (providerId: string) => {
  return useQuery({
    queryKey: ["provider-portfolios", providerId],
    queryFn: async () => {
      const response = await getProviderPortfoliosApi(providerId);
      return response.data.data;
    },
  });
};
