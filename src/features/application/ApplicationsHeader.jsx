import Chevron from "../../assets/icons/Chevron";
import SelectDownIcon from "../../assets/icons/SelectDownIcon";
import FilterTabs from "../../shared/FilterTabs";

const appOptions = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Pending",
    value: "pending",
  },
  {
    label: "On-Hold",
    value: "on-hold",
  },
  {
    label: "Candidate",
    value: "candidate",
  },
];

function ApplicationsHeader() {
  return (
    <header>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex  flex-wrap items-center gap-4 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20">
          <div>
            <h3 className="text-base font-semibold dark:text-white">
              Showing 45 Applicants
            </h3>
            <p className="text-sm text-gray-300">Based your preferences</p>
          </div>
          <FilterTabs filterField={"status"} options={appOptions} />
        </div>
        <div
          className="relative flex flex-wrap "
        >
          <span className="absolute left-4 bottom-4">
            <SelectDownIcon />
          </span>
          <select
            className="appearance-none rounded-[48px] border border-solid border-primary-300 bg-transparent px-[52px]
               py-4 text-base font-medium text-gray-700 focus:outline-primary dark:text-gray-200"
          >
            <option>Newest</option>
            <option>Oldest</option>
          </select>
          <span className="absolute right-4 top-4">
            <Chevron />
          </span>
        </div>
      </div>
    </header>
  );
}

export default ApplicationsHeader;
