import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Search from "../components/Posts/Common/Search";
import Header from "../components/Posts/Common/Header";
import Footer from "../components/Posts/Common/Footer";
import { getFavourites } from "../reducks/favourites/selectors";
import { fetchFromLocalStorage } from "../reducks/favourites/operations";
import FavCard from "../components/Posts/Common/FavCard";
const Favourites = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const favourites = getFavourites(selector);
  console.log(favourites);
  useEffect(() => {
    dispatch(fetchFromLocalStorage());
  }, []);
  return (
    <>
      <Header />
      <div class="page1">
        <Search />
        <div class="section1">
          <h1 class="heading1">Day trips in Ethiopia</h1>
          <div class="grid">
            {favourites.map((favourite) => (
              <FavCard favourite={favourite} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Favourites;
