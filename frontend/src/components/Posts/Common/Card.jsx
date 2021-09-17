import React from "react";

const Card = ({ place }) => {
  return (
    <>
      <div class="card">
        <div class="row">
          <div class="thumb">
            <img class="thumbnail" src={place.image} alt="" />
            <div class="like">
              <img src="images/page1like.svg" alt="" />
            </div>
          </div>
          <div class="textarea">
            <p class="thumbheading">{place.name}</p>
            <p>{place.place_type}</p>
            <p class="thumbtime">{place.time_to_travel}</p>
            <p class="description">{place.description}</p>
            <button class="btn">Directions</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
