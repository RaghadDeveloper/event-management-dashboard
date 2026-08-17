import Table from "../../../components/common/Table";
import { formatDate } from "../../../utils/helpers";
import { payoutStatusColors } from "../constants/table-data";
import type { Payout } from "../types";

const PayoutRow = ({ payout }: { payout: Payout }) => {
  const { amount, reason, created_at, status, release_at, booking } = payout;
  const cellStyle = "mx-3 text-nowrap capitalize";

  return (
    <Table.Row>
      <p className={cellStyle}>{booking.service}</p>
      <p className={cellStyle + " font-semibold"}>{amount.toLocaleString()}</p>
      <p className={cellStyle}>{reason.split("_").join(" ")}</p>
      <p className={`${cellStyle} ${payoutStatusColors[status]} font-semibold`}>
        {status.split("_").join(" ")}
      </p>
      <p className={cellStyle}>
        {release_at && formatDate(release_at.split("T")[0])}
      </p>
      <p className={cellStyle}>{formatDate(created_at.split("T")[0])}</p>
    </Table.Row>
  );
};

export default PayoutRow;
