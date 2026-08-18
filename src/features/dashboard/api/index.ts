import apiClient from "../../../lib/axios/client";
import { API } from "../constants/api";

export const getOverviewApi = () => apiClient.get(API.DASHBOARD.OVERVIEW);

export const getBookingsChartApi = () =>
  apiClient.get(API.DASHBOARD.BOOKINGS_CHART);

export const getPaymentsChartApi = () =>
  apiClient.get(API.DASHBOARD.PAYMENTS_CHART);

export const getRefundsChartApi = () =>
  apiClient.get(API.DASHBOARD.REFUNDS_CHART);

export const getPayoutsChartApi = () =>
  apiClient.get(API.DASHBOARD.PAYOUTS_CHART);

export const getProvidersCountApi = () =>
  apiClient.get(API.DASHBOARD.PROVIDERS_COUNT);
