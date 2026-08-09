import { useMutation } from "@tanstack/react-query";
import { banUserApi } from "../api";
import { queryClient } from "../../../services/query/client";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

export const useBanUser = () => {
  const { t } = useTranslation();

  return useMutation({
    mutationFn: banUserApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["customers"] });
      toast.success(t("customer has been banned successfully"));
    },
    onError: () => {
      toast.error(t("Failed to ban customer"));
    },
  });
};
