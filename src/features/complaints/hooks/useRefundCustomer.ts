import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../../services/query/client";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { refundCustomerApi } from "../api";

export const useRefundCustomer = () => {
  const { t } = useTranslation();

  return useMutation({
    mutationFn: refundCustomerApi,
    onSuccess: (_, refundData) => {
      queryClient.invalidateQueries({
        queryKey: ["bookings-complaints"],
        refetchType: "all",
      });
      queryClient.invalidateQueries({
        queryKey: ["complaint-details", String(refundData.payment_id)],
      });
      toast.success(t("Refund processed successfully"));
    },
    onError: () => {
      toast.error(t("Failed to process refund"));
    },
  });
};
