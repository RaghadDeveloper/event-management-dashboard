import { useNavigate } from "react-router";
import Table from "../../../components/common/Table";
import { statusColors } from "../constant/table-data";
import type { Booking } from "../types";

const BookingRow = ({ booking }: { booking: Booking }) => {
  const {
    id,
    service,
    provider,
    governorate,
    customer,
    city,
    booking_date,
    estimated_price,
    status,
  } = booking;
  const cellStyle = "mx-3 text-nowrap";
  const navigate = useNavigate();

  return (
    <div className=" cursor-pointer" onClick={() => navigate(id)}>
      <Table.Row onClick={() => navigate(`${id}`)}>
        <p className={cellStyle}>{id}</p>
        <img
          src={service.image}
          alt={service.name}
          className={`${cellStyle} w-18 h-12 rounded-md object-cover `}
        />
        <p className={cellStyle}>{service.name}</p>
        <p className={cellStyle}>{provider.name}</p>
        <p className={cellStyle}>{customer?.name}</p>
        <p className={cellStyle}>
          {city.name}, {governorate.name}
        </p>
        <p className={cellStyle}>{booking_date}</p>
        <p className={`${cellStyle} font-semibold`}>
          {estimated_price.toLocaleString()}
        </p>
        <p
          className={`${cellStyle} text-${statusColors[status]} font-semibold capitalize`}
        >
          {status.at(0)?.toUpperCase() + status.slice(1).replace("_", " ")}
        </p>
      </Table.Row>
    </div>
  );
};

export default BookingRow;
