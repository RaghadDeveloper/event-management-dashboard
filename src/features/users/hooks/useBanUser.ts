import { useMutation } from "@tanstack/react-query";
import { banUserApi } from "../api";
import { queryClient } from "../../../services/query/client";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

export const useBanUser = () => {
  const { t } = useTranslation();

  return useMutation({
    mutationFn: banUserApi,
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: ["customers"] });
      queryClient.invalidateQueries({
        queryKey: ["providers"],
        refetchType: "all",
      });
      queryClient.invalidateQueries({
        queryKey: ["provider-details", String(id)],
        refetchType: "all",
      });
      toast.success(t("User has been banned successfully"));
    },
    onError: () => {
      toast.error(t("Failed to ban user"));
    },
  });
};
