import { useMutation } from "@tanstack/react-query";
import { loginApi } from "../api";
import type { AxiosError, AxiosResponse } from "axios";
import type { LoginPayload } from "../types";
import type { ServerValidationErrors } from "../../../types";

export const useLogin = () => {
  return useMutation<
    AxiosResponse,
    AxiosError<ServerValidationErrors<LoginPayload>>,
    LoginPayload
  >({
    mutationFn: loginApi,
  });
};
