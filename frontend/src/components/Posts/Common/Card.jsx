import Imglike from "../../../assets/img/likebutton.svg";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavourite } from "../../../reducks/favourites/operations";
import { getFavourites } from "../../../reducks/favourites/selectors";
const Card = ({ place }) => {
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
    <>
      <div class="card" key={place.id}>
        <div class="row">
          <div class="thumb">
            <img class="thumbnail" src={place.image} alt="" />
            {showLikeButton && (
              <div class="like">
                <img
                  src={Imglike}
                  onClick={() => {
                    clickFavourite(place);
                  }}
                  alt=""
                />
              </div>
            )}
          </div>
          <div class="textarea">
            <p class="thumbheading">{place.name}</p>
            <p>{place.place_type}</p>
            <p class="thumbtime">{place.time_to_travel}</p>
            <p class="description">{place.description}</p>
            <a class="btn" href={place.google_map_link} target="_blank">
              Directions
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
