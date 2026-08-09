import { MdNotificationsActive, MdOutlineTranslate } from "react-icons/md";
import { HiOutlineLogout } from "react-icons/hi";
import { useTranslation } from "react-i18next";

import { queryClient } from "../../services/query/client";
import { useLogout } from "../../features/authentication/hooks/useLogout";

import Icon from "./Icon";
import Divider from "./Divider";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const { i18n } = useTranslation();
  const { mutate: logout } = useLogout();

  const handleLanguageChange = async () => {
    const language = i18n.language === "ar" ? "en" : "ar";
    await i18n.changeLanguage(language);
    queryClient.invalidateQueries();
  };

  return (
    <header className="bg-bg-main flex justify-end items-center border-s-2 border-s-bg-secondary px-3 py-2.5 gap-4 shadow-md border-b-4 border-bg-secondary">
      <Icon Icon={MdNotificationsActive} />
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
