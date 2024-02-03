import { useState } from "react";
import SearchJobsHeader from "./SearchJobsHeader";
import HeaderForm from "../../shared/HeaderForm";
import Tabs from "./Tabs";
import SwitchBtn from "../../shared/SwitchBtn";
import SelectDownIcon from "../../assets/icons/SelectDownIcon";
import Chevron from "../../assets/icons/Chevron";
import LayoutButtons from "../../shared/LayoutButtons";
import JobList from "./JobList";

function SearchJobsOperations() {
  const [query, setQuery] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleQueryChange(value) {
    setQuery(value);
  }

  return (
    <>
      <SearchJobsHeader>
        <HeaderForm
          value={query}
          onChange={handleQueryChange}
          onSubmit={handleSubmit}
        />
        <Tabs />
        <div className="mt-6 flex flex-wrap justify-between md:mt-8 lg:mt-10 xl:mt-16">
          <div>
            <h4 className="text-base font-semibold dark:text-white">
              Showing 246 Jobs Results
            </h4>
            <p className="text-sm text-gray-300 dark:text-gray-300">
              Based your preferences
            </p>
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 ">
            <div className="flex flex-wrap items-center">
              <SwitchBtn label="Full Time" id={"fulltime"} checked={true} />
              <SwitchBtn label="Freelance" id={"freelance"} checked={true} />
              <SwitchBtn label="Details" id={"details"} checked={true} />
              <SwitchBtn label="Salary" id={"salary"} checked={true} />
            </div>
            <div
              className="relative"
            >
              <span className="absolute bottom-4 left-4 dark:[&_path]:fill-gray-100 [&_path]:fill-primary">
                <SelectDownIcon />
              </span>
              <select
                className="appearance-none rounded-[48px] border border-solid border-primary-300 bg-transparent px-[52px]
               py-4 text-base font-medium text-gray-700 focus:outline-primary dark:text-white"
              >
                <option>Newest</option>
                <option>Oldest</option>
              </select>
              <span className="absolute right-4 top-4 dark:[&_path]:stroke-gray-100 [&_path]:stroke-primary">
                <Chevron />
              </span>
            </div>
            <div className="flex items-center">
              <LayoutButtons />
            </div>
          </div>
        </div>
      </SearchJobsHeader>
      <JobList />
    </>
  );
}

export default SearchJobsOperations;
