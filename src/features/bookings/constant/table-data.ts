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
  "grid-cols-[2rem_6rem_2fr_1.4fr_10rem_8rem_8rem_6rem_8rem]";

export const statusColors = {
  pending: "warning",
  accepted: "success",
  deposit_paid: "warning",
  confirmed: "success",
  completed: "neutral-500",
  cancelled: "danger",
  rejected: "danger",
  expired: "neutral-500",
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
