import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="search-karigar">
      <button onClick={handleSearch} className="search">Search</button>
      <div className="search-karigar1" >
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search Karigar"
        />
      </div>
    </div>
  );
};

export default SearchBar;
