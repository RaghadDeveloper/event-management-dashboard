import Loader from "../../../components/common/Loader";
import Table from "../../../components/common/Table";
import Empty from "../../../components/ui/Empty";
import {
  bookingsComplaintsTableColumns,
  bookingsComplaintsTableGrid,
} from "../constant/table-data";
import { useBookingsComplaints } from "../hooks/useBookingsComplaints";
import type { BookingComplaint } from "../types";
import BookingComplaintRow from "./BookingComplaintRow";

const BookingsComplaintsTable = () => {
  const { data: bookingsComplaint, isPending } = useBookingsComplaints();

  if (isPending) return <Loader />;

  if (!bookingsComplaint?.length)
    return <Empty resource="bookings complaints" />;

  return (
    <Table columns={bookingsComplaintsTableGrid}>
      <Table.Header titles={bookingsComplaintsTableColumns} />
      <Table.Body>
        {bookingsComplaint?.map((complaint: BookingComplaint) => (
          <BookingComplaintRow key={complaint.id} complaint={complaint} />
        ))}
      </Table.Body>
    </Table>
  );
};

export default BookingsComplaintsTable;
