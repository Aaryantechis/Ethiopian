import React, { useState, useEffect } from "react";
import ImgSearch from "../../../assets/img/searchicon.png";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

const Search = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState();

  const inputSearch = (event) => {
    setSearch(event.target.value);
  };

  const submitAction = () => {
    // TODO - have to clear the places before go to place list page.
    // dispatch(clearPlaces());
    dispatch(push("/places?search=" + search));
  };

  return (
    <form onSubmit={submitAction} class="searchbox">
      <input
        name="search"
        type="text"
        onChange={inputSearch}
        placeholder="Search for best places to visit in Ethiopia"
      />
      <img class="searchicon" src={ImgSearch} alt="" />
    </form>
  );
};

export default Search;
