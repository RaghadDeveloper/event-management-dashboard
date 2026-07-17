import { useEffect } from "react";
import { useAppDispatch } from "../../../store/hooks";
import { setAccessToken, setInitialized } from "../store/authSlice";
import { authStorage } from "../../../storage/authStorage";

export const useInitializeAuth = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = authStorage.load();

    if (token) {
      dispatch(setAccessToken(token));
    }

    dispatch(setInitialized(true));
  }, [dispatch]);
};
