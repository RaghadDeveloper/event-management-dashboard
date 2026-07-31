import { NavLink, useLocation } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
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
              ? "text-primary-600 bg-gray-200 border-l-5"
              : "text-primary-700"
          }`}
          onClick={() => setOpen((open) => !open)}
        >
          <Icon className="text-2xl" />
          <h2 className={`text-lg font-semibold ${isClose && "hidden"}`}>
            {title}
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
                    isActive ? "text-primary-600" : "text-primary-700"
                  }`
                }
              >
                <child.Icon className="text-2xl" />
                <h2 className={`text-lg font-semibold ${isClose && "hidden"}`}>
                  {child.title}
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
              ? "text-primary-600 bg-gray-200 border-l-5"
              : "text-primary-700"
          }`
        }
      >
        <Icon className="text-2xl" />
        <h2 className={`text-lg font-semibold ${isClose && "hidden"}`}>
          {title}
        </h2>
      </NavLink>
    );
  else
    return (
      <div
        className={`${style} text-primary-700 cursor-pointer`}
        onClick={onClick}
      >
        <Icon className="text-2xl" />
        <h2 className={`text-lg font-semibold ${isClose && "hidden"}`}>
          {title}
        </h2>
      </div>
    );
};

export default SidebarItem;
