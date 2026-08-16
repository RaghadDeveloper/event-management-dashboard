export const API = {
  BOOKINGS_COMPLAINTS: {
    ALL: "/admin/complaints",
    DETAILS: "/admin/complaints/:id",
    RESOLVE: "/admin/complaints/:id/resolve",
  },
} as const;
