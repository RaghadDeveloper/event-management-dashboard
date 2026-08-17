import { useQuery } from "@tanstack/react-query";
import { getAllNotificationsApi } from "../api";

export const useNotifications = () => {
  return useQuery({
    queryKey: ["notifications"],
    queryFn: async () => {
      const response = await getAllNotificationsApi();
      return response.data.data;
    },
    refetchInterval: 6000,
  });
};
