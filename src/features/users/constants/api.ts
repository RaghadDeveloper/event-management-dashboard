export const API = {
  USERS: {
    CUSTOMERS: "/users/customers",
    PROVIDERS: "/users/providers",
    PROVIDER_DETAILS: "/service-providers/:id",
    PROVIDER_PORTFOLIOS: "/service-providers/:id/portfolios",
    PROVIDER_REVIEWS: "/service-providers/:id/reviews",
    APPROVE_PROVIDER: "/admin/service-providers/:id/approve",
    REJECT_PROVIDER: "/admin/service-providers/:id/reject",
    BAN: "/users/:id/ban",
    UNBAN: "/users/:id/unban",
  },
} as const;
