import apiClient from "../../../lib/axios/client";
import { API } from "../constant/api";

export const getCategoriesApi = () => apiClient.get(API.CATEGORIES.BASE);
