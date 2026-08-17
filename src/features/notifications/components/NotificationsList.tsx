import { useNotifications } from "../hooks/useAllNotifications";
import type { Notification } from "../types";
import NotificationItem from "./NotificationItem";
import { useNavigate } from "react-router-dom";
import ReadAllNotifications from "./ReadAllNotifications";
import Loader from "../../../components/common/Loader";

interface NotificationsListProps {
  setShowNotifications: (b: boolean) => void;
}

const NotificationsList = ({
  setShowNotifications,
}: NotificationsListProps) => {
  const navigate = useNavigate();
  const { data: notifications, isPending: loadingNotifications } =
    useNotifications();

  return (
    <div className="absolute z-20 -right-50 sm:-right-30 mt-2 w-[90vw] sm:w-120 min-h-40 bg-bg-main rounded-md shadow-lg overflow-hidden transition-all">
      {loadingNotifications ? (
        <Loader />
      ) : notifications?.length === 0 ? (
        <div className="p-4 min-h-40 flex justify-center items-center text-neutral-400">
          No notifications
        </div>
      ) : (
        <>
          <div className="px-4 py-2 flex justify-between">
            <h4 className=" font-semibold text-primary-500">Notifications</h4>
            <ReadAllNotifications />
          </div>

          <div className="overflow-auto max-h-150">
            {notifications.slice(0, 6).map((notification: Notification) => (
              <NotificationItem
                notification={notification}
                key={notification.id}
              />
            ))}
          </div>

          <div
            className="px-4 py-2 text-center text-sm text-neutral-400 cursor-pointer hover:underline focus:outline-none"
            onClick={() => {
              setShowNotifications(false);
              navigate("/notifications");
            }}
          >
            view all
          </div>
        </>
      )}
    </div>
  );
};

export default NotificationsList;
