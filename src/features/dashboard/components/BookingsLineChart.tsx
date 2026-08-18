import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Heading from "../../../components/ui/Heading";
import { useBookingsChart } from "../hooks/useBookingsChart";
import Loader from "../../../components/common/Loader";

const BookingsLineChart = () => {
  const { data, isLoading } = useBookingsChart();

  // 1. حماية المكون لتجنب إعطاء undefined لـ Recharts
  if (isLoading || !data || !Array.isArray(data) || data.length === 0) {
    return (
      <div className="card col-span-2 h-[350px] flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="card col-span-2">
      <Heading as="h5">Booking Overview</Heading>

      <ResponsiveContainer width="100%" height={350}>
        <LineChart
          data={data}
          margin={{
            top: 15,
            right: 15,
            left: -20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />

          <XAxis
            dataKey="label"
            tickFormatter={(val: string) => val?.split("-")[2] || val}
            tickLine={false}
          />

          <YAxis tickLine={false} allowDecimals={false} />

          <Tooltip
            cursor={{
              stroke: "var(--color-primary-500)",
              strokeWidth: 1,
            }}
            contentStyle={{
              backgroundColor: "var(--color-bg-main)",
              borderColor: "var(--color-tertiary)",
              borderRadius: "8px",
            }}
            labelFormatter={(label) => `Date: ${label}`}
          />

          <Line
            type="monotone"
            dataKey="count"
            name="Bookings"
            stroke="var(--color-primary-500)"
            strokeWidth={2}
            dot={{
              fill: "var(--color-primary-400)",
              r: 3,
            }}
            activeDot={{ r: 6, stroke: "var(--color-primary-500)" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BookingsLineChart;
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";
// import Heading from "../../../components/ui/Heading";
// import { useBookingsChart } from "../hooks/useBookingsChart";
// import Loader from "../../../components/common/Loader";

// const BookingsLineChart = () => {
//   const { data, isPending } = useBookingsChart();

//   if (isPending) return <Loader />;
//   if (!data) return;

//   return (
//     <div className="card lg:col-span-3">
//       <Heading as="h5">Booking Overview</Heading>

//       {isPending ? (
//         <Loader />
//       ) : (
//         <ResponsiveContainer width="100%" height={350}>
//           <LineChart
//             data={data}
//             margin={{
//               top: 15,
//               right: 15,
//               left: -20,
//               bottom: 5,
//             }}
//           >
//             <CartesianGrid strokeDasharray="3 3" vertical={false} />

//             <XAxis
//               dataKey="label"
//               tickFormatter={(value) => new Date(value).getDate().toString()}
//               tickLine={false}
//             />
//             <XAxis dataKey="day" tickLine={false} />

//             <YAxis dataKey="count" allowDecimals={false} tickLine={false} />

//             <Tooltip
//               cursor={{
//                 stroke: "var(--color-primary-500)",
//                 strokeWidth: 1,
//               }}
//               contentStyle={{
//                 backgroundColor: "var(--color-bg-main)",
//                 borderColor: "var(--color-tertiary)",
//                 borderRadius: "8px",
//               }}
//               labelFormatter={(label) => `Date: ${label}`}
//             />

//             <Line
//               type="monotone"
//               dataKey="count"
//               name="Bookings"
//               stroke="var(--color-primary-500)"
//               strokeWidth={2}
//               dot={{
//                 fill: "var(--color-primary-400)",
//                 r: 3,
//               }}
//               activeDot={{ r: 6, stroke: "var(--color-primary-500)" }}
//             />
//           </LineChart>
//         </ResponsiveContainer>
//       )}
//     </div>
//   );
// };

// export default BookingsLineChart;

// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
// } from "recharts";
// import Heading from "../../../components/ui/Heading";
// import { useBookingsChart } from "../hooks/useBookingsChart";

// const BookingsLineChart = () => {
//   const { data } = useBookingsChart();
//   console.log("data", data!);

//   return (
//     <div className="card col-span-2">
//       <Heading as="h5">Booking Overview</Heading>
//       <LineChart
//         style={{
//           width: "100%",
//           maxWidth: "700px",
//           height: "100%",
//           maxHeight: "450px",
//         }}
//         responsive
//         data={data}
//         margin={{
//           top: 5,
//           right: 8,
//           left: 0,
//           bottom: 5,
//         }}
//       >
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="name" />
//         <YAxis width="auto" />
//         <Tooltip
//           cursor={{
//             stroke: "var(--color-primary-500)",
//           }}
//           contentStyle={{
//             backgroundColor: "var(--color-bg-main)",
//             borderColor: "var(--color-tertiary)",
//           }}
//         />
//         {/* <Legend /> */}
//         <Line
//           type="monotone"
//           dataKey="booking"
//           stroke="var(--color-primary-500)"
//           dot={{
//             fill: "var(--color-primary-400)",
//           }}
//           activeDot={{ r: 8, stroke: "var(--color-primary-500)" }}
//         />
//       </LineChart>
//     </div>
//   );
// };

// export default BookingsLineChart;

// const data1 = [
//   {
//     name: "Jan",
//     uv: 4000,
//     booking: 2400,
//     amt: 2400,
//   },
//   {
//     name: "Feb",
//     uv: 3000,
//     booking: 1398,
//     amt: 2210,
//   },
//   {
//     name: "Mar",
//     uv: 2000,
//     booking: 9800,
//     amt: 2290,
//   },
//   {
//     name: "Apr",
//     uv: 2780,
//     booking: 3908,
//     amt: 2000,
//   },
//   {
//     name: "May",
//     uv: 1890,
//     booking: 4800,
//     amt: 2181,
//   },
// ];
