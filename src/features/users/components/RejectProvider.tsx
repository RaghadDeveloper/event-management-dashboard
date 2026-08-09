import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useRejectProvider } from "../hooks/useRejectProvider";

import Heading from "../../../components/ui/Heading";
import Button from "../../../components/ui/Button";

const RejectProvider = ({
  onCloseModal,
  providerId,
}: {
  onCloseModal?: () => void;
  providerId: string;
}) => {
  const [reason, setReason] = useState("");
  const { t } = useTranslation();

  const { mutateAsync: rejectProvider, isPending: isRejecting } =
    useRejectProvider();

  const handleConfirm = async () => {
    await rejectProvider({ providerId, reason });
    onCloseModal?.();
  };

  return (
    <div className="flex flex-col">
      <Heading as="h3">{t("reject service provider")}</Heading>

      <p className="text-text-secondary mb-2 first-letter:capitalize">
        {t("please provide a reason for rejecting this service provider")}.
      </p>
      <textarea
        className="input mb-5 h-30 resize-none"
        placeholder={t("reason")}
        onChange={(e) => {
          setReason(e.target.value);
        }}
        value={reason}
        minLength={6}
        required
        disabled={isRejecting}
      />
      <div className="flex w-full items-center justify-end gap-3">
        <Button variant="outline" disabled={isRejecting} onClick={onCloseModal}>
          {t("cancel")}
        </Button>

        <Button
          variant={"danger"}
          disabled={isRejecting || !reason || reason.length < 6}
          onClick={handleConfirm}
        >
          {t("reject")}
        </Button>
      </div>
    </div>
  );
};

export default RejectProvider;
