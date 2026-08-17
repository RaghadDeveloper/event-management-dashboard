interface ResolveOptionProps {
  selectedDecision: "release_to_provider" | "refund_to_customer" | null;
  decision: "release_to_provider" | "refund_to_customer";
  title: string;
  text: string;
  onClick: () => void;
}

const ResolveOption = ({
  selectedDecision,
  decision,
  title,
  text,
  onClick,
}: ResolveOptionProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full rounded-xl border p-4 text-left transition-all ${
        selectedDecision === decision
          ? "border-primary-600 bg-primary-50 ring-1 ring-primary-600 dark:bg-primary-950"
          : "bg-bg-main border-tertiary hover:border-white"
      }`}
    >
      <div className="flex items-start gap-3">
        <div
          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
            decision === "release_to_provider"
              ? "border-primary-600"
              : "border-tertiary"
          }`}
        >
          {decision === selectedDecision && (
            <span className="h-2.5 w-2.5 rounded-full bg-primary-600" />
          )}
        </div>

        <div className="flex flex-col flex-1 items-start">
          <p className="font-medium text-text-main">{title}</p>

          <p className="mt-1 text-sm text-neutral-500">
            {text}
          </p>
        </div>
      </div>
    </button>
  );
};

export default ResolveOption;
