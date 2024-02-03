import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function AppLayout() {
  


  return (
    <div
      className="grid h-screen grid-cols-[auto_1fr] grid-rows-[auto_1fr] transition-all duration-300 max-w-[120rem] mx-auto"
    >
      <Sidebar />
      <Header />
      <div
        className="col-start-2 col-end-3 row-start-2 row-end-3 grid overflow-y-auto  px-4 pb-[52px] pt-2 sm:px-6 md:px-8
       md:pt-5 lg:px-10 lg:pt-6 xl:px-12 xl:pt-[30px]"
      >
        <Outlet />
      </div>
      <div className="z-[-1] col-start-2 col-end-3 row-start-1 row-end-2 h-10 bg-primary " />
    </div>
  );
}

export default AppLayout;
