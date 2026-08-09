import { useSearchParams } from "react-router";

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  options: Option[];
  filterField: string;
}

const Select = ({ options, filterField }: SelectProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentValue = searchParams.get(filterField) ?? "";

  const handleChange = (value: string) => {
    const newSearchParams = new URLSearchParams(searchParams);

    if (!value) {
      newSearchParams.delete(filterField);
    } else {
      const selectedOption = options.find((option) => option.value === value);
      if (!selectedOption) return;
      // newSearchParams.set(filterField, selectedOption.label);
      newSearchParams.set(filterField, selectedOption.value);
    }

    if (newSearchParams.has("page")) newSearchParams.set("page", "1");

    setSearchParams(newSearchParams);
  };

  // const selectedOption = options.find(
  //   (option) => option.label === currentValue,
  // );
  const selectedOption = options.find(
    (option) => option.value === currentValue,
  );

  return (
    <select
      className="input bg-bg-main border-tertiary/40 border capitalize shadow-sm focus:border-primary-500 min-w-40"
      name={filterField}
      value={selectedOption?.value ?? ""}
      onChange={(e) => handleChange(e.target.value)}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
