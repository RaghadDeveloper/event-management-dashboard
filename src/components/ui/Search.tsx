import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router";

const Search = () => {
  const [searchParams, setSearchParam] = useSearchParams("");
  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("search") || "",
  );
  const { t } = useTranslation();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (!value.trim()) searchParams.delete("search");
    else searchParams.set("search", value);

    if (searchParams.get("page")) searchParams.set("page", "1");
    setSearchParam(searchParams);
  };

  return (
    <input
      type="search"
      placeholder={t("search") + " ..."}
      className="input border border-tertiary/40 bg-bg-main min-w-80 shadow-sm focus:border-primary-500"
      value={searchTerm}
      onChange={handleSearch}
    />
  );
};

export default Search;
