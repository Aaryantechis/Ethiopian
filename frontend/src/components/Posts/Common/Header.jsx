import React from "react";
import ImgEVlogo from "../../../assets/img/EVlogo.png";
import ImgMenuIcon from "../../../assets/img/menuicon.png";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

export default function Header() {
  const dispatch = useDispatch();
  return (
    <header>
      <nav class="navbar">
        <div class="logo" onClick={() => dispatch(push("/"))}>
          <img src={ImgEVlogo} alt="" />
          <div class="logotext">
            Ethiopian <br />
            Visitor
          </div>
        </div>
        <div class="menus" onClick={() => dispatch(push("/favourites"))}>
          Favourites
          <img src={ImgMenuIcon} alt="" />
        </div>
      </nav>
    </header>
  );
}
