import type { IconType } from "react-icons/lib";

interface MiniInfoProps {
  Icon?: IconType;
  title?: string;
  value: string;
  col?: boolean;
}
const MiniInfo = ({ Icon, title, value, col }: MiniInfoProps) => {
  if (!value) return null;

  return (
    <div className={`flex gap-2 ${col ? "flex-col" : "items-center"}`}>
      <div className="flex gap-2 items-center">
        {Icon && <Icon className="text-primary-500" />}
        {title && <p className="font-semibold">{title}:</p>}
      </div>
      <p className="text-neutral-500">{value}</p>
    </div>
  );
};

export default MiniInfo;
