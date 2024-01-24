import { useSearchParams } from "react-router-dom";
import PaginationChevron from "../assets/icons/PaginationChevron";
import { usePaginationParams } from "../hooks/usePaginationParams";
import { useMediaQuery } from "../hooks/useMediaQuery";

function Pagination({ total, variant }) {
  const isAboveMediumScreens = useMediaQuery("(min-width: 992px)");

  const [searchParams, setSearchParams] = useSearchParams();

  const { handleSelectPage, currentPage, pageSize } =
    usePaginationParams(variant);
  const numOfPages = Math.ceil(total / pageSize);

  function nextPage() {
    const next = currentPage === numOfPages ? currentPage : currentPage + 1;
    if (currentPage === numOfPages) return;

    searchParams.set("page", next);
    setSearchParams(searchParams);
  }

  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    if (currentPage === 1) return;

    searchParams.set("page", prev);
    setSearchParams(searchParams);
  }

  const pages = Array.from({ length: numOfPages }, (_, index) => {
    const page = index + 1;

    return (
      <li key={index}>
        <button
          onClick={() => handleSelectPage(page)}
          disabled={currentPage === page}
          className="h-[52px] w-[62px] rounded-[60px] border-none bg-primary-300 text-lg font-medium text-primary
        hover:bg-primary hover:text-white disabled:cursor-not-allowed disabled:bg-primary disabled:text-white "
        >
          {page}
        </button>
      </li>
    );
  });

  return (
    <div className="flex flex-wrap items-center gap-4">
      <button
        onClick={prevPage}
        className="flex flex-wrap items-center gap-[10px] rounded-[60px] border-none bg-white px-6 py-3 text-lg font-medium text-primary
      hover:bg-primary hover:text-white [&:hover_path]:stroke-white "
      >
        <PaginationChevron />
        {isAboveMediumScreens && "Previous"}
      </button>
      <ul className="hidden flex-wrap overflow-hidden rounded-[60px] bg-primary-300 md:flex">
        {pages}
      </ul>
      <button
        onClick={nextPage}
        className="flex flex-wrap items-center gap-[10px] rounded-[60px] border-none bg-white px-5 py-3 text-lg font-medium text-primary
      hover:bg-primary hover:text-white [&:hover_path]:stroke-white [&_svg]:rotate-180"
      >
        {isAboveMediumScreens && "Next"}

        <PaginationChevron />
      </button>
    </div>
  );
}

export default Pagination;
