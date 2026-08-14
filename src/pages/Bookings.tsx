import Heading from "../components/ui/Heading";
import BookingsTable from "../features/bookings/components/BookingsTable";
import BookingsTableOperations from "../features/bookings/components/BookingsTableOperations";

const Bookings = () => {
  return (
    <section className="flex flex-col gap-4">
      <Heading as="h2">Bookings</Heading>
      <BookingsTableOperations />
      <BookingsTable />
    </section>
  );
};

export default Bookings;
