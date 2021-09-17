import React from "react";
import ImgEVlogo from "../../../assets/img/EVlogo.png";
import ImgMenuIcon from "../../../assets/img/menuicon.png";

export default function Header() {
  return (
    <header>
      <nav class="navbar">
        <div class="logo">
          <img src={ImgEVlogo} alt="" />
          <div class="logotext">
            Ethiopian <br />
            Visitor
          </div>
        </div>
        <div class="menus">
          Favourites
          <img src={ImgMenuIcon} alt="" />
        </div>
      </nav>
    </header>
  );
}
