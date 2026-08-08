import { useSearchParams } from "react-router";
import { PAGE_SIZE } from "../../utils/constants";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import Button from "../ui/Button";

const Pagination = ({ count }: { count: number }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = searchParams.get("page")
    ? Number(searchParams.get("page"))
    : 1;
  const pageCount = Math.ceil(count / PAGE_SIZE);

  const prevPage = () => {
    if (currentPage === 1) return;

    searchParams.set("page", (currentPage - 1).toString());
    setSearchParams(searchParams);
  };

  const nextPage = () => {
    if (currentPage === pageCount) return;

    searchParams.set("page", (currentPage + 1).toString());
    setSearchParams(searchParams);
  };

  if (pageCount <= 1) return null;
  return (
    <div className="flex justify-between items-center">
      <p>
        Show <span>{(currentPage - 1) * PAGE_SIZE + 1}</span> to{" "}
        <span>{Math.min(currentPage * PAGE_SIZE, count)}</span> of{" "}
        <span>{count}</span> results
      </p>

      <div className="flex gap-2">
        <Button
          onClick={prevPage}
          disabled={currentPage === 1}
          variant="secondary"
        >
          <HiChevronLeft />
          <span>Previous</span>
        </Button>

        <Button
          onClick={nextPage}
          disabled={currentPage === pageCount}
          variant="secondary"
        >
          <span>Next</span>
          <HiChevronRight />
        </Button>
      </div>
    </div>
  );
};

export default Pagination;
