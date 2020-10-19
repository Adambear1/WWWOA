import React from "react";
import { Link } from "react-scroll";

function LandingPage() {
  return (
    <div class="uk-section-secondary uk-preserve-color">
      <div uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent uk-dark; top: 200">
        <nav class="uk-navbar-container">
          <div class="uk-container uk-container-expand">
            <div uk-navbar="true">
              <ul class="uk-navbar-nav">
                <li class="uk-active">
                  <Link to="" smooth={true} offset={50} duration={500}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="announcements"
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    Announcements
                  </Link>
                </li>
                <li>
                  <Link to="schedule" smooth={true} offset={50} duration={500}>
                    schedule
                  </Link>
                </li>
                <li>
                  <Link
                    to="rulechanges"
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    Rule Changes
                  </Link>
                </li>
                <li>
                  <a uk-toggle="target: #chatroom" type="button">
                    Chat Room
                  </a>
                </li>
              </ul>
              <nav class="uk-navbar-right" uk-navbar="true">
                <ul class="uk-navbar-nav">
                  <li>
                    <a href="/">Logout</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </nav>
      </div>

      <div class="uk-section uk-light">
        <div class="uk-container">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum.
          </p>

          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
