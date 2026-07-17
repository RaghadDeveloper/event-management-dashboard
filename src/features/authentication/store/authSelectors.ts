import type { RootState } from "../../../store";

export const selectUser = (state: RootState) => state.auth.user;

export const selectAccessToken = (state: RootState) => state.auth.accessToken;

export const selectRefreshToken = (state: RootState) => state.auth.refreshToken;

export const selectIsAuthenticated = (state: RootState) =>
  state.auth.accessToken !== null;

export const selectIsInitialized = (state: RootState) => state.auth.initialized;
