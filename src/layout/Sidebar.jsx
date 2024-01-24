import { Link, useLocation } from "react-router-dom";
import DashboardIcon from "../assets/icons/DashboardIcon";
import SearchJobIcon from "../assets/icons/SearchJobIcon";
import AppICon from "../assets/icons/AppICon";
import NewsIcon from "../assets/icons/NewsIcon";
import StaticsIcon from "../assets/icons/StaticsIcon";
import UserIcon from "../assets/icons/UserIcon";
import { useSidebarContext } from "../contexts/SidebarProvider";
import MainLogo from "../shared/MainLogo";

const sidebarNavigation = [
  {
    path: "Dashboard",
    label: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    path: "search-jobs",
    label: "Search Job",
    icon: <SearchJobIcon />,
  },
  {
    path: "Application",
    label: "Applications",
    icon: <AppICon />,
  },
  {
    path: "companies",
    label: "Company",
    icon: <NewsIcon />,
  },
  {
    path: "Statistics",
    label: "Statistics",
    icon: <StaticsIcon />,
  },
  {
    path: "profile",
    label: "Profile",
    icon: <UserIcon />,
  },
];

function Sidebar() {
  const { pathname } = useLocation();

  const { isScreenSmall, isLargeOpen, isSmallOpen, close } =
    useSidebarContext();

  let classNames;

  if (!isScreenSmall) {
    if (isLargeOpen) classNames = "w-[18.75rem] pl-5";
    else classNames = "w-[6.25rem] pl-3";
  } else
    classNames =
      "max-w-[260px] w-full rounded-tr-[1.25rem] pl-4 pt-6 fixed bottom-0 left-0 top-[4.75rem] z-10";

  return (
    <>
      {isSmallOpen && (
        <div
          className="fixed inset-0 bg-slate-200/20 backdrop:blur-sm "
          onClick={close}
        />
      )}
      <aside
        className={`${classNames} ${isSmallOpen || !isScreenSmall ? "translate-x-0" : "-translate-x-full"} col-[1/2] row-span-full flex
         flex-col gap-6 overflow-hidden bg-primary  text-white transition duration-300`}
      >
        {!isScreenSmall && (
          <div className="py-7 pl-[14px]">
            <MainLogo />
          </div>
        )}
        <nav>
          <ul className="flex flex-col gap-[10px] ">
            {sidebarNavigation.map((nav) => {
              const isActive = pathname.slice(1) === nav.path;
              return (
                <li key={nav.label} onClick={() => isScreenSmall && close()}>
                  <Link
                    to={nav.path}
                    className={`${
                      isActive ? "activeNav" : ""
                    } hover:activeNav group flex gap-11 rounded-l-[48px] bg-primary py-[26px] pl-7
                font-medium  text-gray-200 [&_path]:fill-gray-200 [&_svg]:h-7 [&_svg]:w-7 `}
                  >
                    <span className=" group-hover:activeNav">{nav.icon}</span>
                    <span className="whitespace-nowrap text-lg">
                      {nav.label}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        {true && (
          <div className="mb-8 mt-auto pl-[44px]">
            <p className="whitespace-nowrap text-xs font-semibold leading-[18px] text-primary-600 ">
              Jobie Job Portal Admin Dashboard
            </p>
            <p className=" mb-6 whitespace-nowrap text-xs leading-[18px] text-primary-600 ">
              &copy; 2020 All Rights Reserved
            </p>
            <span className="whitespace-nowrap text-sm text-primary-700 ">
              Made with ❤ by Peterdraw
            </span>
          </div>
        )}
      </aside>
    </>
  );
}

export default Sidebar;
