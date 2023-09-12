import React from "react";
import "./Navbar.css";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar_Container">
      <div className="Navbar_Wrapper">
        <div className="Navbar_Search">
          <div className="Navbar_Input" placeholder="Search" />
          <SearchOutlinedIcon />
        </div>
        <Link to="signin" style={{ textDecoration: "none" }}>
          <div className="Navbar_Button">
            <AccountCircleOutlinedIcon />
            SIGN IN
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
