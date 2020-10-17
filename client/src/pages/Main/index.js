import React from "react";
import LandingPage from "../../components/Main/LandingPage";
import Schedule from "../../components/Main/Schedule";

function Main() {
  return (
    <>
      <LandingPage />
      <div className="uk-container">
        <Schedule />
      </div>
    </>
  );
}

export default Main;
