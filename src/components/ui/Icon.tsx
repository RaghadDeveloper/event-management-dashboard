import type { IconType } from "react-icons/lib";

interface IconProps {
  onClick?: () => void;
  Icon: IconType;
}

const Icon = ({ onClick, Icon }: IconProps) => {
  return (
    <Icon
      onClick={onClick}
      className="text-primary-600 text-2xl w-fit cursor-pointer hover:text-primary-500"
    />
  );
};

export default Icon;
