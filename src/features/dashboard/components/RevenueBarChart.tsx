import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import Heading from "../../../components/ui/Heading";

const RevenueBarChart = () => {
  const data = [
    {
      name: "Jan",
      uv: 4000,
      revenue: 2400,
      amt: 2400,
    },
    {
      name: "Feb",
      uv: 3000,
      revenue: 1398,
      amt: 2210,
    },
    {
      name: "Mar",
      uv: 2000,
      revenue: 9800,
      amt: 2290,
    },
    {
      name: "Apr",
      uv: 2780,
      revenue: 3908,
      amt: 2000,
    },
    {
      name: "May",
      uv: 1890,
      revenue: 4800,
      amt: 2181,
    },
    {
      name: "Jun",
      uv: 2390,
      revenue: 3800,
      amt: 2500,
    },
    {
      name: "Jan",
      uv: 4000,
      revenue: 2400,
      amt: 2400,
    },
    {
      name: "Feb",
      uv: 3000,
      revenue: 1398,
      amt: 2210,
    },
    {
      name: "Mar",
      uv: 2000,
      revenue: 9800,
      amt: 2290,
    },
    {
      name: "Apr",
      uv: 2780,
      revenue: 3908,
      amt: 2000,
    },
    {
      name: "May",
      uv: 1890,
      revenue: 4800,
      amt: 2181,
    },
    {
      name: "Jun",
      uv: 2390,
      revenue: 3800,
      amt: 2500,
    },
  ];

  return (
    <div className="card col-span-4">
      <Heading as="h5">Revenue Overview</Heading>
      <BarChart
        style={{
          width: "100%",
        //   maxWidth: "700px",
          height: "100%",
          maxHeight: "450px",
        }}
        responsive
        data={data}
        margin={{
          top: 5,
          right: 8,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis width="auto" />
        <Tooltip
          contentStyle={{
            backgroundColor: "var(--color-bg-main)",
            borderColor: "var(--color-tertiary)",
          }}
        />
        {/* <Legend /> */}
        <Bar
          dataKey="revenue"
          fill="var(--color-primary-500)"
          activeBar={{
            fill: "var(--color-primary-700)",
          }}
          radius={[10, 10, 0, 0]}
        />
      </BarChart>
    </div>
  );
};

export default RevenueBarChart;
