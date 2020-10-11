import React, { useEffect } from "react";
// styles
import "./styles.css";
// images
import image from "./images/wrestling.jpg";
import NavbarLogin from "../NavbarLogin";

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
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#join">Join</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
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
