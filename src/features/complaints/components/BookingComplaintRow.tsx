import { useNavigate } from "react-router";
import Table from "../../../components/common/Table";
import type { BookingComplaint } from "../types";
import { formatDate } from "../../../utils/helpers";
import { complaintStatusColors } from "../constant/table-data";

const BookingComplaintRow = ({
  complaint,
}: {
  complaint: BookingComplaint;
}) => {
  const {
    id,
    booking,
    description,
    provider_name,
    customer_name,
    status,
    created_at,
  } = complaint;
  const cellStyle = "mx-3 text-nowrap";
  const navigate = useNavigate();

  const complaintData = {
    id,
    booking,
    description,
    provider_name,
    customer_name,
    status,
    created_at,
  };

  return (
    <div
      className=" cursor-pointer"
      onClick={() =>
        navigate(`/bookings/${booking.id}`, { state: { complaintData } })
      }
    >
      <Table.Row onClick={() => navigate(`${id}`)}>
        <p className={cellStyle}>{id}</p>
        <p className={cellStyle}>{customer_name}</p>
        <p className={cellStyle}>{provider_name}</p>
        <p className={cellStyle}>{booking.service.name}</p>
        <p className={cellStyle}>{formatDate(booking.booking_date)}</p>
        <p
          className={`${cellStyle} text-${complaintStatusColors[status]} font-semibold capitalize`}
        >
          {status.at(0)?.toUpperCase() + status.slice(1).replace("_", " ")}
        </p>
        <p className={cellStyle}>{formatDate(created_at)}</p>
      </Table.Row>
    </div>
  );
};

export default BookingComplaintRow;
