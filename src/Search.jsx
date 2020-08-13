import React, { useState } from "react";
import SearchResult from "./SearchResult";

const Search = () => {
  const [img, setImg] = useState("");

  const inputEvent = (event) => {
    setImg(event.target.value);
  };

  return (
    <>
      <div className="searchbar">
        <input
          type="text"
          placeholder="type to search"
          value={img}
          onChange={inputEvent}
        />
        <h3>{img}</h3>
      </div>
      {img === "" ? null : <SearchResult searchString={img} />}
    </>
  );
};

export default Search;
