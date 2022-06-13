import React from "react";
import "../styles/navbar.css";

function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar-logo__wrapper">
        <img
          className="navbar-logo__img"
          src="../assets/navbar-logo__img.png"
          alt="logo img"
        />
        <div className="navbar-logo__text">
          <h1 className="navbar-logo__left">Surreal</h1>
          <h1 className="navbar-logo__right">Estate</h1>
        </div>
      </div>
      <ul className="navbar-links">
        <li className="navbar-links__item">View Properties</li>
        <li className="navbar-links__item">Add a Property</li>
      </ul>
    </div>
  );
}

export default NavBar;
