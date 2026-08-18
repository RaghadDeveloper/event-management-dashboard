import Filter from "../../../components/ui/Filter";

const DashboardFilter = () => {
  return (
    <Filter
      options={[
        { value: "last_7_days", label: "last 7 days" },
        { value: "last_30_days", label: "last 30 days" },
        { value: "last_90_days", label: "last 90 days" },
      ]}
      filterField="timeframe"
    />
  );
};

export default DashboardFilter;
