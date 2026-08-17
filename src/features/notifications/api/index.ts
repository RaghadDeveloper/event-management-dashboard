import apiClient from "../../../lib/axios/client";
import { API } from "../constants/api";

export const getAllNotificationsApi = () =>
  apiClient.get(API.NOTIFICATIONS.GET_NOTIFICATIONS);

export const markNotificationAsReadApi = (id: string) =>
  apiClient.get(API.NOTIFICATIONS.MARK_AS_READ.replace(":id", id));

export const markAllNotificationsAsReadApi = () =>
  apiClient.post(API.NOTIFICATIONS.MARK_ALL_AS_READ);

export const deleteNotificationApi = (id: string) =>
  apiClient.delete(API.NOTIFICATIONS.DELETE.replace(":id", id));

export const deleteAllNotificationsApi = () =>
  apiClient.delete(API.NOTIFICATIONS.DELETE_ALL);
