import Select from "../../../components/ui/Select";
import { bookingsStatusFilters } from "../constant/table-data";

const BookingsTableOperations = () => {
  return (
    <div className="flex justify-end">
      <Select filterField="status" options={bookingsStatusFilters} />
    </div>
  );
};

export default BookingsTableOperations;
