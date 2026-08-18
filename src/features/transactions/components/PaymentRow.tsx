import Table from "../../../components/common/Table";
import { formatDate } from "../../../utils/helpers";
import { paymentStatusColors } from "../constants/table-data";
import type { Payment } from "../types";

const PaymentRow = ({ payment }: { payment: Payment }) => {
  const { payment_type, amount, event, created_at, status } = payment;
  const cellStyle = "mx-3 text-nowrap capitalize ";

  return (
    <Table.Row>
      <p className={`${cellStyle}`}>
        {payment_type.at(0)?.toUpperCase() +
          payment_type.slice(1).replace("_", " ")}
      </p>
      <p className={cellStyle + " font-semibold"}>{amount.toLocaleString()}</p>
      <p className={cellStyle}>{event.title}</p>
      <p className={cellStyle}>{formatDate(created_at.split("T")[0])}</p>
      <p
        className={`${cellStyle} ${paymentStatusColors[status]} font-semibold`}
      >
        {status}
      </p>
    </Table.Row>
  );
};

export default PaymentRow;
