export const API = {
  USERS: {
    CUSTOMERS: "/users/customers",
    PROVIDERS: "/users/providers",
    APPROVE_PROVIDER: "/admin/service-providers/:id/approve",
    REJECT_PROVIDER: "/admin/service-providers/:id/reject",
    BAN: "/users/:id/ban",
    UNBAN: "/users/:id/unban",
  },
} as const;
