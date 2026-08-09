export const API = {
  USERS: {
    CUSTOMERS: "/users/customers",
    PROVIDERS: "/users/providers",
    BAN: "/users/:id/ban",
    UNBAN: "/users/:id/unban",
  },
} as const;
