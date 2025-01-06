// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line no-unused-vars
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// eslint-disable-next-line no-unused-vars
import SearchIcon from "@mui/icons-material/Search";
// eslint-disable-next-line no-unused-vars
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = () => {
  return (
    <nav className="navbar">
    {/* Logo Section */}
    <div className="navbar-logo">
      <span className="logo-yellow">blink</span>
      <span className="logo-green">it</span>
    </div>

    {/* Delivery Info Section */}
    <div className="navbar-delivery">
      <span className="delivery-time">Delivery in 10 minutes</span>
      <span className="delivery-location">
        Mavdi Chowkdi, Rajkot, Gujarat ... <ArrowDropDownIcon  className="dropdown-icon" />
        
      </span>
    </div>

    {/* Search Section */}
    <div className="navbar-search">
      <SearchIcon className="search-icon" />
      <input
        type="text"
        placeholder='Search "paneer"'
        className="search-input"
      />
    </div>

    {/* Authentication & Cart Section */}
    <div className="navbar-auth">
      <span className="login">Login</span>
      <button className="cart-button">
        <ShoppingCartIcon className="cart-icon" /> My Cart
      </button>
    </div>
  </nav>
  );
};

export default Navbar;
