export const bookingsComplaintsTableColumns = [
  "id",
  "customer",
  "provider",
  "service",
  "booking date",
  "status",
  "submitted at",
];

export const bookingsComplaintsTableGrid =
  "grid-cols-[2rem_1fr_1fr_2fr_1fr_1fr_1fr]";

export const complaintStatusColors = {
  pending: "warning",
  resolved_release: "success",
  resolved_reject: "danger",
};
