import { type SetStateAction, type Dispatch } from "react";
import { FiChevronLeft } from "react-icons/fi";

import { sidebarItems } from "../../data/sidebar";
import { useLogout } from "../../features/authentication/hooks/useLogout";

import SidebarItem from "./SidebarItem";
import Divider from "./Divider";
import i18n from "../../i18n";

interface SideBarProps {
  isClose: boolean;
  setIsClose: Dispatch<SetStateAction<boolean>>;
}

const Sidebar = ({ isClose, setIsClose }: SideBarProps) => {
  const isRTL = i18n.language === "ar";
  const { mutate: logout } = useLogout();

  const handleLogout = () => {
    logout();
  };

  return (
    <aside className="relative row-span-full bg-gray-100 shadow-md overflow-y-auto no-scrollbar pb-6">
      <span
        className={`fixed top-15 bg-primary-600 rounded-full shadow-xl cursor-pointer p-1.5 font-black m-1 z-10 ${
          isClose ? "inset-s-20" : " inset-s-76"
        }`}
        onClick={() => setIsClose((isClose) => !isClose)}
      >
        <FiChevronLeft
          className={`text-gray-50 transition duration-300 ease-in-out 
             ${isClose && isRTL ? "rotate-0" : "rotate-180w"}
             ${isClose && !isRTL ? "rotate-180" : ""}
             ${!isClose && isRTL ? "rotate-180" : ""}
             `}
        />
      </span>

      <div className="flex flex-col justify-center items-center p-4">
        <img
          src="/assets/images/full-logo.png"
          alt="logo"
          className={isClose ? "hidden" : ""}
        />
        <img
          src="/assets/images/logo.png"
          alt="logo"
          className={isClose ? "w-12" : "hidden"}
        />
      </div>

      <div className="flex flex-col items-center gap-1">
        {sidebarItems.map((item, index) => {
          const isLogoutItem = item.title === "Logout";

          return index % 2 !== 0 && index !== sidebarItems.length - 1 ? (
            <div
              className="flex flex-col items-center gap-2 w-full"
              key={item.title}
            >
              <SidebarItem nav={item} isClose={isClose} />
              <Divider />
            </div>
          ) : (
            <SidebarItem
              key={item.title}
              nav={item}
              isClose={isClose}
              onClick={isLogoutItem ? handleLogout : undefined}
            />
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
