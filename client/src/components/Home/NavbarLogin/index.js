import React from "react";

function NavbarLogin() {
  return (
    <div class="uk-navbar-right">
      <ul class="uk-navbar-nav">
        <li>
          <a href="#">Parent</a>
          <div class="uk-navbar-dropdown">
            <ul class="uk-nav uk-navbar-dropdown-nav">
              <li class="uk-active">
                <div class="uk-text-center">Login</div>
                <form>
                  <div class="uk-margin">
                    <div class="uk-inline">
                      <span class="uk-form-icon" uk-icon="icon: user"></span>
                      <input class="uk-input" type="text" />
                    </div>
                  </div>

                  <div class="uk-margin">
                    <div class="uk-inline">
                      <span
                        class="uk-form-icon uk-form-icon"
                        uk-icon="icon: lock"
                      ></span>
                      <input class="uk-input" type="text" />
                    </div>
                  </div>
                </form>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default NavbarLogin;
