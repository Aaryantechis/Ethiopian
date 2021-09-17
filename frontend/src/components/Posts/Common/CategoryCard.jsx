import React from "react";
export default function CategoryCard({ category }) {
  return (
    <div class="gridcontent">
      <img src={category.image} alt="" />
      <p>{category.name}</p>
    </div>
  );
}
