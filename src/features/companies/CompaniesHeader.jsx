import { companiesData } from "../../data/data";
import useSearchQuery from "../../hooks/useSearchQuery";
import HeaderForm from "../../shared/HeaderForm";
import Tabs from "../jobs/Tabs";

function CompaniesHeader() {
  const { value, handleQueryChange, handleSubmit } =
    useSearchQuery(companiesData);

  return (
    <>
      <HeaderForm
        value={value}
        onChange={handleQueryChange}
        onSubmit={handleSubmit}
      />
      <Tabs />
    </>
  );
}

export default CompaniesHeader;
