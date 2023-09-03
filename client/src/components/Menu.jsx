import React from "react";
import "./Menu.css";
import CraigTube from "../img/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import { Link } from "react-router-dom";

const Menu = ({ darkMode, setDarkMode }) => {
  return (
    <div className="Container">
      <div className="Wrapper">
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <div className="Logo">
            <img src={CraigTube} alt="CraigTube" />
            CraigTube
          </div>
        </Link>
        <div className="Item">
          <HomeIcon />
          Home
        </div>
        <Link to="trends" style={{ textDecoration: "none", color: "inherit" }}>
          <div className="Item">
            <ExploreOutlinedIcon />
            Explore
          </div>
        </Link>
        <Link
          to="subscriptions"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="Item">
            <SubscriptionsOutlinedIcon />
            Subscriptions
          </div>
        </Link>
        <div className="Hr" />
        <div className="Item">
          <VideoLibraryOutlinedIcon />
          Library
        </div>
        <div className="Item">
          <HistoryOutlinedIcon />
          History
        </div>
        <header />
        <div className="Login">
          Sign in to like videos, comment, and subscribe.
          <Link to="signin" style={{ textDecoration: "none" }}>
            <div className="Button">
              <AccountCircleOutlinedIcon />
              SIGN IN
            </div>
          </Link>
        </div>
        <div className="Hr" />
        <div className="Title">BEST OF CRAIGTUBE</div>
        <div className="Item">
          <LibraryMusicOutlinedIcon />
          Music
        </div>
        <div className="Item">
          <SportsBasketballOutlinedIcon />
          Sports
        </div>
        <div className="Item">
          <SportsEsportsOutlinedIcon />
          Gaming
        </div>
        <div className="Item">
          <MovieOutlinedIcon />
          Movies
        </div>
        <div className="Item">
          <ArticleOutlinedIcon />
          News
        </div>
        <div className="Item">
          <LiveTvOutlinedIcon />
          Live
        </div>
        <div className="Hr" />
        <div className="Item">
          <SettingsOutlinedIcon />
          Settings
        </div>
        <div className="Item">
          <FlagOutlinedIcon />
          Report
        </div>
        <div className="Item">
          <HelpOutlineOutlinedIcon />
          Help
        </div>
        <div className="Item" onClick={() => setDarkMode(!darkMode)}>
          <SettingsBrightnessOutlinedIcon />
          {darkMode ? "Light" : "Dark"} Mode
        </div>
      </div>
    </div>
  );
};

export default Menu;
