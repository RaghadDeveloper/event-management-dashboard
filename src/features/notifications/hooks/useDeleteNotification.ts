import { useMutation } from "@tanstack/react-query";
import { deleteNotificationApi } from "../api";
import toast from "react-hot-toast";
import { queryClient } from "../../../services/query/client";

export const useDeleteNotification = () => {
  return useMutation({
    mutationFn: deleteNotificationApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["notifications"],
        refetchType: "all",
      });
      toast.success("Notification deleted successfully");
    },
    onError: () => {
      toast.error("Failed to delete notification");
    },
  });
};
