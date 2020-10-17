import session from "express-session";
import React, { useEffect, useState, useContext } from "react";
import auth from "../../../Authenticate";
import API from "../../../utils/API";
import { Context } from "../../Context";

function NavbarLogin(props) {
  const [data, setData] = useState({
    name: "",
    password: "",
  });
  const { value, setValue } = useContext(Context);
  const [jwt, setJWT] = useState("");
  useEffect(() => {
    if (data.password.length === 7) {
      API.Validate(data).then(({ data }) => {
        let { token } = data;
        setJWT(token);
        setValue({ jwt });
      });
    }
  }, [data]);
  function onSubmit(e) {
    e.preventDefault();
    API.Login(data, jwt).then(({ data }) => {
      // auth.login(() => {
      window.location.href = "/main";
      // });
    });
  }
  console.log(value);
  return (
    <div class="uk-navbar-right">
      <ul class="uk-navbar-nav">
        <li>
          <a href="#">Login</a>
          <div class="uk-navbar-dropdown">
            <ul class="uk-nav uk-navbar-dropdown-nav">
              <li class="uk-active">
                <div class="uk-text-center">Login</div>
                <form onSubmit={onSubmit}>
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
