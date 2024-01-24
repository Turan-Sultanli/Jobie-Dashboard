import { useSearchParams } from "react-router-dom";

function FilterTabs({ options, filterField }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options.at(0).value;

  function handleClick(value) {
    searchParams.set(filterField, value);
    if (searchParams.get("page")) searchParams.set("page", (1).toString());
    setSearchParams(searchParams);
  }

  return (
    <div className="flex items-center gap-4 flex-wrap">
      {options.map((tab) => (
        <button
          disabled={currentFilter === tab.value}
          onClick={() => handleClick(tab.value)}
          key={tab.value}
          type="button"
          className="bg-primary-300 text-primary py-[10px] px-[30px] text-base font-medium rounded-3xl
            hover:text-white hover:bg-primary transition-all duration-300 disabled:text-white
             disabled:bg-primary disabled:cursor-not-allowed focus:outline-primary capitalize whitespace-nowrap"
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

export default FilterTabs;
