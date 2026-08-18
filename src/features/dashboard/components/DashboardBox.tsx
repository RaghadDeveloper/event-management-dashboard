import { GoArrowDownRight, GoArrowUpRight } from "react-icons/go";
import AnimatedNumber from "../../../components/common/AnimatedNumber";
import type { IconType } from "../../../types";

const DashboardBox = ({
  item,
}: {
  item: {
    icon: IconType;
    title: string;
    total_value: number;
    change_percentage: number;
  };
}) => {
  return (
    <div className="bg-bg-main p-4 rounded-md flex gap-6 shadow-md">
      {item.icon && <item.icon className="text-3xl text-primary-500" />}
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-medium ">{item.title}</h3>
        <span className="text-2xl font-semibold text-primary-500">
          <AnimatedNumber target={item.total_value || 0} />
        </span>
        <div className="flex items-center gap-2">
          <span
            className={`${item.change_percentage >= 0 ? "text-success" : "text-danger"} flex items-center gap-1`}
          >
            {item.change_percentage >= 0 ? (
              <GoArrowUpRight />
            ) : (
              <GoArrowDownRight />
            )}
            <AnimatedNumber target={Math.abs(item.change_percentage) || 0} />%
          </span>

          <span>vs last month</span>
        </div>
      </div>
    </div>
  );
};

export default DashboardBox;
