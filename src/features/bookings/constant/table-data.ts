export const bookingsTableColumns = [
  "",
  "",
  "service",
  "provider",
  "customer",
  "location",
  "date",
  "price",
  "status",
];

export const bookingsTableGrid =
  "grid-cols-[2rem_6rem_2fr_1fr_1fr_1fr_8rem_6rem_8rem]";

export const statusColors = {
  pending: "text-warning",
  accepted: "text-success",
  deposit_paid: "text-warning",
  confirmed: "text-success",
  completed: "text-neutral-600",
  cancelled: "text-danger",
  rejected: "text-danger",
  expired: "text-neutral-600",
};

export const bookingsStatusFilters = [
  { value: "all", label: "All Status" },
  { value: "pending", label: "pending" },
  { value: "accepted", label: "accepted" },
  { value: "deposit_paid", label: "deposit paid" },
  { value: "confirmed", label: "confirmed" },
  { value: "completed", label: "completed" },
  { value: "cancelled", label: "cancelled" },
  { value: "rejected", label: "rejected" },
  { value: "expired", label: "expired" },
];
