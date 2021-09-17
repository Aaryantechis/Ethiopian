import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlaces } from "../reducks/places/operations";
import { getPlaces } from "../reducks/places/selectors";
import Header from "../components/Posts/Common/Header";
import Footer from "../components/Posts/Common/Footer";
import Search from "../components/Posts/Common/Search";
import Background from "../assets/img/background.png";
import CategoryCard from "../components/Posts/Common/CategoryCard";
import PlaceCard from "../components/Posts/Common/PlaceCard";
import { getCategories } from "../reducks/categories/selectors";
import { fetchCategories } from "../reducks/categories/operations";

const Home = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const places = getPlaces(selector);
  console.log(places);
  useEffect(() => {
    dispatch(fetchPlaces());
  }, []);
  const categories = getCategories(selector);

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <>
      <Header />
      <div class="home">
        <div class="background-image">
          <img src={Background} alt="" />
        </div>

        <Search />

        <section class="section1">
          <div class="heading1">Popular things to do in Ethiopia</div>
          <div class="grid">
            {categories.map((caterory) => (
              <CategoryCard category={caterory} />
            ))}
          </div>
          <div class="heading1">Tourist Attraction in Ethiopia</div>
        </section>
        <section class="section2">
          <div class="galary">
            <div class="row">
              {places.map((place) => (
                <PlaceCard place={place} />
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Home;
