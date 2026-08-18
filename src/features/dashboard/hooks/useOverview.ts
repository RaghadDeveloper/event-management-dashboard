import { useQuery } from "@tanstack/react-query";
import { getOverviewApi } from "../api";

export const useOverview = () => {
  return useQuery({
    queryKey: ["overview"],
    queryFn: async () => {
      const response = await getOverviewApi();
      return response.data;
    },
  });
};
