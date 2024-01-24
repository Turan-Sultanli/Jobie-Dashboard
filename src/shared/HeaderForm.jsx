import Chevron from "../assets/icons/Chevron";
import FilterBtn from "../assets/icons/FilterBtn";
import LocationICon from "../assets/icons/LocationICon";
import SearchIconBlue from "../assets/icons/SearchIconBlue";
import Button from "./Button";

function HeaderForm({ value, onChange, onSubmit }) {
  return (
    <form
      className="rounded-3xl bg-white px-[26px] py-4 shadow-[0px_12px_15px_0px_rgba(0,0,0,0.03)] "
      onSubmit={onSubmit}
    >
      <div className="flex flex-wrap items-center gap-5">
        <div
          className="[&>svg] after:content-[''] [&>svg:first-child]:left-0 [&>svg:first-child]:top-4 relative h-12 w-full text-base font-semibold text-gray-700
          after:absolute after:bottom-0 after:right-[-8px] after:top-0 after:w-[1px] after:bg-gray-200 sm:after:block after:hidden
            sm:w-auto [&>svg:last-child]:bottom-[16px] [&>svg:last-child]:right-5 [&>svg]:absolute"
        >
          <LocationICon />
          <select className="w-full min-w-[224px] appearance-none py-4 pl-9">
            <option value="">Around You</option>
          </select>
          <Chevron />
        </div>
        <input
          className="grow rounded-[48px] px-4 pb-[14px] pt-5 placeholder:text-gray-200 focus:outline-primary"
          type="text"
          placeholder="Search..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <div className="flex items-center gap-5 flex-wrap">
          <Button variant="button">
            <FilterBtn />
            Filter
          </Button>
          <Button variant="submit">
            <SearchIconBlue />
            Find
          </Button>
        </div>
      </div>
    </form>
  );
}

export default HeaderForm;
