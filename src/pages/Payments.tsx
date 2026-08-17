import Heading from "../components/ui/Heading";
import Filter from "../features/transactions/components/Filter";
import PaymentsTable from "../features/transactions/components/PaymentsTable";

const Payments = () => {
  return (
    <section className="flex flex-col gap-4">
      <Heading as="h2">Payments</Heading>
      <Filter />
      <PaymentsTable />
    </section>
  );
};

export default Payments;
