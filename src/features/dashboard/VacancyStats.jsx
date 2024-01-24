import { useState } from "react";
import VacanyCharts from "./VacanyCharts";
import SwitchBtn from "../../shared/SwitchBtn";
import Chevron from "../../assets/icons/Chevron";

function VacancyStats() {
  const [timePeriod, setTimePeriod] = useState("year");

  return (
    <div className="min-h-[490px] rounded-[20px] bg-white p-[26px_26px_30px_30px] sm:col-[1/-1] sm:row-[5/6] lg:col-[2/-1] lg:row-[2/3]">
      <form className="flex flex-wrap items-center justify-between gap-1 md:gap-2 lg:gap-3">
        <h3 className="whitespace-nowrap text-[20px] font-medium leading-[30px] ">
          Vacancy Stats
        </h3>
        <div className="flex flex-wrap items-center md:gap-2 lg:gap-3">
          <SwitchBtn label={"Application"} id={"application"} checked={true} />
          <SwitchBtn label={"Interviews"} id={"interviews"} checked={true} />
          <SwitchBtn label={"Rejected"} id={"rejected"} checked={true} />
        </div>
        <div className="relative">
          <select
            autoComplete="on"
            value={timePeriod}
            onChange={(e) => setTimePeriod(e.target.value)}
            name=""
            id=""
            className="h-12 w-[166px] appearance-none rounded-[48px] border border-solid border-primary-300 px-5 py-3 text-base font-medium leading-6 text-gray-700 focus:outline-primary-600 "
          >
            <option value="year">This Year</option>
            <option value="month">This Month</option>
            <option value="week">This Week</option>
          </select>
        <span className="absolute right-4 top-3 [&_path]:stroke-primary">
          <Chevron />
        </span>
        </div>
      </form>
      <div>
        <VacanyCharts timePeriod={timePeriod} />
      </div>
    </div>
  );
}

export default VacancyStats;
