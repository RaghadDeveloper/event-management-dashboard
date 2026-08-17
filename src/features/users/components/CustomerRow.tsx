import { useTranslation } from "react-i18next";
import type { Customer } from "../../../types";
import { IoBan } from "react-icons/io5";

import { useBanUser } from "../hooks/useBanUser";
import { useUnbanUser } from "../hooks/useUnbanUser";
import { statusColors } from "../constants/tables-data";

import Table from "../../../components/common/Table";
import Menus from "../../../components/common/Menus";
import Modal from "../../../components/common/Modal";
import ConfirmationModal from "../../../components/common/ConfirmationModal";

const CustomerRow = ({ customer }: { customer: Customer }) => {
  const { id, name, email, phone, avatar, governorate, city, is_banned } =
    customer;
  const { t } = useTranslation();

  const { mutateAsync: banUser, isPending: isBanning } = useBanUser();
  const { mutateAsync: unbanUser, isPending: isUnbanning } = useUnbanUser();

  const cellStyle = "mx-3 text-nowrap";

  return (
    <Table.Row key={id}>
      <img
        src={avatar}
        alt={name}
        className={`${cellStyle} w-10 h-10 rounded-full object-cover`}
      />
      <div className="flex flex-col">
        <p className={cellStyle}>{name}</p>
        {/* <p className={cellStyle + " text-neutral-500"}>{email}</p> */}
      </div>
      <p className={cellStyle}>{email}</p>
      <p className={cellStyle}>{phone}</p>
      <p className={cellStyle}>
        {governorate?.name}, {city?.name}
      </p>
      <p
        className={
          statusColors[is_banned ? "banned" : "active"] +
          " " +
          cellStyle +
          " font-semibold capitalize"
        }
      >
        {t(is_banned ? "banned" : "active")}
      </p>
      <Modal>
        <Menus.Menu>
          <Menus.Toggle id={id} />

          <Menus.List id={id}>
            {is_banned ? (
              <Modal.Open opens="unban">
                <Menus.Button icon={<IoBan />}>
                  {t("unban customer")}
                </Menus.Button>
              </Modal.Open>
            ) : (
              <Modal.Open opens="ban">
                <Menus.Button icon={<IoBan />}>
                  {t("ban customer")}
                </Menus.Button>
              </Modal.Open>
            )}
          </Menus.List>
        </Menus.Menu>

        <Modal.Window name="unban">
          <ConfirmationModal
            action="unban"
            resource="customer"
            onConfirm={() => unbanUser({ userId: String(id) })}
            disabled={isUnbanning}
          />
        </Modal.Window>

        <Modal.Window name="ban">
          <ConfirmationModal
            action="ban"
            resource="customer"
            onConfirm={() => banUser({ userId: String(id) })}
            disabled={isBanning}
          />
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
};

export default CustomerRow;
