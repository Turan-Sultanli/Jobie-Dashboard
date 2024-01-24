import { usePaginationParams } from "../hooks/usePaginationParams";
import Pagination from "./Pagination";

function Footer({total, variant}) {

  const { pageSize} = usePaginationParams(variant)


  return (
    <footer className="flex justify-between items-center flex-wrap gap-2 mt-12">
      <p className="text-base font-medium text-[#3E4954]">
        Showing {pageSize} from {total} data
      </p>
      <Pagination total={total} variant={variant} />
    </footer>
  );
}

export default Footer;
