import React from "react";
import "./Header.scss";
import logo from "../../assets/logo.png";
import location from "../../assets/location.png";
import Arrow from "../../assets/arrow.svg";
import Search from "../../assets/search.svg";

const Header = () => {
  return (
    <div className="header">
      <div>
        <img className="header-logo" src={logo} alt="logo" />
      </div>
      <h2 className="header-text">
        Discover the best food & drinks in Delhi NCR
      </h2>
      <div className="todo">
        <div className="header-left">
          <div>
            <img src={location} alt="location" className="location" />
          </div>
          <div>
            <input
              // value=""
              placeholder="Ywca, 1, Ashoka Rd, Hanuman Road Area, Connaught Place, New Delhi, Delhi"
              className="address"
            />
          </div>
          <div>
            <img src={Arrow} alt="arrow" className="arrow" />
          </div>
        </div>
        <div className="line"></div>
        <div className="search">
          <img src={Search} alt="search" className="search-icon" />
        </div>
        <div className="header-right">
          <input
            // value=""
            placeholder="Search for restaurant, cuisine or a dish"
            className="right"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
