import { Link } from "react-router-dom";
import ArrowIcon from "../assets/icons/ArrowIcon";

function ViewMore() {
  return (
    <Link
      className="pl-6 py-[10px] pr-[30px] rounded-[48px] text-base font-medium text-primary border border-solid
     border-primary flex items-center justify-between gap-4 [&_svg]:-rotate-90 [&_path]:fill-primary
     transition-all duration-300 hover:bg-primary hover:text-white [&:hover_path]:fill-white dark:[&_path]:fill-white "
    >
      <span className="whitespace-nowrap dark:text-white">View more</span>
      <ArrowIcon />
    </Link>
  );
}

export default ViewMore;
