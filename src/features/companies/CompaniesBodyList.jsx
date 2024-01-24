import useLayoutParams from "../../hooks/useLayoutParams";
import Footer from "../../shared/Footer";
import Loader from "../../shared/Loader";
import Company from "./Company";
import { useGetCompanies } from "./useGetCompanies";

function CompaniesBodyList() {
  const { layoutType } = useLayoutParams();
  const { companies, count, isLoading} = useGetCompanies();

  if(isLoading) return <Loader />

  return (
    <>
      <div
        className={` ${
          layoutType === "grid" ? "xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1" : " md:grid-cols-2 grid-cols-1"
        } grid  xl:gap-8 lg:gap-6 md:gap-4 sm:gap-2 gap-1 xl:mt-8 lg:mt-6 md:mt-4 sm:mt-3 mt-2`}
      >
        {companies.map((company) => (
          <Company variant="companies" company={company} key={company.id} />
        ))}
      </div>
      <Footer total={count} variant={"companies"} />
    </>
  );
}

export default CompaniesBodyList;
