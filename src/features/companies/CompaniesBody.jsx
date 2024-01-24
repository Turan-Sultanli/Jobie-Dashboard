import Chevron from "../../assets/icons/Chevron";
import SelectDownIcon from "../../assets/icons/SelectDownIcon";
import LayoutButtons from "../../shared/LayoutButtons";
import SwitchBtn from "../../shared/SwitchBtn";
import CompaniesBodyList from "./CompaniesBodyList";

function CompaniesBody() {
  return (
    <>
      <div className="mt-2 flex flex-wrap items-center justify-between sm:mt-4 md:mt-7 lg:mt-10 xl:mt-[70px] gap-2">
        <div>
          <h4 className="text-base font-semibold">Showing 35 Companies</h4>
          <p className="text-sm text-gray-200">Based your preferences</p>
        </div>
        <div className="flex flex-wrap items-center xl:gap-8 lg:gap-6 md:gap-4 gap-2">
          <div>
            <SwitchBtn label="Salary" id="salary" checked={true} />
          </div>
          <div
            className="relative [&_svg:first-child]:bottom-4 [&_svg:first-child]:left-4 [&_svg:last-child>path]:stroke-primary
          [&_svg:last-child]:right-4 [&_svg:last-child]:top-4 [&_svg]:absolute  "
          >
            <SelectDownIcon />
            <select
              className="appearance-none rounded-[48px] border border-solid border-primary-300 bg-transparent px-[52px]
            py-4 text-base font-medium text-gray-700 focus:outline-primary"
            >
              <option>Newest</option>
              <option>Oldest</option>
            </select>
            <Chevron />
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
