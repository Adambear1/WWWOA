import React from "react";
// styles
import "./styles.css";
// images
import image from "./images/wrestling.jpg";

function Navbar() {
  return (
    <div class="uk-position-relative navbar">
      <div class="nav-image-div">
        <img src={image} alt="" class="nav-image" />
      </div>
      <div class="uk-position-top">
        <nav class="uk-navbar-container uk-navbar-transparent" uk-navbar="true">
          <div class="uk-navbar-left">
            <ul class="uk-navbar-nav">
              <li class="uk-active">
                <a href="#">Active</a>
              </li>
              <li>
                <a href="#">Item</a>
              </li>
              <li>
                <a href="#">Parent</a>
                <div class="uk-navbar-dropdown">
                  <ul class="uk-nav uk-navbar-dropdown-nav">
                    <li class="uk-active">
                      <a href="#">Active</a>
                    </li>
                    <li>
                      <a href="#">Item</a>
                    </li>
                    <li class="uk-nav-header">Header</li>
                    <li>
                      <a href="#">Item</a>
                    </li>
                    <li>
                      <a href="#">Item</a>
                    </li>
                    <li class="uk-nav-divider"></li>
                    <li>
                      <a href="#">Item</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
