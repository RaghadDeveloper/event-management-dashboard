import { MdNotificationsActive } from "react-icons/md";
import { TbMessages } from "react-icons/tb";
import { HiOutlineLogout, HiOutlineMoon } from "react-icons/hi";

import Icon from "./Icon";
import Divider from "./Divider";

const Header = () => {
  return (
    <header className="bg-gray-100 flex justify-end items-center border-l-2 border-l-gray-200 px-3 py-2.5 gap-4 shadow-md">
      <Icon Icon={MdNotificationsActive} />
      <Icon Icon={TbMessages} />
      <Divider className="vertical" />
      <Icon Icon={HiOutlineMoon} />
      <Icon Icon={HiOutlineLogout} />
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
