import Loader from "../../../components/common/Loader";
import Table from "../../../components/common/Table";
import Empty from "../../../components/ui/Empty";
import { payoutsTableColumns, payoutsTableGrid } from "../constants/table-data";
import { usePayments } from "../hooks/usePayments";
import type { Payout } from "../types";
import PayoutRow from "./PayoutRow";

const PayoutsTable = () => {
  const { data, isPending } = usePayments();

  if (isPending) return <Loader />;
  if (!data?.length) return <Empty resource="payments" />;

  console.log("data", data);
  return (
    <Table columns={payoutsTableGrid}>
      <Table.Header titles={payoutsTableColumns} />
      <Table.Body>
        {data?.map((payout: Payout) => (
          <PayoutRow key={payout.id} payout={payout} />
        ))}
      </Table.Body>
    </Table>
  );
};

export default PayoutsTable;
