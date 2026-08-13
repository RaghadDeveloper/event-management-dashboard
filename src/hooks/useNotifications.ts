import { useEffect } from "react";
import { listenToForegroundMessages } from "../services/firebase/notifications";
import type { MessagePayload } from "firebase/messaging";

export const useNotifications = (
  onNotification?: (payload: MessagePayload) => void,
) => {
  useEffect(() => {
    const unsubscribe = listenToForegroundMessages((payload) => {
      console.log("Notification received:", payload);

      onNotification?.(payload);
    });

    return () => {
      unsubscribe();
    };
  }, [onNotification]);
};
