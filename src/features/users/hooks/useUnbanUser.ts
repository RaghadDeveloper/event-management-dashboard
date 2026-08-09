import { useMutation } from "@tanstack/react-query";
import { unbanUserApi } from "../api";
import { queryClient } from "../../../services/query/client";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

export const useUnbanUser = () => {
  const { t } = useTranslation();

  return useMutation({
    mutationFn: unbanUserApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["customers"] });
      toast.success(t("customer has been unbanned successfully"));
    },
    onError: () => {
      toast.error(t("Failed to unban customer"));
    },
  });
};
