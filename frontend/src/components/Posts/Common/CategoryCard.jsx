import React from "react";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

export default function CategoryCard({ category }) {
  const dispatch = useDispatch();

  return (
    <div
      class="gridcontent"
      onClick={() => dispatch(push("/places?category=" + category.id))}
    >
      <img src={category.image} alt="" />
      <p>{category.name}</p>
    </div>
  );
}
