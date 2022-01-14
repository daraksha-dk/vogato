import React from "react";
import "./Header.scss";
import logo from "../../assets/logo.png";
import location from "../../assets/location.png";
import Arrow from "../../assets/arrow.svg";
import Search from "../../assets/search.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <img src={logo} alt="logo" />
      </div>
      <h2 className="header-text">
        Discover the best food & drinks in Delhi NCR
      </h2>
      <div className="todo">
        <div className="todo-left">
          <div className="todo-location">
            <img src={location} alt="location" className="loco" />
          </div>
          <div className="todo-address">
            <input
              placeholder="Ywca, 1, Ashoka Rd, Hanuman Road Area, Connaught Place, New Delhi, Delhi"
              className="add"
            />
          </div>
          <div className="todo-arrow">
            <img src={Arrow} alt="arrow" className="arr" />
          </div>
        </div>
        <div className="todo-line"></div>
        <div className="todo-search">
          <img src={Search} alt="search" className="icon" />
        </div>
        <div className="todo-right">
          <input
            placeholder="Search for restaurant, cuisine or a dish"
            className="rig"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
