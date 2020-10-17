import React from "react";

function LandingPage() {
  return (
    <div class="uk-section-secondary uk-preserve-color">
      <div uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent uk-light; top: 200">
        <nav class="uk-navbar-container">
          <div class="uk-container uk-container-expand">
            <div uk-navbar="true">
              <ul class="uk-navbar-nav">
                <li class="uk-active">
                  <a href="#">Announcements</a>
                </li>
                <li>
                  <a href="#">Schedule</a>
                </li>
                <li>
                  <a href="#">Rule Changes</a>
                </li>
              </ul>
            </div>
          </div>
          {/* <nav class="uk-navbar-right" uk-navbar="true"> */}
          {/* <ul class="uk-navbar-nav">
              <li>Logout</li>
            </ul>
          </nav> */}
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
