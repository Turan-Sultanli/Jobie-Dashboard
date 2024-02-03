import { useSearchParams } from "react-router-dom";

function useLayoutParams() {
  const [searchParams, setSearchParams] = useSearchParams();

  const layoutType = searchParams.get("layout") ?? "grid";

  function handleLayoutParams(value) {
    searchParams.set("layout", value);
    setSearchParams(searchParams);
  }

  return { layoutType, handleLayoutParams };
}

export default useLayoutParams;
