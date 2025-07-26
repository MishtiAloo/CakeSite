import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../styles/Navbar.css";
import logo from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import NavSlider from "./NavSlider";
import ProductSearch from "./ProductSearch";

import { FaRegUser } from "react-icons/fa";
import { userStore } from "../stores/user.store";

function Navbar() {
  const [isFixed, setIsFixed] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = userStore();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const triggerPoint = window.innerHeight * 0.12;
      setIsFixed(scrollY > triggerPoint);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);

    const menu = document.querySelector(".slider-container");
    menu.classList.toggle("active");

    const nav = document.querySelector(".nav-container");
    nav.style.transform = "translateX(-120%)";
  };

  const handleloginSignup = () => {
    navigate("/logsign");
  };

  function handleProfile() {
    navigate("/profile");
  }

  return (
    <>
      <div className={`nav-container ${isFixed ? "fixed" : ""}`}>
        <div className="nav-logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="nav-links">
          <Link to="/home" className="clickables">
            Home
          </Link>
          <Link to="/about" className="clickables">
            About
          </Link>
          <Link to="/prodpage" className="clickables">
            Products
          </Link>
          <Link to="/offerpage" className="clickables">
            Offers
          </Link>
          <Link to="/cart" className="clickables">
            Cart
          </Link>
          <Link to="/contact" className="clickables">
            Contact Us
          </Link>
        </div>
        <div className="nav-search">
          <ProductSearch />
        </div>

        <div className="nav-profile-menu">
          {user ? (
            <div className="account clickables" onClick={handleProfile}>
              <img src={user.userProfileImage} alt="" />
            </div>
          ) : (
            <div
              className="account clickables"
              style={{
                boxShadow: "none",
                overflow: "visible",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                backgroundColor: "wheat",
                borderRadius: "1rem",
                padding: "0.8rem",
              }}
              onClick={handleloginSignup}
            >
              <FaRegUser />
              <div style={{ lineHeight: "0.9rem" }}>
                <p>Login/ </p>
                <p>Register</p>
              </div>
            </div>
          )}

          <div className="menu clickables" onClick={handleMenu}>
            <GiHamburgerMenu />
          </div>
        </div>
      </div>
      <NavSlider />
    </>
  );
}

export default Navbar;
