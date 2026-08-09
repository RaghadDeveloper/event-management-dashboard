import { useTranslation } from "react-i18next";
import type { Customer } from "../../../types";
import { IoBan } from "react-icons/io5";

import { useBanUser } from "../hooks/useBanUser";
import { useUnbanUser } from "../hooks/useUnbanUser";

import Table from "../../../components/common/Table";
import Menus from "../../../components/common/Menus";
import Modal from "../../../components/common/Modal";
import ConfirmationModal from "../../../components/common/ConfirmationModal";

const CustomerRow = ({ customer }: { customer: Customer }) => {
  const { id, name, email, phone, avatar, address, is_banned } = customer;
  const { t } = useTranslation();

  const { mutateAsync: banUser, isPending: isBanning } = useBanUser();
  const { mutateAsync: unbanUser, isPending: isUnbanning } = useUnbanUser();

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
      <Modal>
        <Menus.Menu>
          <Menus.Toggle id={id} />

          <Menus.List id={id}>
            {is_banned ? (
              <Modal.Open opens="unban">
                <Menus.Button icon={<IoBan />}>{t("unban customer")}</Menus.Button>
              </Modal.Open>
            ) : (
              <Modal.Open opens="ban">
                <Menus.Button icon={<IoBan />}>{t("ban customer")}</Menus.Button>
              </Modal.Open>
            )}
          </Menus.List>
        </Menus.Menu>

        <Modal.Window name="unban">
          <ConfirmationModal
            action="unban"
            resource="customer"
            onConfirm={() => unbanUser(String(id))}
            disabled={isUnbanning}
          />
        </Modal.Window>

        <Modal.Window name="ban">
          <ConfirmationModal
            action="ban"
            resource="customer"
            onConfirm={() => banUser(String(id))}
            disabled={isBanning}
          />
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
};

export default CustomerRow;
