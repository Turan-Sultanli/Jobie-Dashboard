import FilterTabs from "../../shared/FilterTabs";

const tabOptions = [
  {
    label: "Your Skill",
    value: "skill",
  },
  {
    label: "Programmer",
    value: "programmer",
  },
  {
    label: "Software Engineer",
    value: "software-engineer",
  },
  {
    label: "Photographer",
    value: "photographer",
  },
  {
    label: "Digital Marketing",
    value: "digital-marketing",
  },
];

function Tabs() {
  return (
    <div className="  md:-gap-y-4 mt-10 flex flex-wrap items-start gap-x-2 gap-y-1 sm:gap-x-4 sm:gap-y-2 md:gap-x-7 lg:items-center lg:gap-x-11 lg:gap-y-6">
      <h3 className="text-base font-normal text-gray-300">Suggestions</h3>
      <FilterTabs options={tabOptions} filterField={"activeTab"} />
    </div>
  );
}

export default Tabs;
