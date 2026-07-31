import { FaMoneyCheckAlt, FaRegUser } from "react-icons/fa";
import { HiOutlineLogout } from "react-icons/hi";
import { MdMiscellaneousServices, MdNotificationsActive } from "react-icons/md";
import { TbDashboard, TbMessages } from "react-icons/tb";
import { GrUserWorker } from "react-icons/gr";

export const sidebarItems = [
  {
    Icon: TbDashboard,
    title: "Dashboard",
    path: "/dashboard",
  },
  {
    Icon: MdMiscellaneousServices,
    title: "Services",
    path: "/services",
  },
  {
    Icon: GrUserWorker,
    title: "Providers",
    path: "/providers",
  },
  {
    Icon: FaRegUser,
    title: "Customers",
    path: "/customers",
  },
  {
    Icon: FaMoneyCheckAlt,
    title: "Transactions",
    path: "/transactions",
  },
  {
    Icon: MdNotificationsActive,
    title: "Notifications",
    path: "/notifications",
  },
  {
    Icon: TbMessages,
    title: "Suggestions & Complaints",
    path: "/feedback",
  },
  {
    Icon: HiOutlineLogout,
    title: "Logout",
  },
];
