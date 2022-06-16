import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar-logo__wrapper">
        <img
          src="../assets/navbar-icon.png"
          alt="logo img"
          className="navbar-logo__img"
        />
        <div className="navbar-logo__text">
          <h1 className="navbar-logo__left">Surreal</h1>
          <h1 className="navbar-logo__right">Estate</h1>
        </div>
      </div>
      <div className="navbar-links">
        <Link to="/" className="navbar-links__item">
          View Properties
        </Link>
        <Link to="/add-property" className="navbar-links__item">
          Add a Property
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
