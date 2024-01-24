import CompaniesHeader from "./CompaniesHeader";
import CompaniesBody from "./CompaniesBody";
import CompanyDetails from "./CompanyDetails";
import { useSearchParams } from "react-router-dom";

function CompaniesLayout() {
  const [searchParams] = useSearchParams();

  const selectedId = searchParams.get("company") ?? null;

  return (
    <>
      <div className="flex  flex-col lg:flex-row lg:gap-8 xl:gap-11">
        <div className="grow">
          <CompaniesHeader />
          <CompaniesBody />
        </div>
        {selectedId && (
          <div className="mt-4 basis-1/4 lg:mt-0">
            <CompanyDetails />
          </div>
        )}
      </div>
    </>
  );
}

export default CompaniesLayout;
