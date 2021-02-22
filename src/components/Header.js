import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <div>
      <div
        className="ui three item menu"
        style={{ backgroundImage: "url(pink-background.jpg)" }}
      >
        <Link
          to="/"
          className={`item ${location.pathname === "/" ? "active" : ""}`}
        >
          <i className="home icon" />
          Home
        </Link>
        <Link
          to="/about"
          className={`item ${location.pathname === "/about" ? "active" : ""}`}
        >
          <i className="user circle icon" />
          About Me
        </Link>
        <Link
          to="/contact"
          className={`item ${location.pathname === "/contact" ? "active" : ""}`}
        >
          <i className="phone icon" />
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Header;
