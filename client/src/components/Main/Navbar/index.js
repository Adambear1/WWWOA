import React from "react";

function Navbar() {
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
                <a href="/announcements">Announcements</a>
              </li>
              <li>
                <a href="/questionandanswers">Question and Answers</a>
              </li>
              <li>
                <a href="/rulechanges">Rule Changes</a>
              </li>
              <li>
                <a href="/meetingschedule">Meeting Schedule</a>
              </li>
            </ul>
          </div>
          {/* logout */}
          <div class="uk-navbar-right">
            <ul class="uk-navbar-nav">
              <li>
                <a href="#">Login</a>
                <div class="uk-navbar-dropdown">
                  <ul class="uk-nav uk-navbar-dropdown-nav">
                    <li class="uk-active">
                      <div class="uk-text-center">Login</div>
                      <form>
                        <button class="uk-button uk-button-default uk-margin-auto">
                          Logout
                        </button>
                      </form>
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
