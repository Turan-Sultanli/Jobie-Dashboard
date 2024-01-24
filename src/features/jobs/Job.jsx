import { Link } from "react-router-dom";
import Logo from "../../shared/Logo";
import { formatCurrency, truncate } from "../../utils/helpers";

function Job({ job }) {
  const company = job.companies;

  return (
    <Link>
      <article className="flex h-full flex-col rounded-[20px] bg-white p-[30px] shadow-[0px_4px_0px_0px_rgba(62,73,84,0.04)] hover:shadow-[0px_12px_23px_0px_rgba(0,0,0,0.10)] ">
        <div className="flex flex-wrap items-center justify-between gap-1">
          <div >
            <h5 className="mb-2 text-base font-medium text-gray-400">
              {company.name}
            </h5>
            <h3 className=" text-xl font-medium">{job.name}</h3>
          </div>
          <span >
            <Logo src={company.logo} w={60} h={60} />
          </span>
        </div>
        <div className="my-5">
          <p className="text-base font-medium text-primary">
            <span>{formatCurrency(job.min_salary)}</span> - <span>{formatCurrency(job.max_salary)}</span>
          </p>
          <p className="mt-6 text-sm text-gray-900">{truncate(job.about)}</p>
        </div>
        <div className="mt-auto flex flex-wrap items-center justify-between">
          <p className="rounded-[50px] bg-primary-300 p-[10px_20px] text-base font-medium uppercase leading-6 text-primary">
            {job.position_type}
          </p>
          <p className="text-base font-medium">{company.location}</p>
        </div>
      </article>
    </Link>
  );
}

export default Job;
