import RingICon from "../assets/icons/RingICon";
import ChatICon from "../assets/icons/ChatIcon";
import SearchIcon from "../assets/icons/SearchIcon";
import ToggleButton from "../assets/icons/ToggleButton";
import  profile from "../assets/images/profile.jpg";
// import HeaderProfil from "../assets/icons/HeaderProfil";
import { useLocation } from "react-router-dom";
import { useSidebarContext } from "../contexts/SidebarProvider";
import MainLogo from "../shared/MainLogo";
import ArrowIcon from "../assets/icons/ArrowIcon";

function Header() {
  const { pathname } = useLocation();

  const title = pathname.slice(1).replace("-", " ");

  const { toggle, isScreenSmall, isSmallOpen, isLargeOpen } =
    useSidebarContext();

  let icon;

  if (isScreenSmall) {
    if (isSmallOpen) icon = <ToggleButton />;
    else icon = <ArrowIcon />;
  } else {
    if (!isLargeOpen) icon = <ToggleButton />;
    else icon = <ArrowIcon />;
  }

  return (
    <header
      className="relative z-50 col-start-2 col-end-2 row-start-1 row-end-2 flex justify-between bg-body px-4 py-2
     sm:px-6 md:rounded-tl-[48px]  md:px-8 md:py-4 lg:px-10 lg:py-6 xl:px-12 xl:py-8"
    >
      {isScreenSmall && (
        <div className="absolute bottom-0 left-0 top-0 w-20 overflow-hidden bg-primary px-2">
          <MainLogo />
        </div>
      )}
      <div className="absolute left-[88px] top-1/2 flex -translate-y-1/2 flex-row items-center gap-3 md:static md:translate-y-0 lg:gap-7 xl:gap-9 xxl:gap-11">
        <button className="border-none bg-transparent " onClick={toggle}>
          {icon}
        </button>
        <h1 className="hidden text-heading font-semibold capitalize md:block">
          {title}
        </h1>
      </div>
      <div className="ml-auto flex w-2/3 items-center gap-3 sm:gap-4 md:ml-0 md:gap-5 lg:gap-6 xl:gap-8 xxl:gap-10  ">
        <form
          name="headerForm"
          id="headerForm"
          className="relative hidden flex-grow lg:block"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            id="headerSearch"
            name="headerSearch"
            type="text"
            placeholder="Search something here..."
            className="h-14 w-full min-w-[300px]  rounded-[82px] bg-gray-100 px-[36px] py-4 text-base leading-6 placeholder:text-gray-500"
          />
          <button className="absolute bottom-3 right-8 top-3">
            <SearchIcon />
          </button>
        </form>
        <div className="ml-auto flex gap-2 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8 xxl:gap-11">
          <button className="relative rounded-full border-none bg-white p-[14px] ">
            <ChatICon />
            <span className="absolute right-[-4px] top-[-3px] grid h-6 w-6 place-content-center rounded-full bg-primary text-sm font-semibold leading-[21px] text-white">
              18
            </span>
          </button>
          <button className="relative rounded-full border-none bg-white p-[14px] ">
            <RingICon />
            <span className="absolute right-[-4px] top-[-3px] grid h-6 w-6 place-content-center rounded-full bg-primary text-sm font-semibold leading-[21px] text-white">
              52
            </span>
          </button>
        </div>
        <div className="flex items-center gap-4 sm:gap-2 lg:gap-4 xl:gap-6 xxl:gap-8 ">
          <img src={profile} alt="profile" className="rounded-full" />
          <div>
            <h3 className="hidden whitespace-nowrap text-base font-semibold leading-6 sm:block">
              Oda Dink
            </h3>
            <span className="hidden whitespace-nowrap text-sm leading-[18px] text-gray-300 sm:block">
              Super Admin
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
