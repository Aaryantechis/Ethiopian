import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Search from "../components/Posts/Common/Search";
import Header from "../components/Posts/Common/Header";
import Footer from "../components/Posts/Common/Footer";
import Card from "../components/Posts/Common/Card";
import queryString from "query-string";
import { fetchPlaces } from "../reducks/places/operations";
import { getPlaces } from "../reducks/places/selectors";
import { fetchFromLocalStorage } from "../reducks/favourites/operations";

const Places = () => {
  const parsed = queryString.parse(window.location.search);
  const [search, setSearch] = useState(null);
  const [category, setCategory] = useState(null);
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const places = getPlaces(selector);
  console.log(places);
  useEffect(() => {
    dispatch(fetchFromLocalStorage());

    if (parsed.search != undefined) {
      setSearch(parsed.search);
    }
    if (parsed.category != undefined) {
      setCategory(parsed.category);
    }
  }, []);

  useEffect(() => {
    if (search != null || category != null) {
      dispatch(fetchPlaces(search, category));
    }
  }, [search, category]);

  return (
    <>
      <Header />
      <div class="page1">
        <Search />
        <div class="section1">
          <h1 class="heading1">Day trips in Ethiopia</h1>
          <div class="grid">
            {places.map((place) => (
              <Card place={place} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Places;
