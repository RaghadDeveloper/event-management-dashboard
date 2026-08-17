import { useMutation } from "@tanstack/react-query";
import { markNotificationAsReadApi } from "../api";
import { queryClient } from "../../../services/query/client";
import toast from "react-hot-toast";

export const useReadNotification = () => {
  return useMutation({
    mutationFn: markNotificationAsReadApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["notifications"],
        refetchType: "all",
      });
      toast.success("Notification marked as read");
    },
    onError: () => {
      toast.error("Failed to mark notification as read");
    },
  });
};
