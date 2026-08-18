import {
  HiOutlineCalendar,
  HiOutlineCreditCard,
  HiOutlineUserGroup,
} from "react-icons/hi";
import Heading from "../components/ui/Heading";
import BookingsLineChart from "../features/dashboard/components/BookingsLineChart";
import BookingsStatusPieChart from "../features/dashboard/components/BookingsStatusPieChart";
import CategoriesBarChart from "../features/dashboard/components/CategoriesBarChart";
import DashboardBox from "../features/dashboard/components/DashboardBox";
import DashboardFilter from "../features/dashboard/components/DashboardFilter";
import ProviderStatus from "../features/dashboard/components/ProviderStatus";
import RevenueBarChart from "../features/dashboard/components/RevenueBarChart";
import {
  HiOutlineArrowPath,
  HiOutlineBanknotes,
  HiOutlineUserPlus,
} from "react-icons/hi2";
import { useOverview } from "../features/dashboard/hooks/useOverview";
import Loader from "../components/common/Loader";

const Dashboard = () => {
  const { data, isPending } = useOverview();

  if (isPending) return <Loader />;

  if (!data) return <div>No data available</div>;
  const {
    customers_count,
    service_providers_count,
    bookings_count,
    payments_count,
    refunds_count,
    payouts_count,
  } = data;

  const data1 = [
    {
      title: "Customers",
      total_value: customers_count,
      // change_percentage: 10,
      icon: HiOutlineUserGroup,
    },
    {
      title: "Providers",
      total_value: service_providers_count,
      // change_percentage: -12,
      icon: HiOutlineUserPlus,
    },
    {
      title: "Bookings",
      total_value: bookings_count,
      // change_percentage: 7,
      icon: HiOutlineCalendar,
    },
    {
      title: "Payments",
      total_value: payments_count,
      // change_percentage: 10,
      icon: HiOutlineCreditCard,
    },
    {
      title: "Refunds",
      total_value: refunds_count,
      // change_percentage: -10,
      icon: HiOutlineArrowPath,
    },
    {
      title: "Payouts",
      total_value: payouts_count,
      // change_percentage: -10,
      icon: HiOutlineBanknotes,
    },
  ];

  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <Heading as="h2">Dashboard</Heading>
        <DashboardFilter />
      </div>

      {isPending ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data1?.map((item, index) => (
            <DashboardBox key={index} item={item} />
          ))}

          <BookingsLineChart />
          {/* <BookingsStatusPieChart /> */}
          {/* <RevenueBarChart /> */}
          {/* <CategoriesBarChart /> */}
          <ProviderStatus />
        </div>
      )}
    </section>
  );
};

export default Dashboard;
