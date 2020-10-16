import React from "react";
import Container from "../../components/Home/Container";
import Footer from "../../components/Home/Footer";
import Navbar from "../../components/Home/Navbar";
import NavTitle from "../../components/Home/NavTitle";

function Home() {
  return (
    <>
      <Navbar />
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
