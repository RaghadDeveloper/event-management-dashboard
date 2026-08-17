import Modal from "../../../components/common/Modal";
import Button from "../../../components/ui/Button";
import Heading from "../../../components/ui/Heading";
import { useState } from "react";
import ResolveOption from "./ResolveOption";
import { useResolveComplaint } from "../hooks/useResolveComplaint";

type Decision = "release_to_provider" | "refund_to_customer";

const ResolveComplaintsModal = ({
  complaintId,
  onCloseModal,
}: {
  complaintId: number;
  onCloseModal?: () => void;
}) => {
  const [decision, setDecision] = useState<Decision | null>(null);
  const [note, setNote] = useState<string>("");
  const { mutateAsync: resolve, isPending } = useResolveComplaint();

  const handleResolve = async () => {
    if (decision) {
      await resolve({ id: String(complaintId), data: { decision, note } });
      onCloseModal?.();
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <Heading as="h3">Resolve Booking Complaint</Heading>
      <p className="text-text-secondary first-letter:capitalize">
        Review the complaint and choose how the booking funds should be handled.
      </p>

      <div className="flex gap-2">
        <ResolveOption
          selectedDecision={decision}
          decision="release_to_provider"
          title="Release to Provider"
          text="Release the booking payment to the service provider."
          onClick={() => setDecision("release_to_provider")}
        />
        <ResolveOption
          selectedDecision={decision}
          decision="refund_to_customer"
          title="Refund to Customer"
          text="Refund the booking payment to the customer."
          onClick={() => setDecision("refund_to_customer")}
        />
      </div>

      <div className="flex flex-col gap-2 text-text-main">
        <label htmlFor="note">Note (optional)</label>
        <textarea
          id="note"
          className="input mb-5 h-30 resize-none"
          placeholder="Add a note about your decision..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </div>
      <div className="flex w-full items-center justify-end gap-3">
        <Modal.Close>
          <Button variant="outline">Cancel</Button>
        </Modal.Close>
        <Button
          variant="primary"
          onClick={handleResolve}
          disabled={isPending || !decision}
        >
          Resolve
        </Button>
      </div>
    </div>
  );
};

export default ResolveComplaintsModal;
