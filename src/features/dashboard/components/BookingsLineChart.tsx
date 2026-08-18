import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import Heading from "../../../components/ui/Heading";

const BookingsLineChart = () => {
  const data = [
    {
      name: "Jan",
      uv: 4000,
      booking: 2400,
      amt: 2400,
    },
    {
      name: "Feb",
      uv: 3000,
      booking: 1398,
      amt: 2210,
    },
    {
      name: "Mar",
      uv: 2000,
      booking: 9800,
      amt: 2290,
    },
    {
      name: "Apr",
      uv: 2780,
      booking: 3908,
      amt: 2000,
    },
    {
      name: "May",
      uv: 1890,
      booking: 4800,
      amt: 2181,
    },
  ];

  return (
    <div className="card col-span-2">
      <Heading as="h5">Booking Overview</Heading>
      <LineChart
        style={{
          width: "100%",
          maxWidth: "700px",
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
          cursor={{
            stroke: "var(--color-primary-500)",
          }}
          contentStyle={{
            backgroundColor: "var(--color-bg-main)",
            borderColor: "var(--color-tertiary)",
          }}
        />
        {/* <Legend /> */}
        <Line
          type="monotone"
          dataKey="booking"
          stroke="var(--color-primary-500)"
          dot={{
            fill: "var(--color-primary-400)",
          }}
          activeDot={{ r: 8, stroke: "var(--color-primary-500)" }}
        />
      </LineChart>
    </div>
  );
};

export default BookingsLineChart;
