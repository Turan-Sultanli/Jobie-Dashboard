import { useQuery } from "@tanstack/react-query";
import { usePaginationParams } from "../../hooks/usePaginationParams";
import { getCompanies } from "../../services/apiCompanies";

export  function useGetCompanies() {
    const { from, to, currentPage } = usePaginationParams("companies");
    
    const { data: {  companies = [], count } = {}, isLoading } = useQuery({
        queryKey: ["companies", currentPage],
        queryFn: () => getCompanies({ from, to }),
        
    });
    
    return { companies, isLoading, count };
}


