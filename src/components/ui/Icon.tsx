import type { IconType } from "react-icons/lib";

interface IconProps {
  onCLick?: () => void;
  Icon: IconType;
}

const Icon = ({ onCLick, Icon }: IconProps) => {
  return (
    <Icon
      onClick={onCLick}
      className="text-primary-600 text-2xl w-fit cursor-pointer hover:text-primary-500"
    />
  );
};

export default Icon;
