import Heading from "../components/ui/Heading";
import BookingsComplaintsTable from "../features/complaints/components/BookingsComplaintsTable";

const Complaints = () => {
  return (
    <section>
      <Heading as="h2">Bookings Complaints</Heading>
      <BookingsComplaintsTable />
    </section>
  );
};

export default Complaints;
