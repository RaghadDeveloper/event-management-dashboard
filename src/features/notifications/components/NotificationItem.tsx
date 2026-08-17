import { MdOutlineMarkEmailRead } from "react-icons/md";
import type { Notification } from "../types";
import { TbTrash } from "react-icons/tb";
import { useReadNotification } from "../hooks/useReadNotification";
import { useDeleteNotification } from "../hooks/useDeleteNotification";

interface NotificationItemProps {
  notification: Notification;
}

const NotificationItem = ({ notification }: NotificationItemProps) => {
  const { id, title, message, created_at, read_at } = notification;
  const { mutate: readNotification, isPending: readingNotification } = useReadNotification();
  const { mutate: deleteNotification, isPending: deletingNotification } = useDeleteNotification();

  return (
    <div
      className={`text-text-main relative px-4 py-2 hover:bg-bg-secondary/80 group cursor-pointer border-b nth-2:border-t border-tertiary ${!read_at && "bg-primary-10"}`}
    >
      {!read_at && (
        <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mr-2 absolute right-2 top-4 group-hover:opacity-0 transition-opacity" />
      )}
      <div className="absolute right-2 top-2 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity text-xl">
        {!read_at && (
            <button
              disabled={readingNotification}
              onClick={(e) => {
                e.stopPropagation();
                readNotification(String(id));
              }}
              className="cursor-pointer disabled:cursor-not-allowed"
            >
              <MdOutlineMarkEmailRead className="text-primary-500 " />
            </button>
          )}
          <button
            disabled={deletingNotification}
            onClick={(e) => {
              e.stopPropagation();
              deleteNotification(String(id));
            }}
            className="cursor-pointer disabled:cursor-not-allowed"
          >
            <TbTrash className="text-red-700 place-self-end" />
          </button>
      </div>
      <h4 className="font-medium text-text-main">{title}</h4>
      <p className="text-text-secondary/80 ">{message}</p>
      <span className="text-xs text-neutral-500 block place-self-end sw-full absolutes right-2 bottom-2">
        {created_at}
      </span>
    </div>
  );
};

export default NotificationItem;
