import { useMutation } from "@tanstack/react-query";
import { unbanUserApi } from "../api";
import { queryClient } from "../../../services/query/client";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

export const useUnbanUser = () => {
  const { t } = useTranslation();
  return useMutation({
    mutationFn: unbanUserApi,
    onSuccess: (_, { userId, id }) => {
      console.log("userId", userId);
      queryClient.invalidateQueries({ queryKey: ["customers"] });
      queryClient.invalidateQueries({
        queryKey: ["providers"],
        refetchType: "all",
      });
      queryClient.invalidateQueries({
        queryKey: ["provider-details", String(id)],
        refetchType: "all",
      });
      toast.success(t("User has been unbanned successfully"));
    },
    onError: () => {
      toast.error(t("Failed to unban user"));
    },
  });
};
