import { useState } from "react";

function useSearchQuery({ data }) {
  const [query, setQuery] = useState("");
  const [searchedData, setSearchedData] = useState(data);

  function handleQueryChange(value) {
    setQuery(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return {
    query,
    searchedData,
    setSearchedData,
    handleQueryChange,
    handleSubmit,
  };
}

export default useSearchQuery;
