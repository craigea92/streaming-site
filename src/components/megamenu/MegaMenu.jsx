import React from "react";
import "./MegaMenu.css";
import {
  AiOutlineSearch,
  AiOutlineFolderOpen,
  AiOutlineStar,
  AiOutlineUser,
} from "react-icons/ai";

const MegaMenu = () => {
  return (
    <div className="header__megamenu">
      <div className="header__megamenu__links">
      <a href="">
        <AiOutlineSearch className="header__megamenu__logo"/>
        <h2>Search</h2>
      </a>
      <a href="">
        <AiOutlineFolderOpen className="header__megamenu__logo"/>
        <h2>Categories</h2>
      </a>
      <a href="">
        <AiOutlineStar className="header__megamenu__logo"/>
        <h2>Stars</h2>
      </a>
      <a href="">
        <AiOutlineUser className="header__megamenu__logo"/>
        <h2>Login</h2>
      </a>
      </div>
    </div>
  );
};

export default MegaMenu;
