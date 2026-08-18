import { useTranslation } from "react-i18next";
import type { Provider } from "../../../types";
import { IoBan, IoEyeOutline } from "react-icons/io5";
import { useNavigate } from "react-router";
import { MdCancel, MdCheckCircleOutline } from "react-icons/md";

import { useApproveProvider } from "../hooks/useApproveProvider";
import { useBanUser } from "../hooks/useBanUser";
import { useUnbanUser } from "../hooks/useUnbanUser";
import { statusColors } from "../constants/tables-data";

import Table from "../../../components/common/Table";
import Menus from "../../../components/common/Menus";
import Modal from "../../../components/common/Modal";
import ConfirmationModal from "../../../components/common/ConfirmationModal";
import RejectProvider from "./RejectProvider";

const ProviderRow = ({ provider }: { provider: Provider }) => {
  const {
    id,
    service_provider_id,
    business_name,
    name,
    email,
    phone,
    governorate,
    city,
    avatar,
    approval_status,
    is_banned,
    years_of_experience,
  } = provider;
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { mutateAsync: banUser, isPending: isBanning } = useBanUser();
  const { mutateAsync: unbanUser, isPending: isUnbanning } = useUnbanUser();
  const { mutateAsync: approveProvider, isPending: isApproving } =
    useApproveProvider();

  const cellStyle = "mx-3 text-nowrap";

  return (
    <Table.Row>
      <img
        src={avatar}
        alt={name}
        className={`${cellStyle} min-w-10 w-12 h-12 rounded-full object-cover`}
      />
      <div className="flex flex-col">
        <p className={cellStyle}>{name}</p>
        <p className={cellStyle + " text-neutral-500"}>{email}</p>
      </div>

      <div>
        <p className={cellStyle}>{business_name}</p>
        <p className={cellStyle + " text-neutral-500"}>
          {years_of_experience} {t("years of experience")}
        </p>
      </div>
      <p className={cellStyle}>{phone}</p>
      <p className={cellStyle}>
        {governorate?.name}, {city?.name}
      </p>

      <p
        className={`
          text-${statusColors[approval_status]}
          font-semibold capitalize
          ${cellStyle}`}
      >
        {t(approval_status)}
      </p>
      <p
        className={`text-${statusColors[is_banned ? "banned" : "active"]} 
          ${cellStyle} font-semibold capitalize`}
      >
        {t(is_banned ? "banned" : "active")}
      </p>

      <div onClick={(e) => e.stopPropagation()}>
        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={id} />

            <Menus.List id={id}>
              <Menus.Button
                icon={<IoEyeOutline />}
                onClick={() => navigate(`${service_provider_id}`)}
              >
                {t("view profile")}
              </Menus.Button>
              {approval_status === "pending" && (
                <>
                  <Modal.Open opens="approve">
                    <Menus.Button icon={<MdCheckCircleOutline />}>
                      {t("approve service provider")}
                    </Menus.Button>
                  </Modal.Open>
                  <Modal.Open opens="reject">
                    <Menus.Button icon={<MdCancel />}>
                      {t("reject service provider")}
                    </Menus.Button>
                  </Modal.Open>
                </>
              )}
              {is_banned ? (
                <Modal.Open opens="unban">
                  <Menus.Button icon={<IoBan />}>
                    {t("unban service provider")}
                  </Menus.Button>
                </Modal.Open>
              ) : (
                <Modal.Open opens="ban">
                  <Menus.Button icon={<IoBan />}>
                    {t("ban service provider")}
                  </Menus.Button>
                </Modal.Open>
              )}
            </Menus.List>
          </Menus.Menu>

          <Modal.Window name="unban">
            <ConfirmationModal
              action="unban"
              resource="service provider"
              onConfirm={() =>
                unbanUser({
                  userId: String(id),
                  id: String(service_provider_id),
                })
              }
              disabled={isUnbanning}
            />
          </Modal.Window>

          <Modal.Window name="ban">
            <ConfirmationModal
              action="ban"
              resource="service provider"
              onConfirm={() =>
                banUser({ userId: String(id), id: String(service_provider_id) })
              }
              disabled={isBanning}
            />
          </Modal.Window>

          <Modal.Window name="approve">
            <ConfirmationModal
              action="approve"
              resource="service provider"
              onConfirm={() => approveProvider(String(service_provider_id))}
              disabled={isApproving}
              confirmButtonVariant="primary"
            />
          </Modal.Window>

          <Modal.Window name="reject">
            <RejectProvider providerId={String(service_provider_id)} />
          </Modal.Window>
        </Modal>
      </div>
    </Table.Row>
  );
};

export default ProviderRow;
