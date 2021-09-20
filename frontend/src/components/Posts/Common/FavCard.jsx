import React from "react";
import ImgDelete from "../../../assets/img/DeleteFav.png";
import { useDispatch } from "react-redux";
import { deleteFavourite } from "../../../reducks/favourites/operations";
const FavCard = ({ favourite }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div class="card" key={favourite.id}>
        <div class="row">
          <div class="thumb">
            <img class="thumbnail" src={favourite.image} alt="" />
            <div class="like">
              <img
                src={ImgDelete}
                onClick={() => dispatch(deleteFavourite(favourite.id))}
                alt=""
              />
            </div>
          </div>
          <div class="textarea">
            <p class="thumbheading">{favourite.name}</p>
            <p>{favourite.place_type}</p>
            <p class="thumbtime">{favourite.time_to_travel}</p>
            <p class="description">{favourite.description}</p>
            <a class="btn" href={favourite.google_map_link} target="_blank">
              Directions
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default FavCard;
