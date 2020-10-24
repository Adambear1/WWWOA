import React from "react";
// images
import image from "./images/wrestling.jpg";
// styles
import "./styles.css";
function NavbarImage() {
  return (
    <div class="navbar nav-img-container">
      <img class="nav-image" src={image} />
    </div>
  );
}

export default NavbarImage;
