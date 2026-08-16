export const customersTableColumns = [
  "avatar",
  "user",
  "email",
  "phone",
  "location",
  "account status",
  "",
];

export const customersTableGrid =
  "grid-cols-[0.45fr_1fr_1.4fr_1fr_1.2fr_0.8fr_0.3fr]";

export const providersTableColumns = [
  "avatar",
  "user",
  "business info",
  "phone",
  "location",
  "approval status",
  "account status",
  "",
];

export const providersTableGrid =
  "grid-cols-[0.45fr_1fr_1.5fr_1fr_1fr_0.8fr_0.8fr_0.3fr]";

export const statusColors = {
  active: "text-success",
  banned: "text-danger",
  approved: "text-success",
  rejected: "text-danger",
  pending: "text-warning",
};

export const statusBgColors = {
  active: "bg-success/10",
  banned: "bg-danger/10",
  approved: "bg-success/10",
  rejected: "bg-danger/10",
  pending: "bg-warning/10",
};
