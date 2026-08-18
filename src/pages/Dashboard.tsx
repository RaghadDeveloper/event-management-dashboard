import { HiOutlineCalendar, HiOutlineUserGroup } from "react-icons/hi";
import Heading from "../components/ui/Heading";
import BookingsLineChart from "../features/dashboard/components/BookingsLineChart";
import BookingsStatusPieChart from "../features/dashboard/components/BookingsStatusPieChart";
import CategoriesBarChart from "../features/dashboard/components/CategoriesBarChart";
import DashboardBox from "../features/dashboard/components/DashboardBox";
import DashboardFilter from "../features/dashboard/components/DashboardFilter";
import ProviderStatus from "../features/dashboard/components/ProviderStatus";
import RevenueBarChart from "../features/dashboard/components/RevenueBarChart";
import { HiOutlineBanknotes, HiOutlineUserPlus } from "react-icons/hi2";

const Dashboard = () => {
  const data = [
    {
      title: "New customers",
      total_value: 23,
      change_percentage: 10,
      icon: HiOutlineUserGroup,
    },
    {
      title: "New Providers",
      total_value: 10,
      change_percentage: -12,
      icon: HiOutlineUserPlus,
    },
    {
      title: "Bookings",
      total_value: 50,
      change_percentage: 7,
      icon: HiOutlineCalendar,
    },
    {
      title: "Total Revenue",
      total_value: 50000,
      change_percentage: -10,
      icon: HiOutlineBanknotes,
    },
  ];
  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <Heading as="h2">Dashboard</Heading>
        <DashboardFilter />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.map((item, index) => (
          <DashboardBox key={index} item={item} />
        ))}

        <BookingsLineChart />
        <BookingsStatusPieChart />
        <RevenueBarChart />
        <CategoriesBarChart />
        <ProviderStatus />
      </div>
    </section>
  );
};

export default Dashboard;
