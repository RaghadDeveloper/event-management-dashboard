import { useSearchParams } from "react-router";

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const fromDate = searchParams.get("from_date") || "";
  const toDate = searchParams.get("to_date") || "";

  const handleDateChange = (key: string, value: string) => {
    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams);

      if (value) {
        newParams.set(key, value);
      } else {
        newParams.delete(key);
      }

      return newParams;
    });
  };

  return (
    <div className="flex gap-4 justify-end">
      <div className="flex items-center gap-2">
        <label htmlFor="from_date">From</label>
        <input
          id="from_date"
          type="date"
          value={fromDate}
          className="input bg-bg-main"
          onChange={(e) => handleDateChange("from_date", e.target.value)}
        />
      </div>

      <div className="flex items-center gap-2">
        <label htmlFor="to_date">To</label>
        <input
          id="to_date"
          type="date"
          value={toDate}
          className="input bg-bg-main"
          onChange={(e) => handleDateChange("to_date", e.target.value)}
        />
      </div>
    </div>
  );
};

export default Filter;
