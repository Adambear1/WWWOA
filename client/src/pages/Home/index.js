import React from "react";
import Container from "../../components/Home/Container";
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
    </>
  );
}

export default Home;
