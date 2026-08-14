import { FaMoneyCheckAlt, FaRegUser } from "react-icons/fa";
import { HiOutlineLogout } from "react-icons/hi";
import { MdMiscellaneousServices, MdNotificationsActive } from "react-icons/md";
import { TbDashboard, TbMessages } from "react-icons/tb";
import { GrUserWorker } from "react-icons/gr";
import { IoCalendarOutline } from "react-icons/io5";

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
    path: "/transactions",
  },
  {
    Icon: MdNotificationsActive,
    title: "notifications",
    path: "/notifications",
  },
  {
    Icon: TbMessages,
    title: "suggestions_and_complaints",
    path: "/feedback",
  },
  {
    Icon: HiOutlineLogout,
    title: "logout",
  },
];
