import {
  customersTableColumns,
  customersTableGrid,
} from "../constants/tables-data";
import Table from "../../../components/common/Table";
import CustomerRow from "./CustomerRow";
import { useCustomers } from "../hooks/useCustomers";
import type { Customer } from "../../../types";
import Empty from "../../../components/ui/Empty";
import Loader from "../../../components/common/Loader";
import Pagination from "../../../components/common/Pagination";

const CustomersTable = () => {
  const { data, isPending } = useCustomers();
  const { customers, pagination } = data || {};

  if (isPending) return <Loader />;

  if (!customers?.length) return <Empty resource="customers" />;

  return (
    <Table columns={customersTableGrid}>
      <Table.Header titles={customersTableColumns} />
      <Table.Body>
        {customers?.map((customer: Customer) => (
          <CustomerRow key={customer.id} customer={customer} />
        ))}
      </Table.Body>
      <Table.Footer>
        <Pagination count={pagination?.total_items || 0} />
      </Table.Footer>
    </Table>
  );
};

export default CustomersTable;
