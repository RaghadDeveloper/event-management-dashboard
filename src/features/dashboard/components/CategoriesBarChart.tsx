import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
  LabelList,
} from "recharts";
import Heading from "../../../components/ui/Heading";

const CategoriesBarChart = () => {
  const data = [
    { name: "photography", bookings: 4000, color: "var(--color-primary-200)" },
    { name: "venues", bookings: 3000, color: "var(--color-primary-300)" },
    { name: "music", bookings: 2000, color: "var(--color-primary-400)" },
    { name: "dessert", bookings: 2780, color: "var(--color-primary-500)" },
    { name: "catering", bookings: 1890, color: "var(--color-primary-600)" },
    { name: "cars", bookings: 2390, color: "var(--color-primary-700)" },
    { name: "decoration", bookings: 2390, color: "var(--color-primary-800)" },
    { name: "mackup", bookings: 2390, color: "var(--color-primary-900)" },
  ];
  const sortedData = [...data].sort((a, b) => b.bookings - a.bookings);

  return (
    <div className="card col-span-2">
      <Heading as="h5">Most Popular Categories</Heading>

      <BarChart
        style={{
          width: "100%",
          maxWidth: "700px",
          height: "100%",
          maxHeight: "450px",
        }}
        responsive
        layout="vertical"
        data={sortedData}
        margin={{
          top: 10,
          right: 40,
          left: 50,
          bottom: 10,
        }}
      >
        <XAxis type="number" hide />
        <YAxis
          dataKey="name"
          type="category"
          width={50}
          axisLine={false}
          tickLine={false}
        />

        <Bar dataKey="bookings" name="bookings" radius={[0, 10, 10, 0]}>
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={entry.color}
              stroke={entry.color}
            />
          ))}

          <LabelList
            dataKey="bookings"
            position="right"
            fill="var(--color-text-main, #333)"
            style={{ fontSize: "16px", fontWeight: "600" }}
          />
        </Bar>

        <Tooltip
          contentStyle={{
            backgroundColor: "var(--color-bg-main)",
            borderColor: "var(--color-tertiary)",
          }}
        />
      </BarChart>
    </div>
  );
};

export default CategoriesBarChart;
