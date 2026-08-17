import apiClient from "../../../lib/axios/client";
import { API } from "../constants/api";

export const getCustomersApi = (filters = {}) =>
  apiClient.get(API.USERS.CUSTOMERS, { params: filters });

export const getProvidersApi = (filters = {}) =>
  apiClient.get(API.USERS.PROVIDERS, { params: filters });

export const getProviderDetailsApi = (providerId: string) =>
  apiClient.get(API.USERS.PROVIDER_DETAILS.replace(":id", providerId));

export const getProviderPortfoliosApi = (providerId: string) =>
  apiClient.get(API.USERS.PROVIDER_PORTFOLIOS.replace(":id", providerId));

export const getProviderReviewsApi = (providerId: string) =>
  apiClient.get(API.USERS.PROVIDER_REVIEWS.replace(":id", providerId));

export const approveProviderApi = (providerId: string) =>
  apiClient.put(API.USERS.APPROVE_PROVIDER.replace(":id", providerId));

export const rejectProviderApi = ({
  providerId,
  reason,
}: {
  providerId: string;
  reason: string;
}) =>
  apiClient.put(API.USERS.REJECT_PROVIDER.replace(":id", providerId), {
    reason,
  });

export const banUserApi = ({ userId }: { userId: string; id?: string }) =>
  apiClient.post(API.USERS.BAN.replace(":id", userId));

export const unbanUserApi = ({ userId }: { userId: string; id?: string }) =>
  apiClient.post(API.USERS.UNBAN.replace(":id", userId));
