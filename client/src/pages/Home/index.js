import React from "react";
import Container from "../../components/Home/Container";
import Footer from "../../components/Home/Footer";
import Navbar from "../../components/Home/Navbar";
import NavbarImage from "../../components/Home/NavbarImage";
import NavbarLogin from "../../components/Home/NavbarLogin";
import NavTitle from "../../components/Home/NavTitle";

function Home() {
  return (
    <>
      <Navbar />
      <NavbarLogin />
      <NavbarImage />
      <NavTitle />
      <div class="uk-container">
        {" "}
        <Container />
      </div>
      <Footer />
    </>
  );
}

export default Home;
