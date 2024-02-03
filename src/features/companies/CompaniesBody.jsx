import Chevron from "../../assets/icons/Chevron";
import SelectDownIcon from "../../assets/icons/SelectDownIcon";
import LayoutButtons from "../../shared/LayoutButtons";
import SwitchBtn from "../../shared/SwitchBtn";
import CompaniesBodyList from "./CompaniesBodyList";

function CompaniesBody() {
  return (
    <>
      <div className="mt-2 flex flex-wrap items-center justify-between gap-2 sm:mt-4 md:mt-7 lg:mt-10 xl:mt-[70px]">
        <div>
          <h4 className="text-base font-semibold dark:text-white">
            Showing 35 Companies
          </h4>
          <p className="text-sm text-gray-200 dark:text-gray-300">
            Based your preferences
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2 md:gap-4 lg:gap-6 xl:gap-8">
          <div>
            <SwitchBtn label="Salary" id="salary" checked={true} />
          </div>
          <div
            className="relative  "
          >
            <span className="absolute bottom-4 left-4">
              <SelectDownIcon />
            </span>
            <select
              className="appearance-none rounded-[48px] border border-solid border-primary-300 bg-transparent px-[52px]
            py-4 text-base font-medium text-gray-700 focus:outline-primary dark:text-gray-100"
            >
              <option>Newest</option>
              <option>Oldest</option>
            </select>
            <span className="absolute right-4 top-4">
              <Chevron />
            </span>
          </div>
          <div className="flex gap-4">
            <LayoutButtons />
          </div>
        </div>
      </div>
      <CompaniesBodyList />
    </>
  );
}

export default CompaniesBody;
