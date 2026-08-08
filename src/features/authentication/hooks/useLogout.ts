import { useNavigate } from "react-router";
import { useAppDispatch } from "../../../store/hooks";
import type { AxiosError, AxiosResponse } from "axios";
import { useMutation } from "@tanstack/react-query";
import { logoutApi } from "../api";
import { logout } from "../store/authSlice";

export const useLogout = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return useMutation<AxiosResponse, AxiosError>({
    mutationFn: logoutApi,
    onSuccess: () => {
      dispatch(logout());
      navigate("/login");
    },
    onError: () => {
      dispatch(logout());
      navigate("/login");
    },
  });
};
