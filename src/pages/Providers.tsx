import { useTranslation } from "react-i18next";
import Heading from "../components/ui/Heading";
import ProvidersTableOperations from "../features/users/components/ProvidersTableOperations";
import ProvidersTable from "../features/users/components/ProvidersTable";

const Providers = () => {
  const { t } = useTranslation();
  return (
    <section className="flex flex-col gap-4">
      <Heading as="h2">{t("service providers")}</Heading>
      <ProvidersTableOperations />
      <ProvidersTable />
    </section>
  );
};

export default Providers;
