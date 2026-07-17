import apiClient from "../../../lib/axios/client";
import { API } from "../constants/api";
import type { LoginPayload } from "../types";

export const loginApi = (data: LoginPayload) =>
  apiClient.post(API.AUTH.LOGIN, data);
