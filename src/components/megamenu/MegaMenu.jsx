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
      <a href="">
        <AiOutlineSearch />
        Search
      </a>
      <a href="">
        <AiOutlineFolderOpen />
        Categories
      </a>
      <a href="">
        <AiOutlineStar />
        Stars
      </a>
      <a href="">
        <AiOutlineUser />
        Login
      </a>
    </div>
  );
};

export default MegaMenu;
