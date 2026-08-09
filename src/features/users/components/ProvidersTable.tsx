import Loader from "../../../components/common/Loader";
import Menus from "../../../components/common/Menus";
import Pagination from "../../../components/common/Pagination";
import Table from "../../../components/common/Table";
import Empty from "../../../components/ui/Empty";
import type { Provider } from "../../../types";
import {
  providersTableColumns,
  providersTableGrid,
} from "../constants/tables-data";
import { useProviders } from "../hooks/useProviders";
import ProviderRow from "./ProviderRow";

const ProvidersTable = () => {
  const { data, isPending } = useProviders();
  const { service_providers: providers, pagination } = data || {};

  if (isPending) return <Loader />;

  if (!providers?.length) return <Empty resource="service Providers" />;

  return (
    <Table columns={providersTableGrid}>
      <Table.Header titles={providersTableColumns} />
      <Table.Body>
        <Menus>
          {providers?.map((provider: Provider) => (
            <ProviderRow key={provider.id} provider={provider} />
          ))}
        </Menus>
      </Table.Body>
      <Table.Footer>
        <Pagination count={pagination?.total_items || 0} />
      </Table.Footer>
    </Table>
  );
};

export default ProvidersTable;
