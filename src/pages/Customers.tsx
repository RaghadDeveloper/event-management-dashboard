import { useTranslation } from "react-i18next";
import Heading from "../components/ui/Heading";
import CustomersTable from "../features/users/components/CustomersTable";
import CustomersTableOperations from "../features/users/components/CustomersTableOperations";

const Customers = () => {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col gap-4">
      <Heading as="h2">{t("customers")}</Heading>
      <CustomersTableOperations />
      <CustomersTable />
    </section>
  );
};

export default Customers;
