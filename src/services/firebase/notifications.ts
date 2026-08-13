import { getToken, onMessage, type MessagePayload } from "firebase/messaging";
import { messaging } from "../../lib/firebase/config";

const VAPID_KEY = import.meta.env.VITE_FIREBASE_VAPID_KEY;

const getServiceWorkerRegistration = async () => {
  if (!("serviceWorker" in navigator)) {
    return null;
  }

  return navigator.serviceWorker.register("/firebase-messaging-sw.js");
};

export const requestNotificationPermission = async (): Promise<
  string | null
> => {
  try {
    const permission = await Notification.requestPermission();

    if (permission !== "granted") {
      return null;
    }

    const serviceWorkerRegistration = await getServiceWorkerRegistration();

    if (!serviceWorkerRegistration) {
      return null;
    }

    const token = await getToken(messaging, {
      vapidKey: VAPID_KEY,
      serviceWorkerRegistration,
    });

    return token || null;
  } catch (error) {
    console.error("Failed to initialize notifications:", error);
    return null;
  }
};

export const listenToForegroundMessages = (
  callback: (payload: MessagePayload) => void,
) => {
  return onMessage(messaging, callback);
};
