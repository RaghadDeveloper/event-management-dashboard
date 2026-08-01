import { MdNotificationsActive, MdOutlineTranslate } from "react-icons/md";
import { HiOutlineLogout, HiOutlineMoon } from "react-icons/hi";
import { useTranslation } from "react-i18next";

import { useLogout } from "../../features/authentication/hooks/useLogout";

import Icon from "./Icon";
import Divider from "./Divider";

const Header = () => {
  const { i18n } = useTranslation();
  const { mutate: logout } = useLogout();

  const handleLanguageChange = () => {
    i18n.changeLanguage(i18n.language === "ar" ? "en" : "ar");
  };

  return (
    <header className="bg-gray-100 flex justify-end items-center border-l-2 border-l-gray-200 px-3 py-2.5 gap-4 shadow-md">
      <Icon Icon={MdNotificationsActive} />
      <Icon Icon={MdOutlineTranslate} onClick={handleLanguageChange} />
      <Divider className="vertical" />
      <Icon Icon={HiOutlineMoon} />
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
