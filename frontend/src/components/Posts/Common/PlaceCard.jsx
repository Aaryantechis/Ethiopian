import React from "react";
import ImgHeart from "../../../assets/img/likebutton.svg";
export default function PlaceCard({ place }) {
  return (
    <div class="thumbnail">
      <div class="like">
        <img src={ImgHeart} alt="" />
      </div>
      <img src={place.image} alt="" />
      <p class="thumbheading">{place.name}</p>
      <p class="thumbtext">{place.description}</p>
    </div>
  );
}
