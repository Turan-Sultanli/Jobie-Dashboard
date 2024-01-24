import { useSearchParams } from "react-router-dom";

function useSwitchParams(id, checked) {
  const [searchParams, setSearchParams] = useSearchParams();

  const value = checked ? "on" : "off";

  const isSwitchOn = (searchParams.get(id) ?? value) === "on";

  function handleSwitchParams(checked) {
    const value = checked ? "on" : "off";

    searchParams.set(id, value);
    setSearchParams(searchParams);
  }

  return { isSwitchOn, handleSwitchParams };
}

export default useSwitchParams;
