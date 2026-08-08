import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AuthState, User } from "../types";
import { authStorage } from "../../../storage/authStorage";

const initialState: AuthState = {
  user: null,
  accessToken: authStorage.load(),
  refreshToken: null,
  initialized: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
    },

    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },

    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },

    setRefreshToken: (state, action: PayloadAction<string>) => {
      state.refreshToken = action.payload;
    },

    setInitialized: (state, action: PayloadAction<boolean>) => {
      state.initialized = action.payload;
    },
  },
});

export const {
  logout,
  setUser,
  setAccessToken,
  setRefreshToken,
  setInitialized,
} = authSlice.actions;

export default authSlice.reducer;
