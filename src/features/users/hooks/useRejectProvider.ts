import { useMutation } from "@tanstack/react-query";
import { rejectProviderApi } from "../api";
import { queryClient } from "../../../services/query/client";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

export const useRejectProvider = () => {
  const { t } = useTranslation();

  return useMutation({
    mutationFn: rejectProviderApi,
    onSuccess: (providerId) => {
      queryClient.invalidateQueries({ queryKey: ["providers"] });
      queryClient.invalidateQueries({ queryKey: ["provider", providerId] });
      toast.success(t("Provider has been rejected successfully"));
    },
    onError: () => {
      toast.error(t("Failed to reject provider"));
    },
  });
};
