import React from "react";
import "./header.css";
import Netflixlogo from "../../assets/images/netflix.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="nav-left">
          <a href="#" className="logo">
            <img src={Netflixlogo} alt="Netflix Logo" />
          </a>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">TV Shows</a>
            </li>
            <li>
              <a href="#">Movies</a>
            </li>
            <li>
              <a href="#">latest</a>
            </li>
            <li>
              <a href="#">My List</a>
            </li>
            <li>
              <a href="#">Browse by languages</a>
            </li>
          </ul>
        </div>
        <div className="nav-right">
          <a href="#" className="search-icon">
            <SearchIcon />
          </a>
          <a href="#" className="notifications-icon">
            <NotificationsNoneIcon />
          </a>

          <div className="user-profile">
            <a href="#" className="account-box-icon">
              <AccountBoxIcon />
            </a>
            <a href="#" className="account-box-icon">
              <KeyboardArrowDownIcon />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
