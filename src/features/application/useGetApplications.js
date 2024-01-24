import { useQuery } from "@tanstack/react-query";
import { usePaginationParams } from "../../hooks/usePaginationParams";
import { getApplications } from "../../services/apiApplications";
import { useSearchParams } from "react-router-dom";

function useGetApplications() {
  const [searchParams] = useSearchParams();

  const filterValue = searchParams.get("status") ?? "all";

  const { from, to, currentPage } = usePaginationParams("applications");

  const { data: { applications = [], count } = {}, isLoading } = useQuery({
    queryKey: ["applications", currentPage, filterValue],
    queryFn: () => getApplications({ from, to,}, filterValue ),
  });

  return { applications, isLoading, count };
}

export default useGetApplications;
