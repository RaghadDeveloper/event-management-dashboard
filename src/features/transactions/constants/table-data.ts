export const paymentsTableColumns = [
  "payment type",
  "amount",
  "event",
  "received at",
  "status",
];

export const paymentsTableGrid = "grid-cols-[0.5fr_0.5fr_1fr_0.5fr_0.5fr]";

export const payoutsTableColumns = [
  "booking",
  "amount",
  "reason",
  "status",
  "release at",
  "created at",
];

export const payoutsTableGrid = "grid-cols-[1.4fr_8rem_1fr_15rem_10rem_10rem]";

export const paymentStatusColors = {
  pending: "text-warning",
  succeeded: "text-success",
  failed: "text-danger",
};

export const payoutStatusColors = {
  awaiting_release: "text-warning",
  scheduled_for_completion: "text-warning",
  on_hold: "text-warning",
  released: "text-success",
  cancelled: "text-danger",
};
