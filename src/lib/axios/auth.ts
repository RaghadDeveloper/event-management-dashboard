import { store } from "../../store";

export const getAccessToken = () => {
  return store.getState().auth.accessToken;
};
