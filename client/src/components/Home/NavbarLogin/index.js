import React, { useEffect, useState } from "react";
import API from "../../../utils/API";

function NavbarLogin() {
  const [data, setData] = useState({
    name: "",
    password: "",
  });
  const [jwt, setJWT] = useState("");
  useEffect(() => {
    API.Validate(data).then(({ data }) => {
      console.log(data);
    });
  }, [data.password.length === 6]);
  function onSubmit(e) {
    e.preventDefault();
  }
  return (
    <div class="uk-navbar-right">
      <ul class="uk-navbar-nav">
        <li>
          <a href="#">Login</a>
          <div class="uk-navbar-dropdown">
            <ul class="uk-nav uk-navbar-dropdown-nav">
              <li class="uk-active">
                <div class="uk-text-center">Login</div>
                <form>
                  <div class="uk-margin">
                    <div class="uk-inline">
                      <span class="uk-form-icon" uk-icon="icon: user"></span>
                      <input
                        class="uk-input"
                        name="name"
                        type="text"
                        onChange={(e) =>
                          setData({ ...data, [e.target.name]: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div class="uk-margin">
                    <div class="uk-inline">
                      <span
                        class="uk-form-icon uk-form-icon"
                        uk-icon="icon: lock"
                      ></span>
                      <input
                        class="uk-input"
                        type="password"
                        name="password"
                        onChange={(e) =>
                          setData({ ...data, [e.target.name]: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  {data.name && data.password && (
                    <button
                      class="uk-button uk-button-default uk-margin-auto"
                      onSubmit={onSubmit}
                    >
                      Login
                    </button>
                  )}
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
