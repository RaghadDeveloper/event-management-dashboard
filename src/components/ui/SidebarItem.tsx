import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { useTranslation } from "react-i18next";
import type { IconType } from "react-icons/lib";

interface NavData {
  path?: string;
  Icon: IconType;
  title: string;
  children?: Array<NavData>;
}

interface SidebarItemProps {
  nav: NavData;
  isClose: boolean;
  onClick?: () => void;
}

const SidebarItem = ({ nav, isClose, onClick }: SidebarItemProps) => {
  const { path, Icon, title, children } = nav;
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  const isChildActive = children?.some((child) =>
    location.pathname.startsWith(child?.path ?? ""),
  );

  const style = `w-full flex items-center gap-3 p-3 transition-all hover:text-primary-500 cursor-pointer ${
    isClose && "justify-center"
  }`;

  if (children)
    return (
      <div className="w-full">
        <div
          className={`${style} ${
            isChildActive
              ? "text-primary-500 bg-bg-secondary/80 dark:bg-bg-secondary/40 border-s-5"
              : ""
          }`}
          onClick={() => setOpen((open) => !open)}
        >
          <Icon className="text-2xl text-primary-500" />
          <h2 className={`text-lg font-semibold ${isClose && "hidden"}`}>
            {t(title)}
          </h2>
          {children && !isClose && (
            <IoIosArrowDown
              className={`ml-auto mr-4 transition-all ${
                open ? "rotate-180" : ""
              }`}
            />
          )}
        </div>

        <div className="w-[90%] ml-auto">
          {children &&
            open &&
            children.map((child) => (
              <NavLink
                key={child.title}
                to={child.path || ""}
                className={({ isActive }) =>
                  `py-2 hover:text-primary-400 ${style} ${
                    isActive ? "text-primary-500" : ""
                  }`
                }
              >
                <child.Icon className="text-2xl text-primary-500" />
                <h2 className={`text-lg font-semibold ${isClose && "hidden"}`}>
                  {t(child.title)}
                </h2>
              </NavLink>
            ))}
        </div>
      </div>
    );
  else if (path)
    return (
      <NavLink
        to={path}
        className={({ isActive }) =>
          `${style} ${
            isActive
              ? "text-primary-500 bg-bg-secondary/80 dark:bg-bg-secondary/40 border-s-5"
              : ""
          }`
        }
      >
        <Icon className="text-2xl text-primary-500" />
        <h2 className={`text-lg font-semibold ${isClose && "hidden"}`}>
          {t(title)}
        </h2>
      </NavLink>
    );
  else
    return (
      <div className={`${style} cursor-pointer`} onClick={onClick}>
        <Icon className="text-2xl text-primary-500" />
        <h2 className={`text-lg font-semibold ${isClose && "hidden"}`}>
          {t(title)}
        </h2>
      </div>
    );
};

export default SidebarItem;
