import React from "react";
import "./Header.scss";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="header">
      <div>
        <img className="header-logo" src={logo} alt="logo" />
      </div>
      <h2 className="header-text">
        Discover the best food & drinks in Delhi NCR
      </h2>
    </div>
  );
};

export default Header;
