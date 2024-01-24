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
      <div className="flex justify-between flex-wrap items-center gap-4">
        <div className="flex  xl:gap-20 lg:gap-16 md:gap-12 sm:gap-8 gap-4 flex-wrap items-center">
          <div>
            <h3 className="font-semibold text-base">Showing 45 Applicants</h3>
            <p className="text-sm text-gray-300">Based your preferences</p>
          </div>
          <FilterTabs filterField={"status"} options={appOptions} />
        </div>
        <div
          className="relative [&_svg]:absolute [&_svg:first-child]:left-4 [&_svg:first-child]:bottom-4
           [&_svg:last-child]:right-4 [&_svg:last-child]:top-4 [&_svg:last-child>path]:stroke-primary flex flex-wrap  "
        >
          <SelectDownIcon />
          <select
            className="px-[52px] py-4 rounded-[48px] border border-solid border-primary-300 appearance-none
               text-base font-medium text-gray-700 focus:outline-primary bg-transparent"
          >
            <option>Newest</option>
            <option>Oldest</option>
          </select>
          <Chevron />
        </div>
      </div>
    </header>
  );
}

export default ApplicationsHeader;
