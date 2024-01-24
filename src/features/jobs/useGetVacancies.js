import { useQuery } from "@tanstack/react-query";
import { getVacancies } from "../../services/apiVacancies";
import { usePaginationParams } from "../../hooks/usePaginationParams";

function useGetVacancies() {
  const { from, to, currentPage } = usePaginationParams("vacancies");
  
  const { data: {  vacancies = [], count } = {}, isLoading } = useQuery({
    queryKey: ["vacancies", currentPage],
    queryFn: () => getVacancies({ from, to }),
  });

  return { vacancies, isLoading, count };
}

export default useGetVacancies;
