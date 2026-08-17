import Heading from "../components/ui/Heading";
import BookingsComplaintsTable from "../features/complaints/components/BookingsComplaintsTable";

const Complaints = () => {
  return (
    <section className="flex flex-col gap-6">
      <Heading as="h2">Bookings Complaints</Heading>
      <BookingsComplaintsTable />
    </section>
  );
};

export default Complaints;
