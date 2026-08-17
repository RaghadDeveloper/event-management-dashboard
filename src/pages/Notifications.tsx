import Heading from "../components/ui/Heading";
import NotificationsTable from "../features/notifications/components/NotificationsTable";

const Notifications = () => {
  return (
    <section>
      <Heading as="h2">Notifications</Heading>
      <NotificationsTable />
    </section>
  );
};

export default Notifications;
