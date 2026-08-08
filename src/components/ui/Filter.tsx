import { useSearchParams } from "react-router";
import Button from "./Button";

interface FilterProps {
  options: { label: string; value: string }[];
  filterField: string;
}

const Filter = ({ options, filterField }: FilterProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options.at(0)?.value;

  const handleClick = (value: string) => {
    searchParams.set(filterField, value);
    if (searchParams.get("page")) searchParams.set("page", "1");
    setSearchParams(searchParams);
  };

  return (
    <div className="flex gap-2 border border-tertiary rounded-md p-1 w-fit bg-bg-main">
      {options.map((option, index) => (
        <Button
          key={index}
          onClick={() => handleClick(option.value)}
          size="small"
          variant={currentFilter === option.value ? "primary" : "secondary"}
        >
          {option.label}
        </Button>
      ))}
    </div>
  );
};

export default Filter;
