import { useQuery } from "@tanstack/react-query";
import { getGovernorsatesApi } from "../api";

export const useGovernorates = () => {
  return useQuery({
    queryKey: ["governorates"],
    queryFn: async () => {
      const response = await getGovernorsatesApi();
      return response.data.data;
    },
  });
};
