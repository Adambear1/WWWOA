import React, { useEffect, useState, useContext, useRef } from "react";
import { useAuth } from "../../../context/AuthContext";
import { useHistory } from "react-router-dom";

function NavbarLogin(props) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");
  const history = useHistory();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch (error) {
      setError("Failed to Login.");
    }
    setLoading(false);
  };

  return (
    <div class="uk-navbar-right">
      <ul class="uk-navbar-nav">
        <li>
          <a>Login</a>
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
                        ref={emailRef}
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
                        ref={passwordRef}
                      />
                    </div>
                  </div>
                  {/* {emailRef.current.value.length > 1 &&
                    passwordRef.current.value.length > 1 && ( */}
                  <button
                    class="uk-button uk-button-default uk-margin-auto"
                    disabled={loading}
                    type="submit"
                  >
                    Login
                  </button>
                  {/* )} */}
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
