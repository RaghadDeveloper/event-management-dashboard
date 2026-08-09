import { useMutation } from "@tanstack/react-query";
import { approveProviderApi } from "../api";
import { queryClient } from "../../../services/query/client";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

export const useApproveProvider = () => {
  const { t } = useTranslation();

  return useMutation({
    mutationFn: approveProviderApi,
    onSuccess: (providerId) => {
      queryClient.invalidateQueries({ queryKey: ["providers"] });
      queryClient.invalidateQueries({ queryKey: ["provider", providerId] });
      toast.success(t("Provider has been approved successfully"));
    },
    onError: () => {
      toast.error(t("Failed to approve provider"));
    },
  });
};
