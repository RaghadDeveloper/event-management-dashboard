import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import Icon from "./Icon";
import { useTheme } from "../../hooks/useTheme";

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <Icon
      Icon={darkMode ? HiOutlineSun : HiOutlineMoon}
      onClick={toggleTheme}
    />
  );
};

export default ThemeToggle;
