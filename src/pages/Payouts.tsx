import Heading from "../components/ui/Heading";
import Filter from "../features/transactions/components/Filter";
import PayoutsTable from "../features/transactions/components/PayoutsTable";

const Payouts = () => {
  return (
    <section className="flex flex-col gap-4">
      <Heading as="h2">Payouts</Heading>
      <Filter />
      <PayoutsTable />
    </section>
  );
};

export default Payouts;
