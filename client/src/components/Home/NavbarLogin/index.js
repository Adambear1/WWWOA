import React, { useEffect, useState, useContext, useRef } from "react";
// styles
import "./styles.css";
// context
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
    <div class="collapse" id="login">
      {/* <form onSubmit={onSubmit}> */}
      <div class="form-group collapse-form-group">
        <input
          type="email"
          ref={emailRef}
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Email"
        />
      </div>
      <div class="form-group collapse-form-group">
        <input
          type="password"
          ref={passwordRef}
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>
      <button type="submit" disabled={loading} class="btn btn-primary">
        Submit
      </button>
      {/* </form> */}
    </div>
  );
}

export default NavbarLogin;
