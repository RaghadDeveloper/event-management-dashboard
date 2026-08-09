import { useTranslation } from "react-i18next";
import type { Governorate } from "../../../types";
import { useGovernorates } from "../../Locations/hooks/useGovernorates";

import Filter from "../../../components/ui/Filter";
import Search from "../../../components/ui/Search";
import Select from "../../../components/ui/Select";

const ProvidersTableOperations = () => {
  const { data: governorates = [] } = useGovernorates();
  const { t } = useTranslation();

  const governorateOptions = governorates?.map((governorate: Governorate) => ({
    value: String(governorate.id),
    label: governorate.name,
  }));
  governorateOptions.unshift({ value: "all", label: t("all governorates") });

  return (
    <div className="flex gap-4 justify-between items-center">
      <Search />

      <div className="flex gap-2">
        <Select filterField="governorate" options={governorateOptions} />

        <Filter
          filterField="status"
          options={[
            { value: "all", label: t("all") },
            { value: "banned", label: t("banned") },
            { value: "active", label: t("active") },
          ]}
        />
        <Filter
          filterField="approval_status"
          options={[
            { value: "all", label: t("all") },
            { value: "approved", label: t("approved") },
            { value: "rejected", label: t("rejected") },
            { value: "pending", label: t("pending") },
          ]}
        />
      </div>
    </div>
  );
};

export default ProvidersTableOperations;
