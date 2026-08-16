import { useQuery } from "@tanstack/react-query";
import { getProviderDetailsApi } from "../api";

export const useProviderDetails = (providerId: string) => {
  return useQuery({
    queryKey: ["provider-details", providerId],
    queryFn: async () => {
      const response = await getProviderDetailsApi(providerId);
      return response.data.data;
    },
  });
};
