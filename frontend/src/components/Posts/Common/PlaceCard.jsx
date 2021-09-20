import React, { useEffect, useState } from "react";
import ImgHeart from "../../../assets/img/likebutton.svg";
import { useDispatch, useSelector } from "react-redux";
import { addFavourite } from "../../../reducks/favourites/operations";
import { getFavourites } from "../../../reducks/favourites/selectors";
import Favourites from "../../../containers/Favourites";

export default function PlaceCard({ place }) {
  const dispatch = useDispatch();
  const clickFavourite = (place) => {
    dispatch(addFavourite(place));
  };
  const selector = useSelector((state) => state);
  const favourites = getFavourites(selector);
  const [showLikeButton, setShowLikeButton] = useState(true);

  useEffect(() => {
    let favoritePlace = favourites.filter(
      (favourite) => favourite.id == place.id
    );
    if (favoritePlace.length > 0) {
      setShowLikeButton(false);
    }
  }, [favourites]);

  return (
    <div class="thumbnail">
      {showLikeButton && (
        <div class="like">
          <img
            src={ImgHeart}
            onClick={() => {
              clickFavourite(place);
            }}
            alt=""
          />
        </div>
      )}
      <img src={place.image} alt="" />
      <p class="thumbheading">{place.name}</p>
      <p class="thumbtext">{place.description}</p>
    </div>
  );
}
