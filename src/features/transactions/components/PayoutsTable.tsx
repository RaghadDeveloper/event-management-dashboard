import Loader from "../../../components/common/Loader";
import Table from "../../../components/common/Table";
import Empty from "../../../components/ui/Empty";
import { payoutsTableColumns, payoutsTableGrid } from "../constants/table-data";
import { usePayouts } from "../hooks/usePayouts";
import type { Payout } from "../types";
import PayoutRow from "./PayoutRow";

const PayoutsTable = () => {
  const { data, isPending } = usePayouts();

  if (isPending) return <Loader />;
  if (!data?.length) return <Empty resource="payments" />;

  console.log("data", data);
  return (
    <Table columns={payoutsTableGrid}>
      <Table.Header titles={payoutsTableColumns} />
      <Table.Body>
        {data.slice(35, 100)?.map((payout: Payout) => (
          <PayoutRow key={payout.id} payout={payout} />
        ))}
      </Table.Body>
    </Table>
  );
};

export default PayoutsTable;
