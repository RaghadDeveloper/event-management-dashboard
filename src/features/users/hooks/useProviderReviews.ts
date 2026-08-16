import { useQuery } from "@tanstack/react-query";
import { getProviderReviewsApi } from "../api";

export const useProviderReviews = (providerId: string) => {
  return useQuery({
    queryKey: ["provider-reviews", providerId],
    queryFn: async () => {
      const response = await getProviderReviewsApi(providerId);
      return response.data.data;
    },
  });
};
