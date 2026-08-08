import apiClient from "../../../lib/axios/client";
import { API } from "../constant/api";

export const getGovernorsatesApi = () =>
  apiClient.get(API.LOCATIONS.GOVERNORATES);
