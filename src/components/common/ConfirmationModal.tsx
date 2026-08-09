import { useTranslation } from "react-i18next";
import Button from "../ui/Button";
import Heading from "../ui/Heading";

interface ConfirmationModalProps {
  action: string;
  resource: string;
  onConfirm: () => Promise<unknown>;
  onCloseModal?: () => void;
  disabled?: boolean;
}
const ConfirmationModal = ({
  action,
  resource,
  onConfirm,
  onCloseModal,
  disabled,
}: ConfirmationModalProps) => {
  const { t } = useTranslation();

  const handleConfirm = async () => {
    await onConfirm();
    onCloseModal?.();
  };

  return (
    <div className="flex flex-col">
      <Heading as="h3">{t(`${action} ${resource}`)}</Heading>

      <p className="text-text-secondary first-letter:capitalize">
        {t(`are you sure you want to ${action} this ${resource}?`)}
      </p>

      <div className="flex w-full items-center justify-end gap-3">
        <Button variant="outline" disabled={disabled} onClick={onCloseModal}>
          {t("cancel")}
        </Button>

        <Button variant="danger" disabled={disabled} onClick={handleConfirm}>
          {t(action)}
        </Button>
      </div>
    </div>
  );
};

export default ConfirmationModal;
