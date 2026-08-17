import { MdOutlineMarkEmailRead } from "react-icons/md";
import Table from "../../../components/common/Table";
import { statusColors } from "../constants/table-data";
import type { Notification } from "../types";
import { TbTrash } from "react-icons/tb";
import { useReadNotification } from "../hooks/useReadNotification";
import { useDeleteNotification } from "../hooks/useDeleteNotification";

const NotificationRow = ({ notification }: { notification: Notification }) => {
  const { mutate: readNotification, isPending: readingNotification } =
    useReadNotification();
  const { mutate: deleteNotification, isPending: deletingNotification } =
    useDeleteNotification();
  const cellStyle = "mx-3 text-nowrap";
  const { id, title, message, created_at, read_at } = notification;
  const status = read_at ? "read" : "unread";

  return (
    <div
      className={`${status === "unread" && "bg-bg-secondary/80 dark:bg-bg-secondary/40"} group`}
    >
      <Table.Row>
        <p className={cellStyle}>{title}</p>
        <p className={cellStyle + " text-wrap"}>{message}</p>
        <p className={cellStyle}>{created_at.split(",")[0]}</p>
        <span
          className={`text-${statusColors[status]} ${cellStyle} font-semibold capitalize`}
        >
          {status}
        </span>
        <div className="flex items-center gap-4 justify-end mx-auto text-base sm:text-xl opacity-0 group-hover:opacity-100 transition-opacity">
          {status === "unread" && (
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
      </Table.Row>
    </div>
  );
};

export default NotificationRow;
