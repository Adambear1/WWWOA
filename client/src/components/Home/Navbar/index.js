import React, { useEffect } from "react";
// styles
import "./styles.css";
// images
import image from "./images/wrestling.jpg";
import NavbarLogin from "../NavbarLogin";
// utils
import { Link } from "react-scroll";

function Navbar() {
  useEffect(() => {}, []);
  return (
    <div class="uk-position-relative navbar">
      <div class="nav-img-container">
        <img class="nav-image" src={image} />
      </div>

      <div class="uk-position-top">
        <nav class="uk-navbar-container uk-navbar-transparent" uk-navbar="true">
          <div class="uk-navbar-left">
            <ul class="uk-navbar-nav">
              <li class="uk-active">
                <Link to="" smooth={true} offset={50} duration={500}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="about" smooth={true} offset={50} duration={500}>
                  About
                </Link>
              </li>
              <li>
                <Link to="join" smooth={true} offset={50} duration={500}>
                  Join
                </Link>
              </li>
              <li>
                <Link to="footer" smooth={true} offset={50} duration={500}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <NavbarLogin />
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
