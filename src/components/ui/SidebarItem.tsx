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

  const style = {
    base: `w-full flex items-center gap-3 p-3 transition-all hover:text-primary-500 cursor-pointer ${
      isClose && "justify-center"
    }`,
    active: `text-primary-500 bg-bg-secondary/80 dark:bg-bg-secondary/40 border-s-5`,
    h2: `capitalize text-lg font-semibold ${isClose && "hidden"}`,
    icon: `text-2xl text-primary-500`,
  };

  // children
  if (children)
    return (
      <div className="w-full">
        <div
          className={`${style.base} ${isChildActive && style.active}`}
          onClick={() => setOpen((open) => !open)}
        >
          <Icon className={style.icon} />
          <h2 className={style.h2}>{t(title)}</h2>
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
                  `py-2 hover:text-primary-400 bg-transparent border-none ${style.base} ${
                    isActive ? style.active : ""
                  }`
                }
              >
                <child.Icon className={style.icon} />
                <h2 className={style.h2}>{t(child.title)}</h2>
              </NavLink>
            ))}
        </div>
      </div>
    );
  // path
  else if (path)
    return (
      <NavLink
        to={path}
        className={({ isActive }) =>
          `${style.base} ${isActive && style.active}`
        }
      >
        <Icon className={style.icon} />
        <h2 className={style.h2}>{t(title)}</h2>
      </NavLink>
    );
  // onClick
  else
    return (
      <div className={style.base} onClick={onClick}>
        <Icon className={style.icon} />
        <h2 className={style.h2}>{t(title)}</h2>
      </div>
    );
};

export default SidebarItem;
