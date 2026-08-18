import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";
import Heading from "../../../components/ui/Heading";
import { useTheme } from "../../../hooks/useTheme";

const BookingsStatusPieChart = () => {
  const { darkMode } = useTheme();

  const data = [
    { name: "Group A", value: 400, color: "var(--color-primary-200)" },
    { name: "Group B", value: 300, color: "var(--color-primary-300)" },
    { name: "Group C", value: 300, color: "var(--color-primary-400)" },
    { name: "Group D", value: 200, color: "var(--color-primary-500)" },
    { name: "Group A", value: 400, color: "var(--color-primary-600)" },
    { name: "Group B", value: 300, color: "var(--color-primary-700)" },
    { name: "Group C", value: 300, color: "var(--color-primary-800)" },
    {
      name: "Group D",
      value: 200,
      color: !darkMode
        ? "var(--color-primary-800)"
        : "var(--color-primary-100)",
    },
  ];

  return (
    <div className="card col-span-2">
      <Heading as="h5">Bookings Status</Heading>
      <PieChart
        style={{
          width: "100%",
          maxWidth: "700px",
          maxHeight: "450px",
          aspectRatio: 1,
        }}
        responsive
        margin={{
          top: 0,
          right: 8,
          bottom: 0,
          left: 8,
        }}
      >
        <Pie
          data={data}
          nameKey="name"
          dataKey="value"
          innerRadius={85}
          outerRadius={110}
          cx="40%"
          cy="50%"
          paddingAngle={3}
        >
          {data.map((entry) => (
            <Cell key={entry.name} fill={entry.color} stroke={entry.color} />
          ))}
        </Pie>
        <Legend
          verticalAlign="middle"
          align="right"
          width="30%"
          layout="vertical"
          iconSize={15}
          iconType="circle"
        />
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

export default BookingsStatusPieChart;
