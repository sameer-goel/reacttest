import React from "react";

const SearchResult = (props) => {
  const myimg = `https://source.unsplash.com/400x300?${props.searchString}`;
  return (
    <>
      <div>
        <img src={myimg} alt="myimg" />
      </div>
    </>
  );
};

export default SearchResult;
