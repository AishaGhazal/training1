import React from "react";
import "./Navbar.css";
import icon from "./assets/icon.png";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <img src={icon} alt="Logo" />
        </div>
        <h1>D4choco</h1>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#shop">Shop</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="search-cart">
          <input
            type="text"
            placeholder="Search..."
            className="search-box"
            aria-label="Search"
          />
          <div className="cart-icon" title="Cart">🛒</div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;