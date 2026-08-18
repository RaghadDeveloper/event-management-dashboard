import { FaCreditCard, FaMoneyCheckAlt, FaRegUser } from "react-icons/fa";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { HiOutlineLogout } from "react-icons/hi";
import { MdMiscellaneousServices, MdNotificationsActive } from "react-icons/md";
import { TbDashboard } from "react-icons/tb";
import { GrUserWorker } from "react-icons/gr";
import { IoCalendarOutline } from "react-icons/io5";
import { GoReport } from "react-icons/go";

export const sidebarItems = [
  {
    Icon: TbDashboard,
    title: "dashboard",
    path: "/dashboard",
  },
  {
    Icon: MdMiscellaneousServices,
    title: "categories",
    path: "/categories",
  },
  {
    Icon: GrUserWorker,
    title: "service providers",
    path: "/providers",
  },
  {
    Icon: FaRegUser,
    title: "customers",
    path: "/customers",
  },
  {
    Icon: IoCalendarOutline,
    title: "bookings",
    path: "/bookings",
  },
  {
    Icon: FaMoneyCheckAlt,
    title: "transactions",
    children: [
      {
        Icon: FaCreditCard,
        title: "payments",
        path: "/transactions/payments",
      },
      {
        Icon: FaHandHoldingDollar,
        title: "payouts",
        path: "/transactions/payouts",
      },
    ],
  },
  {
    Icon: MdNotificationsActive,
    title: "notifications",
    path: "/notifications",
  },
  {
    Icon: GoReport,
    title: "bookings complaints",
    path: "/complaints",
  },
  {
    Icon: HiOutlineLogout,
    title: "logout",
  },
];
