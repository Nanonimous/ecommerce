import React, { useState } from "react";
import nav from "./Navbar.module.css";
import logo from "../../assets/NavBar/MainLogo.png";
import User from "../../assets/NavBar/User.png";
import Search from "../../assets/NavBar/Search.png";
import Fav from "../../assets/NavBar/Fav.png";
import Cart from "../../assets/NavBar/shopCart.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={nav.mainContainer}>
      {/* Logo */}
      <div className={nav.logoContainer}>
        <img src={logo} className={nav.logo} alt="Logo" />
        <h1 className={nav.logoTitle}>Furniro</h1>
      </div>

      {/* Hamburger Icon (mobile only) */}
      <div className={nav.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✖" : "☰"}
      </div>
      

      {/* Nav Links (toggled on mobile) */}
      <div className={`${nav.linkdSection} ${menuOpen ? nav.showMenu : ""}`}>
        <div className={nav.text}>Home</div>
        <div className={nav.text}>Shop</div>
        <div className={nav.text}>About</div>
        <div className={nav.text}>Contact</div>
      </div>

      {/* Accessibility Icons (toggled on mobile) */}
      <div
        className={`${nav.accessibilitiesSection} ${menuOpen ? nav.showMenu : ""}`}
      >
        <img src={User} alt="User" />
        <img src={Search} alt="Search" />
        <img src={Fav} alt="Favorites" />
        <img src={Cart} alt="Cart" />
      </div>
    </div>
  );
}