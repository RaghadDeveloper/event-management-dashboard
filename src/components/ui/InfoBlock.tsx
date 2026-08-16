import type { InfoBlockProps } from "../../types";
import { getLink } from "../../utils/helpers";

const InfoBlock = ({
  Icon,
  title,
  value,
  col,
  className,
  linkType,
}: InfoBlockProps) => {
  return (
    <div
      className={`text-lg grid ${
        col
          ? "grid-cols-1 gap-4"
          : " grid-cols-1 min-[540px]:grid-cols-[12rem_1fr]"
      }`}
    >
      <div className="flex items-center gap-2 h-fit text-xl">
        {Icon && <Icon className="text-primary-600" />}
        <h3 className="font-semibold ">{title}: </h3>
      </div>

      {linkType ? (
        <a
          className={`w-fit ${className}`}
          href={getLink(linkType, value)}
          target="_blank"
        >
          {value}
        </a>
      ) : (
        <pre className={`font-[inherit] text-wrap ${className}`}>{value}</pre>
      )}
    </div>
  );
};

export default InfoBlock;
