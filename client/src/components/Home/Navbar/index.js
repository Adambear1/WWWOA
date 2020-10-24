import React, { useEffect } from "react";
// styles
import "./styles.css";

import NavbarLogin from "../NavbarLogin";
// utils
import { Link } from "react-scroll";

function Navbar() {
  useEffect(() => {}, []);
  return (
    <>
      <nav class="navbar navbar-expand-lg  navbar-dark bg-dark">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link active">
              {" "}
              <Link to="" smooth={true} offset={50} duration={500}>
                Home
              </Link>
              <span class="sr-only">(current)</span>
            </a>
            <a class="nav-item nav-link">
              {" "}
              <Link to="about" smooth={true} offset={50} duration={500}>
                About
              </Link>
            </a>
            <a class="nav-item nav-link">
              {" "}
              <Link to="join" smooth={true} offset={50} duration={500}>
                Join
              </Link>
            </a>
            <a class="nav-item nav-link">
              {" "}
              <Link to="footer" smooth={true} offset={50} duration={500}>
                Contact
              </Link>
            </a>
          </div>
        </div>
        <a
          class="nav-item nav-link"
          id="navbarToggleExternalContent"
          data-toggle="collapse"
          href="#login"
          role="button"
          aria-expanded="false"
          aria-controls="login"
        >
          Login
        </a>
      </nav>
    </>
  );
}

export default Navbar;
