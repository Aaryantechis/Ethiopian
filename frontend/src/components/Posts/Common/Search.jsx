import React, { useState, useEffect } from "react";
import ImgSearch from "../../../assets/img/searchicon.png";

const Search = () => {
  return (
    <form action="/places" method="GET" class="searchbox">
      <input
        name="search"
        type="text"
        placeholder="Search for best places to visit in Ethiopia"
      />
      <img class="searchicon" src={ImgSearch} alt="" />
    </form>
  );
};

export default Search;
