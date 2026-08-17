export const API = {
  NOTIFICATIONS: {
    GET_NOTIFICATIONS: "/notifications",
    MARK_AS_READ: "/notifications/:id",
    MARK_ALL_AS_READ: "/notifications/mark-all-read",
    DELETE: "/notifications/:id",
    DELETE_ALL: "/notifications",
  },
} as const;
