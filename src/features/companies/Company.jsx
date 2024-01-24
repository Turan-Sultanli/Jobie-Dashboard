import { useSearchParams } from "react-router-dom";
import Logo from "../../shared/Logo";

function Company({ variant = "default", company }) {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleSelectCompany(id) {
    searchParams.set("company", id);
    setSearchParams(searchParams);
  }

  return (
    <article
      onClick={() => handleSelectCompany(company.id)}
      className={`${
        variant === "featured" ? "p-[30px]" : "px-8 pt-9 pb-6"
      } min-w-[200px] cursor-pointer rounded-[28px] bg-white`}
    >
      <div
        className={`${
          variant === "featured" ? "" : "flex-col items-center"
        } flex gap-5`}
      >
        <Logo src={company.logo} w={60} h={60} />
        <div className={variant === "featured" ? "" : "text-center"}>
          <h5 className="text-dark font-semibold text-base mb-[10px]">
            {company.name}
          </h5>
          {variant === "featured" ? (
            <p className="text-base text-primary font-medium">
              {company.vacancies.length} Vacancies
            </p>
          ) : (
            <p className="text-sm text-gray-900">Internet Service Porvider</p>
          )}
        </div>
      </div>
    </article>
  );
}

export default Company;
