import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../../services/query/client";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { resolveComplaintApi } from "../api";

export const useResolveComplaint = () => {
  const { t } = useTranslation();

  return useMutation({
    mutationFn: resolveComplaintApi,
    onSuccess: (_, complaintData) => {
      queryClient.invalidateQueries({
        queryKey: ["bookings-complaints"],
        refetchType: "all",
      });
      queryClient.invalidateQueries({
        queryKey: ["complaint-details", String(complaintData.id)],
      });
      toast.success(t("Complaint has been resolved successfully"));
    },
    onError: () => {
      toast.error(t("Failed to resolve complaint"));
    },
  });
};
