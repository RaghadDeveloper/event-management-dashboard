import Loader from "../../../components/common/Loader";
import Pagination from "../../../components/common/Pagination";
import Table from "../../../components/common/Table";
import Empty from "../../../components/ui/Empty";
import {
  bookingsTableColumns,
  bookingsTableGrid,
} from "../constant/table-data";
import { useBookings } from "../hooks/useBookings";
import type { Booking } from "../types";
import BookingRow from "./BookingRow";

const BookingsTable = () => {
  const { data, isPending } = useBookings();
  const { bookings, pagination } = data || {};

  if (isPending) return <Loader />;

  if (!bookings?.length) return <Empty resource="bookings" />;

  return (
    <Table columns={bookingsTableGrid}>
      <Table.Header titles={bookingsTableColumns} />
      <Table.Body>
        {bookings?.map((booking: Booking) => (
          <BookingRow key={booking.id} booking={booking} />
        ))}
      </Table.Body>
      <Table.Footer>
        <Pagination count={pagination?.total_items || 0} />
      </Table.Footer>
    </Table>
  );
};

export default BookingsTable;
