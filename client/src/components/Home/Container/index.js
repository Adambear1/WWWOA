import React from "react";
import About from "../About";
import Contact from "../Contact";
import Join from "../Join";

function Container() {
  return (
    <div uk-grid="true">
      <About />
      <Join />
      <Contact />
    </div>
  );
}

export default Container;
