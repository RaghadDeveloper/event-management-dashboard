import Loader from "../../../components/common/Loader";
import Table from "../../../components/common/Table";
import Empty from "../../../components/ui/Empty";
import {
  paymentsTableColumns,
  paymentsTableGrid,
} from "../constants/table-data";
import { usePayments } from "../hooks/usePayments";
import type { Payment } from "../types";
import PaymentRow from "./PaymentRow";

const PaymentsTable = () => {
  const { data, isPending } = usePayments();

  if (isPending) return <Loader />;
  if (!data?.length) return <Empty resource="payments" />;

  return (
    <Table columns={paymentsTableGrid}>
      <Table.Header titles={paymentsTableColumns} />
      <Table.Body>
        {data?.map((payment: Payment) => (
          <PaymentRow key={payment.id} payment={payment} />
        ))}
      </Table.Body>
    </Table>
  );
};

export default PaymentsTable;
