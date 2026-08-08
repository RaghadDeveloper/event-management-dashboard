import { useTranslation } from "react-i18next";
import type { Customer } from "../../../types";

import Table from "../../../components/common/Table";

const CustomerRow = ({ customer }: { customer: Customer }) => {
  const { id, name, email, phone, avatar, address, is_banned } = customer;
  const { t } = useTranslation();

  const cellStyle = "mx-3 min-w-fits text-nowrap";

  return (
    <Table.Row key={id}>
      <img
        src={avatar}
        alt={name}
        className={`${cellStyle} min-w-10 w-12 h-12 rounded-full object-cover`}
      />
      <div className="flex flex-col gap-2q">
        <p className={cellStyle}>{name}</p>
        <p className={cellStyle + " text-neutral-500"}>{email}</p>
      </div>
      <p className={cellStyle}>{phone}</p>
      <p className={cellStyle}>{address}</p>
      {is_banned ? (
        <p className={`${cellStyle} text-danger font-semibold capitalize`}>
          {t("banned")}
        </p>
      ) : (
        <p className={`${cellStyle} text-success font-semibold capitalize`}>
          {t("active")}
        </p>
      )}
      <p className={cellStyle}>...</p>
    </Table.Row>
  );
};

export default CustomerRow;
