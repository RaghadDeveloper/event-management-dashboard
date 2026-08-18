import {
  Cell,
  Legend,
  Pie,
  PieChart,
  Sector,
  Tooltip,
  type PieSectorDataItem,
} from "recharts";
import Heading from "../../../components/ui/Heading";

const renderActiveShape = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  startAngle,
  endAngle,
  fill,
  payload,
  percent,
  value,
}: PieSectorDataItem) => {
  const RADIAN = Math.PI / 180;
  const sin = Math.sin(-RADIAN * (midAngle ?? 1));
  const cos = Math.cos(-RADIAN * (midAngle ?? 1));
  const sx = (cx ?? 0) + ((outerRadius ?? 0) + 10) * cos;
  const sy = (cy ?? 0) + ((outerRadius ?? 0) + 10) * sin;
  const mx = (cx ?? 0) + ((outerRadius ?? 0) + 30) * cos;
  const my = (cy ?? 0) + ((outerRadius ?? 0) + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={(outerRadius ?? 0) + 6}
        outerRadius={(outerRadius ?? 0) + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`PV ${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`(Rate ${((percent ?? 1) * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

const ProviderStatus = () => {
  const data = [
    { name: "Group B", value: 300, color: "var(--color-primary-300)" },
    { name: "Group C", value: 300, color: "var(--color-primary-400)" },
    { name: "Group D", value: 200, color: "var(--color-primary-500)" },
  ];

  return (
    <div className="card col-span-2">
      <Heading as="h5">Service Providers Status</Heading>
      <PieChart
        style={{
          width: "100%",
          maxWidth: "700px",
          height: "100%",
          maxHeight: "380px",
          aspectRatio: 1.6,
        }}
        responsive
        margin={{
          top: 10,
          right: 20,
          bottom: 0,
          left: 20,
        }}
      >
        <Legend
          verticalAlign="top"
          align="center"
          layout="horizontal"
          iconSize={15}
          iconType="circle"
          wrapperStyle={{
            top: 80,
            left: 20,
            right: 20,
            position: "absolute",
          }}
        />

        <Pie
          activeShape={renderActiveShape}
          data={data}
          nameKey="name"
          dataKey="value"
          innerRadius={85}
          outerRadius={110}
          cx="50%"
          cy="72%"
          startAngle={180}
          endAngle={0}
          paddingAngle={3}
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={entry.color}
              stroke={entry.color}
            />
          ))}
        </Pie>

        <Tooltip
          contentStyle={{
            backgroundColor: "var(--color-bg-main)",
            borderColor: "var(--color-tertiary)",
          }}
        />
      </PieChart>
    </div>
  );
};

export default ProviderStatus;
