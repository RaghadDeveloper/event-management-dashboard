import { useQuery } from "@tanstack/react-query";
import { getCategoriesApi } from "../api";

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await getCategoriesApi();
      return response.data.data;
    },
  });
};
