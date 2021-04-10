import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="navigation">
      <div className="navigation__menu">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="navigation__user">
        <Link to="/log in">Log in</Link>
        <Link to="/sign in">Sign in</Link>
      </div>
    </div>
  );
}

export default Navigation;
