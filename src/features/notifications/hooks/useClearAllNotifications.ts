import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../../services/query/client";
import toast from "react-hot-toast";
import { deleteAllNotificationsApi } from "../api";

export const useClearAllNotifications = () => {
  return useMutation({
    mutationFn: deleteAllNotificationsApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
      toast.success("All notifications cleared");
    },
    onError: () => {
      toast.error("Failed to clear all notifications");
    },
  });
};
