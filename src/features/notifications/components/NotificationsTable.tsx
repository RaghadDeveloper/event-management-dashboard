import Loader from "../../../components/common/Loader";
import Table from "../../../components/common/Table";
import Empty from "../../../components/ui/Empty";
import {
  notificationsTableColumns,
  notificationsTableGrid,
} from "../constants/table-data";
import { useNotifications } from "../hooks/useAllNotifications";
import type { Notification } from "../types";
import ClearAllNotifications from "./ClearAllNotifications";
import NotificationRow from "./NotificationRow";
import ReadAllNotifications from "./ReadAllNotifications";

const NotificationsTable = () => {
  const { data: notifications, isPending } = useNotifications();

  if (isPending) return <Loader />;

  if (!notifications?.length) return <Empty resource="notifications" />;

  return (
    <div>
      <div className="flex justify-end gap-4 mb-4">
        <ReadAllNotifications />
        <ClearAllNotifications />
      </div>
      <Table columns={notificationsTableGrid}>
        <Table.Header titles={notificationsTableColumns} />
        <Table.Body>
          {notifications?.map((notification: Notification) => (
            <NotificationRow
              key={notification.id}
              notification={notification}
            />
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default NotificationsTable;
