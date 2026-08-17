import { MdNotificationsActive, MdOutlineTranslate } from "react-icons/md";
import { HiOutlineLogout } from "react-icons/hi";
import { useTranslation } from "react-i18next";

import { queryClient } from "../../services/query/client";
import { useLogout } from "../../features/authentication/hooks/useLogout";

import Icon from "./Icon";
import Divider from "./Divider";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";
import NotificationsList from "../../features/notifications/components/NotificationsList";
import useOutsideClick from "../../hooks/useOutsideClick";

const Header = () => {
  const { i18n } = useTranslation();
  const { mutate: logout } = useLogout();
  const [showNotifications, setShowNotifications] = useState(false);

  const ref = useOutsideClick<HTMLDivElement>(() => {
    setShowNotifications(false);
  });

  const handleLanguageChange = async () => {
    const language = i18n.language === "ar" ? "en" : "ar";
    await i18n.changeLanguage(language);
    queryClient.invalidateQueries();
  };

  return (
    <header className="bg-bg-main flex justify-end items-center border-s-2 border-s-bg-secondary px-3 py-2.5 gap-4 shadow-md border-b-4 border-bg-secondary">
      <div className="relative" ref={ref}>
        <div
          className="relative cursor-pointer"
          onClick={() => setShowNotifications((prev) => !prev)}
        >
          <Icon Icon={MdNotificationsActive} />
        </div>
        {showNotifications && (
          <NotificationsList setShowNotifications={setShowNotifications} />
        )}
      </div>

      <Icon Icon={MdOutlineTranslate} onClick={handleLanguageChange} />
      <Divider className="vertical" />
      <ThemeToggle />
      <Icon Icon={HiOutlineLogout} onClick={logout} />
      <Divider className="vertical" />
      <img
        src="/assets/images/profileImg.jpg"
        alt="profile img"
        className="w-10 h-10 rounded-full"
      />
    </header>
  );
};

export default Header;
