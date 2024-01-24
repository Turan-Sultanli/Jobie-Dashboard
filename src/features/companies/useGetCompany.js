import { useQuery } from "@tanstack/react-query";
import { getCompany } from "../../services/apiCompanies";

function useGetCompany(id) {
  const { data: company = {}, isLoading } = useQuery({
    queryKey: ["companies", id],
    queryFn: () => getCompany(id),
  });

  return { company, isLoading};
}

export default useGetCompany;
