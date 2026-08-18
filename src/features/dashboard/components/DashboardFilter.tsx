import Filter from "../../../components/ui/Filter";

const DashboardFilter = () => {
  return (
    <Filter
      options={[
        { value: "month", label: "last month" },
        { value: "week", label: "last week" },
        { value: "year", label: "last year" },
      ]}
      filterField="period"
    />
  );
};

export default DashboardFilter;
