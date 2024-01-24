import { useSearchParams } from "react-router-dom";

export function usePaginationParams(variant) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = Number(searchParams.get("page") ?? 1);
  let pageSize = 0;

  switch (variant) {
    case "vacancies":
      pageSize = 9;
      break;
    case "companies":
      pageSize = 12;
      break;
    case "applications":
      pageSize = 6;
      break;
    default:
      break;
  }

  function handleSelectPage(pageNumber) {
    searchParams.set("page", pageNumber);
    setSearchParams(searchParams);
  }

  const from = (currentPage - 1) * pageSize;
  const to = from + pageSize - 1;

  return { currentPage, pageSize, from, to, handleSelectPage };
}
