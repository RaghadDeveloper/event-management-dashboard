import { useMutation } from "@tanstack/react-query";
import { markAllNotificationsAsReadApi } from "../api";
import { queryClient } from "../../../services/query/client";
import toast from "react-hot-toast";

export const useReadAllNotifications = () => {
  return useMutation({
    mutationFn: markAllNotificationsAsReadApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
      toast.success("All notifications marked as read");
    },
    onError: () => {
      toast.error("Failed to mark all notifications as read");
    },
  });
};
